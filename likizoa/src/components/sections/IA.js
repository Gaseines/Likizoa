import { useRef, useEffect } from 'react';

import styles from './IA.module.css'
import stylesAni from './animacoes.module.css';
import code from '../../image/CODE.png'

function IA(){

    const QRCodeRef = useRef(null) 
    const textoRef = useRef(null)

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

        if (QRCodeRef.current) observer.observe(QRCodeRef.current);
        if (textoRef.current) observer.observe(textoRef.current);


        return () => {
            if (QRCodeRef.current) observer.unobserve(QRCodeRef.current);
            if (textoRef.current) observer.unobserve(textoRef.current);
        };
    }, []);

    return(
        <div className={styles.container_IA}>
                <div className={styles.IA}>
                    <div ref={textoRef} className={`${styles.texto_IA} ${styles.secao_IA}`}>
                        <h1 className={styles.titulo_IA}>Assistente IA
                            <p className={styles.desc_IA}>Inteligência Artificial</p>
                        </h1>
                        <p className={styles.escrita_IA}>Nossa empresa conta com uma inteligência artificial para solucionar suas
                            duvidas, caso tenha ficado com alguma dúvida ou quer que seja explicado algum ponto de uma
                            forma específica, acesse nosso assitente inteligente no link à baixo, ou escaneie o QR Code
                        </p>
                        <a className={styles.link_IA} href="https://chatgpt.com/g/g-adStloXb7-assitente-likizoa" target="_blank">Assistente inteligente...</a>
                    </div>
                    <div ref={QRCodeRef} className={`${styles.QRcode_IA} ${styles.secao_IA}`}>
                        <img src={code} alt="" />
                    </div>
                </div>
            </div>
    )
}

export default IA