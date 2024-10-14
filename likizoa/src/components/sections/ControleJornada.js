import React, { useEffect, useRef } from 'react'

import styles from './ControleJornada.module.css'
import stylesAni from './animacoes.module.css'

function ControleJornada() {

    const escritaRef = useRef(null)
    const tituloRef = useRef(null)

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

        if (escritaRef.current) observer.observe(escritaRef.current);


        return () => {
            if (escritaRef.current) observer.unobserve(escritaRef.current);
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

        if (tituloRef.current) observer.observe(tituloRef.current);


        return () => {
            if (tituloRef.current) observer.unobserve(tituloRef.current);
        };
    }, []);

    return (
        <div className={styles.container_controle_de_jornada}>
                <div className={styles.controle_jornada} id="controle_jornada">

                    {/* <!-- Texto explicativo sobre o controle de jornada --> */}
                    <div className={styles.container_escrita}>
                        <h1 ref={tituloRef} className={styles.titulo_controle_de_jornada}>Controle de jornada</h1>
                        <p ref={escritaRef} className={styles.texto_controle_de_jornada}>De acordo com a <a target="_blank"
                                href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13103.htm"
                                className={styles.lei}>Lei 13.103</a>, o controle da jornada dos motoristas deve ser feito
                            diariamente e em tempo real, registrando os horários de início e fim da condução, pausas e
                            períodos de descanso. Isso é essencial para garantir que os motoristas respeitem os limites
                            de direção e a jornada máxima de trabalho, assegurando tanto a segurança quanto a
                            conformidade com a legislação.</p>
                    </div>

                </div>
                {/* <!-- Efeito de desfoque específico para esta seção --> */}
                <div className={styles.blur_controle_de_jornada}></div>
            </div>
    )
}

export default ControleJornada