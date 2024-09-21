let burguer = document.querySelector('.burguer')
let fechar = document.querySelector('.fechado')
let menu = document.querySelector('.menu')
let listaMenu = document.querySelector('.lista_menu')
let itensMenu = document.querySelectorAll('.itens_menu')
let navMenu = document.querySelector('.nav_menu')

//Mudança de tela
document.addEventListener('DOMContentLoaded', () => {
    function tamanhoTela(){
        if(window.innerWidth >= 1100){
            burguer.style.display = 'none'
            fechar.style.display = 'none'
            menu.style.height = '100px'
            menu.style.flexDirection = 'row'
            listaMenu.style.display = 'flex'
            listaMenu.style.opacity = 1
        }else{
            burguer.classList.remove('giraCloseD')
            burguer.style.display = 'block'
            menu.style.height = '0%'
            listaMenu.style.display = 'none'
        }
    }

    window.addEventListener('resize', tamanhoTela())
    window.addEventListener('load', tamanhoTela())
})

//funções menu

//clicar nos links

itensMenu.forEach(itens =>{
    itens.addEventListener('click', () => {
        if(window.innerWidth < 1100){
            menu.style.height = '0%'
    fechar.classList.remove('giraOpenD')
    fechar.classList.add('giraCloseE')
    navMenu.style.height = '0%'

    setTimeout(() => {
        listaMenu.style.opacity = 0
        burguer.style.display = 'block'
        burguer.classList.add('giraOpenE')
        burguer.classList.remove('giraCloseD')
    }, 200)

    setTimeout(() =>{
        
        listaMenu.style.display = 'none'
    }, 700)
        }
    })
})

//Abrir e fechar
burguer.addEventListener('click', () =>{
    menu.style.height = '100%'
    burguer.classList.remove('giraOpenE')
    burguer.classList.add('giraCloseD')
    fechar.classList.remove('giraCloseE')
    navMenu.style.height = '100%'

    setTimeout(() => {
        listaMenu.style.display = 'block'
        fechar.style.display = 'block'
        fechar.classList.add('giraOpenD')
        
    }, 200)

    setTimeout(() =>{
        listaMenu.style.opacity = 1
    }, 500)
})

fechar.addEventListener('click', () =>{
    menu.style.height = '0%'
    fechar.classList.remove('giraOpenD')
    fechar.classList.add('giraCloseE')
    navMenu.style.height = '0%'

    setTimeout(() => {
        listaMenu.style.opacity = 0
        burguer.style.display = 'block'
        burguer.classList.add('giraOpenE')
        burguer.classList.remove('giraCloseD')
    }, 200)

    setTimeout(() =>{
        
        listaMenu.style.display = 'none'
    }, 700)

})

