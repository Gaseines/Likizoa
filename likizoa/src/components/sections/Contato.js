import React, { useRef, useEffect } from 'react'

import styles from './Contato.module.css'
import stylesAni from './animacoes.module.css';

function Contato(){

    const contatoRef = useRef(null)

    // animação Baixo para Cima
    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(stylesAni.ani_BC);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });

        if (contatoRef.current) observer.observe(contatoRef.current);
        


        return () => {
            if (contatoRef.current) observer.unobserve(contatoRef.current);
            
        };
    }, []);


    return(
        <div id="contatos" className={styles.container_contato}>
                <div ref={contatoRef} className={styles.contato}>
                    <h1 className={styles.titulo_contato}>Likizoa Serviços e Treinamentos</h1>
                    <p className={styles.desc_contato}>Especializada em gestão de controle de jornada dos motoristas dentre outros
                        serviços na área de gestão de RH.</p>
                    <div className={styles.container_numeros_contato}>
                        <p className={styles.numeros_contato}>(49) 9 9982-8876 - Comercial <br /> Everson Nunes <br /> <a
                                className={styles.link_whats}
                                href="https://wa.me/5549999828876?text=Ol%C3%A1%21%20Estava%20visitando%20o%20site%20da%20empresa%20Likizoa%20e%20fiquei%20interessado%28a%29%20no%20trabalho%20de%20voc%C3%AAs%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es."
                                target="_blank">Whatsapp...</a></p>
                        <p className={styles.numeros_contato}> (47) 9 9694-0605 - Operacional <br /> Jaeder Covas <br /> <a
                                className={styles.link_whats}
                                href="https://wa.me/5547996940605?text=Ol%C3%A1%21%20Estava%20visitando%20o%20site%20da%20empresa%20Likizoa%20e%20fiquei%20interessado%28a%29%20no%20trabalho%20de%20voc%C3%AAs%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es."
                                target="_blank">Whatsapp...</a></p>
                    </div>
                </div>
            </div>
    )
}

export default Contato