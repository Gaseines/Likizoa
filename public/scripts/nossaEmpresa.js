let item1 = document.querySelector('.metodo_01')
let item2 = document.querySelector('.metodo_02')
let carrossel = document.querySelector('.carrossel_metodos')
let i = 0
let bolinha1 = document.querySelector('.bolinha_01')
let bolinha2 = document.querySelector('.bolinha_02')

document.addEventListener('DOMContentLoaded', () =>{
    
    carrossel.addEventListener('click', () => {
        if(i < 50){
            i = 51
            console.log(i)
        }else if(i = 51){
            i = 2
            console.log(i)
            atraso()
        }
    })

    function atraso(){
        if(i < 50 && item1.classList.contains('entra_carrossel')){
            item1.classList.remove('entra_carrossel')
            item1.classList.add('sai_carrossel')

        setTimeout(() => {
            if(i < 50){
                item2.classList.remove('sai_carrossel')
                item2.classList.add('entra_carrossel')

                bolinha1.style.background = 'white'
                bolinha2.style.background = 'black'
            }
        }, 500)

        setTimeout(() => {
            if(i < 50){
                item2.classList.remove('entra_carrossel')
                item2.classList.add('sai_carrossel')
            }
        }, 5500)

        setTimeout(() => {
            if(i < 50){
                item1.classList.remove('sai_carrossel')
                item1.classList.add('entra_carrossel')

                bolinha2.style.background = 'white'
                bolinha1.style.background = 'black'
            }
        }, 6500)

        setTimeout(() => {
            i++
            atraso()
        }, 11500)

        }else if(i < 50 && item1.classList.contains('sai_carrossel')){
            item2.classList.remove('entra_carrossel')
            item2.classList.add('sai_carrossel')

        setTimeout(() => {
            if(i < 50){
                item1.classList.remove('sai_carrossel')
                item1.classList.add('entra_carrossel')

                bolinha2.style.background = 'white'
                bolinha1.style.background = 'black'
            }
        }, 500)

        setTimeout(() => {
            i++
            atraso()
        }, 5500)

        }
    }
    atraso()

    
})
