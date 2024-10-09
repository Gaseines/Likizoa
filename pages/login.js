// Função para carregar o JSON com os CNPJs e CPFs
async function carregarDados() {
    const response = await fetch('../dados.json'); // Caminho para o arquivo JSON
    const dados = await response.json();
    return dados;
}

// Função para adicionar animação de fade-in
function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = 'block';
    let op = 0.1;  // Inicializa a opacidade
    const timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += op * 0.1;
    }, 10);
}

// Função para adicionar animação de fade-out
function fadeOut(element) {
    let op = 1;  // Inicializa a opacidade em 1
    const timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        op -= op * 0.1;
    }, 10);
}

// Quando o tipo de login (cliente ou funcionário) é alterado
document.getElementById('user-type').addEventListener('change', function() {
    const userType = this.value;  // Captura o valor selecionado (cliente ou funcionário)
    const clienteSection = document.getElementById('cliente-section');  // Seção do cliente
    const funcionarioSection = document.getElementById('funcionario-section');  // Seção do funcionário

    // Se o usuário escolher "Cliente", aplica a animação de fade-in na seção de CNPJ
    if (userType === 'cliente') {
        fadeOut(funcionarioSection);
        fadeIn(clienteSection);
    } 
    // Se o usuário escolher "Funcionário", aplica a animação de fade-in na seção de CPF
    else if (userType === 'funcionario') {
        fadeOut(clienteSection);
        fadeIn(funcionarioSection);
    } 
    // Se o usuário não selecionar nada, esconde ambas as seções
    else {
        fadeOut(clienteSection);
        fadeOut(funcionarioSection);
    }
});

// Função para remover caracteres especiais do CNPJ/CPF
function limparCNPJCPF(valor) {
    return valor.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
}

// Validação do CPF em tempo real
function validarCPF(cpf) {
    cpf = limparCNPJCPF(cpf); // Limpa o CPF, removendo caracteres especiais
    if (cpf.length !== 11) return false; // Verifica se o CPF tem 11 dígitos
    
    // Lógica básica de validação do CPF (verificação de dígitos verificadores)
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
}

// Ação ao submeter para clientes
document.getElementById('cliente-submit').addEventListener('click', async function(e) {
    e.preventDefault();
    let cnpj = document.getElementById('cnpj').value; // Captura o valor do CNPJ
    cnpj = limparCNPJCPF(cnpj); // Limpa o CNPJ, removendo caracteres especiais
    const dados = await carregarDados(); // Carrega os dados do JSON

    // Encontra o cliente pelo CNPJ
    const cliente = dados.clientes.find(c => c.cnpj === cnpj);

    if (cliente) {
        // Redireciona o cliente para o link correto
        window.location.href = cliente.link;
    } else {
        alert('CNPJ não encontrado.');
    }
});

// Ação ao submeter para funcionários
document.getElementById('cpf').addEventListener('input', async function() {
    let cpf = this.value; // Captura o valor do CPF
    cpf = limparCNPJCPF(cpf); // Limpa o CPF, removendo caracteres especiais
    const cpfError = document.getElementById('cpf-error');
    const clienteDropdown = document.getElementById('cliente-dropdown');
    const funcionarioSubmit = document.getElementById('funcionario-submit');
    const clienteSelect = document.getElementById('clientes'); // Dropdown de clientes

    const dados = await carregarDados(); // Carrega os dados do JSON

    // Encontra o funcionário pelo CPF
    const funcionario = dados.funcionarios.find(f => f.cpf === cpf);

    if (funcionario) {
        cpfError.style.display = 'none';
        clienteDropdown.style.display = 'block';
        funcionarioSubmit.style.display = 'block';

        // Preenche o dropdown com os clientes vinculados ao funcionário
        clienteSelect.innerHTML = '<option value="">Escolha um cliente...</option>';
        funcionario.clientes.forEach(cliente => {
            clienteSelect.innerHTML += `<option value="${cliente.link}">${cliente.nome}</option>`;
        });
    } else {
        // Exibe erro se o CPF não for encontrado
        cpfError.style.display = 'block';
        clienteDropdown.style.display = 'none';
        funcionarioSubmit.style.display = 'none';
    }
});

// Ação ao submeter o formulário de funcionário
document.getElementById('funcionario-submit').addEventListener('click', function(e) {
    e.preventDefault();
    let cpf = document.getElementById('cpf').value; // Captura o valor do CPF
    cpf = limparCNPJCPF(cpf); // Limpa o CPF, removendo caracteres especiais
    const clienteLink = document.getElementById('clientes').value; // Captura o link do cliente selecionado

    if (clienteLink) {
        // Redireciona para o link do cliente selecionado
        window.location.href = clienteLink;
    } else {
        alert('Por favor, selecione um cliente.');
    }
});
