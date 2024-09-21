let item1 = document.querySelector('.metodo_01');
let item2 = document.querySelector('.metodo_02');
let bolinha1 = document.querySelector('.bolinha_01');
let bolinha2 = document.querySelector('.bolinha_02');
let isItem1Visible = true; // Controla qual item está visível

// Função para alternar entre os itens do carrossel
function alternarCarrossel() {
    if (isItem1Visible) {
        // Mostra item2, esconde item1
        item1.classList.remove('entra_carrossel');
        item1.classList.add('sai_carrossel');
        item2.classList.remove('sai_carrossel');
        item2.classList.add('entra_carrossel');
        
        // Alterna as bolinhas
        bolinha1.style.background = 'white';
        bolinha2.style.background = 'black';
    } else {
        // Mostra item1, esconde item2
        item2.classList.remove('entra_carrossel');
        item2.classList.add('sai_carrossel');
        item1.classList.remove('sai_carrossel');
        item1.classList.add('entra_carrossel');
        
        // Alterna as bolinhas
        bolinha2.style.background = 'white';
        bolinha1.style.background = 'black';
    }
    isItem1Visible = !isItem1Visible; // Alterna o estado de visibilidade
}

// Função que faz o carrossel alternar automaticamente a cada 5.5 segundos
function iniciarCarrossel() {
    setInterval(() => {
        alternarCarrossel(); // Alterna os itens automaticamente
    }, 5500); // Intervalo de 5.5 segundos entre as trocas
}

// Inicializa o carrossel assim que o conteúdo for carregado
document.addEventListener('DOMContentLoaded', () => {
    iniciarCarrossel(); // Começa a alternância automática
});

// Previne qualquer comportamento de recarregamento ou foco indesejado
document.querySelector('.carrossel_metodos').addEventListener('click', (e) => {
    e.preventDefault(); // Garante que o clique não cause a rolagem ou atualização
});
