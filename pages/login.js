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

// Importações do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBleDJAM74ejmlv37Jgf_nA1bmgZ7VV8eg",
    authDomain: "dadoslikizoa.firebaseapp.com",
    projectId: "dadoslikizoa",
    storageBucket: "dadoslikizoa.appspot.com",
    messagingSenderId: "227680396836",
    appId: "1:227680396836:web:cf19dd79b9ab8d11cddab1"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para carregar dados do Firestore
async function carregarDados() {
    const clientesSnapshot = await getDocs(collection(db, "clientes"));
    const funcionariosSnapshot = await getDocs(collection(db, "funcionarios"));

    const clientes = clientesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const funcionarios = funcionariosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return { clientes, funcionarios };
}

// Quando o tipo de login (cliente ou funcionário) é alterado
document.getElementById('user-type').addEventListener('change', function() {
    const userType = this.value;
    const clienteSection = document.getElementById('cliente-section');
    const funcionarioSection = document.getElementById('funcionario-section');

    if (userType === 'cliente') {
        fadeOut(funcionarioSection);
        fadeIn(clienteSection);
    } else if (userType === 'funcionario') {
        fadeOut(clienteSection);
        fadeIn(funcionarioSection);
    } else {
        fadeOut(clienteSection);
        fadeOut(funcionarioSection);
    }
});

// Função para remover caracteres especiais do CNPJ/CPF
function limparCNPJCPF(valor) {
    return valor.replace(/\D/g, '');
}

// Ação ao submeter para clientes
document.getElementById('cliente-submit').addEventListener('click', async function(e) {
    e.preventDefault();
    let msgAlert = document.getElementById('alert');
    let cnpj = document.getElementById('cnpj').value;
    cnpj = limparCNPJCPF(cnpj);
    

    try {
        const dados = await carregarDados();
        const cliente = dados.clientes.find(c => c.cnpj === cnpj);

        if (cliente) {
            window.location.href = cliente.link;
        } else {
            msgAlert.style.display = 'block'
        }
    } catch (error) {
        console.error("Erro ao buscar dados do Firestore:", error);
        alert("Erro ao buscar dados. Tente novamente.");
    }
});

// Ação ao submeter para funcionários
document.getElementById('cpf').addEventListener('input', async function() {
    let cpf = this.value;
    cpf = limparCNPJCPF(cpf);

    const cpfError = document.getElementById('cpf-error');
    const clienteDropdown = document.getElementById('cliente-dropdown');
    const funcionarioSubmit = document.getElementById('funcionario-submit');
    const clienteSelect = document.getElementById('clientes');

    try {
        const dados = await carregarDados();
        const funcionario = dados.funcionarios.find(f => f.cpf === cpf);

        if (funcionario) {
            cpfError.style.display = 'none';
            fadeIn(clienteDropdown);
            fadeIn(funcionarioSubmit);

            clienteSelect.innerHTML = '<option value="">Escolha um cliente...</option>';
            funcionario.clientes.forEach(cliente => {
                clienteSelect.innerHTML += `<option value="${cliente.link}">${cliente.nome}</option>`;
            });
        } else {
            cpfError.style.display = 'block';
            fadeOut(clienteDropdown);
            fadeOut(funcionarioSubmit);
        }
    } catch (error) {
        console.error("Erro ao buscar dados do Firestore:", error);
        alert("Erro ao buscar dados. Tente novamente.");
    }
});

// Ação ao submeter o formulário de funcionário
document.getElementById('funcionario-submit').addEventListener('click', function(e) {
    e.preventDefault();
    let cpf = document.getElementById('cpf').value;
    cpf = limparCNPJCPF(cpf);
    const clienteLink = document.getElementById('clientes').value;

    if (clienteLink) {
        window.location.href = clienteLink;
    } else {
        alert('Por favor, selecione um cliente.');
    }
});