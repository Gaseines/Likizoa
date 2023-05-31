const btnDashboard = document.getElementById('btnD')
const subDash = document.getElementById('dash-sub')
const btnCadastro = document.getElementById('btnCadastro')
const subCadas = document.getElementById('cadasSub')


btnDashboard.addEventListener('click', openSubDash)
btnCadastro.addEventListener('click', openSubCadastro)

function openSubDash(){
    if(subDash.style.display === 'block'){
        subDash.style.display = 'none'
        btnDashboard.classList.remove('btn-after-open')
    }else{
        subDash.style.display = 'block'
        btnDashboard.classList.add('btn-after-open')
    }
}

function openSubCadastro(){
    if(subCadas.style.display === "block" ){
        subCadas.style.display = "none"
        btnCadastro.classList.remove('btn-after-open')
    }else{
        subCadas.style.display = "block"
        btnCadastro.classList.add('btn-after-open')
    }
}