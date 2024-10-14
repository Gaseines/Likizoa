import React, { useEffect, useRef } from 'react';

import stylesAni from './animacoes.module.css';
import styles from './Capa.module.css';

function Capa() {
    const nomeHomeRef = useRef(null);
    const fraseHomeRef = useRef(null);
    // animação Direita para Esquerda
    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(stylesAni.ani_escrita_DE);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });

        if (nomeHomeRef.current) observer.observe(nomeHomeRef.current);


        return () => {
            if (nomeHomeRef.current) observer.unobserve(nomeHomeRef.current);
        };
    }, []);

    // animação Esquerda para Direita
    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(stylesAni.ani_escrita_ED);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });

        if (fraseHomeRef.current) observer.observe(fraseHomeRef.current);


        return () => {
            if (fraseHomeRef.current) observer.unobserve(fraseHomeRef.current);
        };
    }, []);

    return (
        <div className={styles.capa} id="capa">
            <div className={styles.home}>
                <div ref={nomeHomeRef} className={styles.nome_home}>
                    {/* <!-- Título principal e subtítulo --> */}
                    <h1>Likizoa</h1>
                    <p>Serviços e Treinamentos</p>
                </div>
                {/* <!-- Frase principal de destaque --> */}
                <div ref={fraseHomeRef} className={styles.frase}>Gerenciando Horas, Entregando Confiança</div>
            </div>
            {/* <!-- Efeito visual de desfoque sobre a imagem de fundo --> */}
            <div className={styles.blur}></div>
        </div>
    );
}

export default Capa;
