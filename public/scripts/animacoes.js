
//Animações ESQUERDA PARA DIREITA---------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const titluCJ = document.querySelector('.titulo_controle_de_jornada');
    const fraseHome = document.querySelector('.frase')
    const imgNossaEmpresa = document.querySelector('.container_img_nossa_empresa')
    
    // Configuração do Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que ativa a animação quando a div aparece na tela
                entry.target.classList.add('ani_escrita_ED');
            }
        });
    }, { threshold: 0.2 }); // Quando 50% da div estiver visível

    // Inicia a observação
    observer.observe(titluCJ);
    observer.observe(fraseHome)
    observer.observe(imgNossaEmpresa)
    
});

//Animações DIREITA PARA ESQUERDA---------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const escritaCJ = document.querySelector('.texto_controle_de_jornada');
    const likizoaHome= document.querySelector('.nome_home')
    const nossaEmpresa = document.querySelector('.nossa_empresa')
    const imgMetodos = document.querySelector('.img_metodos')

    // Configuração do Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que ativa a animação quando a div aparece na tela
                entry.target.classList.add('ani_escrita_DE');
            }
        });
    }, { threshold: 0.2 }); // Quando 50% da div estiver visível

    // Inicia a observação
    observer.observe(escritaCJ)
    observer.observe(likizoaHome);
    observer.observe(nossaEmpresa);
    observer.observe(imgMetodos);
    
});

//Animações CIMA PARA BAIXO---------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const QRcODE = document.querySelector('.QRcode_IA')
    const txtIA = document.querySelector('.texto_IA')
    const parceiros = document.querySelector('.parceiros')
    const contato = document.querySelector('.contato')

    // Configuração do Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que ativa a animação quando a div aparece na tela
                entry.target.classList.add('ani_BC');
            }
        });
    }, { threshold: 0.2 }); // Quando 50% da div estiver visível

    // Inicia a observação
    observer.observe(QRcODE);
    observer.observe(txtIA)
    observer.observe(parceiros)
    observer.observe(contato)
});
