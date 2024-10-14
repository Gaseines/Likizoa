import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'


import styles from './NossaEmpresa.module.css'
import stylesAni from './animacoes.module.css';

import notbook from '../../image/notbook.jpg'

function NossaEmpresa() {

    const nossaEmpresa = useRef(null)
    const imgRef = useRef(null)

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

        if (nossaEmpresa.current) observer.observe(nossaEmpresa.current);


        return () => {
            if (nossaEmpresa.current) observer.unobserve(nossaEmpresa.current);
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

        if (imgRef.current) observer.observe(imgRef.current);


        return () => {
            if (imgRef.current) observer.unobserve(imgRef.current);
        };
    }, []);




        return (
            <div className={styles.container_nossa_empresa} id="nossa_empresa">
                <div ref={imgRef} className={styles.container_img_nossa_empresa}>
                    <img className={styles.img_nossa_empresa} src={notbook} alt="" />
                </div>
                <div ref={nossaEmpresa} className={styles.nossa_empresa}>
                    <h1 className={styles.titulo_nossa_empresa}>Nossa Empresa</h1>
                    <div className={styles.container_desc_nossa_empresa}>
                        <p className={styles.texto_nossa_empresa}>A LIKIZOA oferece uma solução completa para o controle da jornada
                            dos motoristas, automatizando o registro em tempo real de horários e pausas, reduzindo erros
                            humanos e garantindo o cumprimento das regulamentações. A automação centraliza os dados,
                            elimina a burocracia dos registros manuais e gera relatórios detalhados, permitindo uma
                            análise profunda que otimiza o desempenho da frota e melhora a eficiência operacional.
                        </p>
                        <Link className={styles.link_nossa_empresa} to='/nossaEmpresa' >Ler mais...</Link>
                    </div>
                </div>
            </div>

        )
    }

    export default NossaEmpresa