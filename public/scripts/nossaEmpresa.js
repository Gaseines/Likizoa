// Seleciona os elementos do carrossel e as bolinhas de navegação
let item1 = document.querySelector('.metodo_01');
let item2 = document.querySelector('.metodo_02');
let bolinha1 = document.querySelector('.bolinha_01');
let bolinha2 = document.querySelector('.bolinha_02');
let i = 0; // Contador para controlar o ciclo do carrossel

document.addEventListener('DOMContentLoaded', () => {
    // Função para alternar entre os itens do carrossel
    function alternarCarrossel() {
        if (i % 2 === 0) {
            // Se o contador for par, exibe o item1 e esconde o item2
            item1.classList.add('entra_carrossel');
            item1.classList.remove('sai_carrossel');
            item2.classList.add('sai_carrossel');
            item2.classList.remove('entra_carrossel');
            
            // Altera a cor das bolinhas de navegação
            bolinha1.style.background = 'black';
            bolinha2.style.background = 'white';
        } else {
            // Se o contador for ímpar, exibe o item2 e esconde o item1
            item2.classList.add('entra_carrossel');
            item2.classList.remove('sai_carrossel');
            item1.classList.add('sai_carrossel');
            item1.classList.remove('entra_carrossel');

            // Altera a cor das bolinhas de navegação
            bolinha2.style.background = 'black';
            bolinha1.style.background = 'white';
        }
        i++; // Incrementa o contador
    }

    // Função para reiniciar o carrossel a cada 5.5 segundos
    function iniciarCarrossel() {
        alternarCarrossel();
        setTimeout(iniciarCarrossel, 5500); // Intervalo de 5.5 segundos entre trocas
    }

    // Inicializa o carrossel
    iniciarCarrossel();

    // Evento de clique no carrossel para alternar manualmente entre os itens
    document.querySelector('.carrossel_metodos').addEventListener('click', () => {
        alternarCarrossel(); // Alterna o carrossel ao clicar
    });
});
