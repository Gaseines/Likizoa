const btnDashboard = document.getElementById('btnD')
const btnCadastro = document.getElementById('btn-cadastro')
const btnLog = document.getElementById('btn-logistica')
const btnEx = document.getElementById('btn-exportacao')
const btnGr = document.getElementById('btn-gr')

const subDash = document.getElementById('dash-sub')
const subCadas = document.getElementById('cadas-sub')
const subLog = document.getElementById('log-sub')
const subEx = document.getElementById('ex-sub')
const subGr = document.getElementById('gr-sub')


btnDashboard.addEventListener('click', openSubDash)
btnCadastro.addEventListener('click', openSubCadastro)
btnLog.addEventListener('click', openSubLogistica)
btnEx.addEventListener('click', openSubExportacao)
btnGr.addEventListener('click', openSubGr)


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

function openSubLogistica(){
    if(subLog.style.display === 'block'){
        subLog.style.display = 'none'
        btnLog.classList.remove('btn-after-open')
    }else{
        subLog.style.display = 'block'
        btnLog.classList.add('btn-after-open')
    }
}

function openSubExportacao(){
    if(subEx.style.display === "block"){
        subEx.style.display = 'none'
        btnEx.classList.remove('btn-after-open')
    }else{
        subEx.style.display = 'block'
        btnEx.classList.add('btn-after-open')
    }
}

function openSubGr(){
    if(subGr.style.display === "block"){
        subGr.style.display = 'none'
        btnGr.classList.remove('btn-after-open')
    }else{
        subGr.style.display = 'block'
        btnGr.classList.add('btn-after-open')
    }
}
