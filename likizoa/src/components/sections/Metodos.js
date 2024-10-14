import { useRef, useEffect, useState } from 'react'

import styles from './Metodos.module.css'
import stylesAni from './animacoes.module.css'
import caminhao from '../../image/caminhao_sol.jpg'


function Metodos() {
    const caminhaoRef = useRef(null)
    const bolinhaRef1 = useRef(null)
    const bolinhaRef2 = useRef(null)

    const [metodoClass1, setMetodoClass1] = useState(`${styles.metodo} ${styles.metodo_01} `)
    const [metodoClass2, setMetodoClass2] = useState(`${styles.metodo} ${styles.metodo_02} ${styles.sai_carrossel}`)
    const [mostrandoPrimeiro, setMostrandoPrimeiro] = useState(true)
    const [animacaoAtiva, setAnimacaoAtiva] = useState(true)

    //animação carrossel
    function carrossel() {
        if (mostrandoPrimeiro) {
            setMetodoClass1(`${styles.metodo} ${styles.metodo_01} ${styles.sai_carrossel}`);
            setTimeout(() => {
                setMetodoClass2(`${styles.metodo} ${styles.metodo_02} ${styles.entra_carrossel}`);
    
                if (bolinhaRef1.current) {
                    bolinhaRef1.current.style.background = 'white';
                }
                if (bolinhaRef2.current) {
                    bolinhaRef2.current.style.background = 'black';
                }
            }, 800);
        } else {
            setMetodoClass2(`${styles.metodo} ${styles.metodo_02} ${styles.sai_carrossel}`);
            setTimeout(() => {
                setMetodoClass1(`${styles.metodo} ${styles.metodo_01} ${styles.entra_carrossel}`);
    
                if (bolinhaRef2.current) {
                    bolinhaRef2.current.style.background = 'white';
                }
                if (bolinhaRef1.current) {
                    bolinhaRef1.current.style.background = 'black';
                }
            }, 800);
        }
    
        setMostrandoPrimeiro(!mostrandoPrimeiro);
    }

    // Configurando o `setInterval` para executar o carrossel automaticamente
    useEffect(() => {
        if (animacaoAtiva) {
            const interval = setInterval(() => {
                carrossel();
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [mostrandoPrimeiro, animacaoAtiva]); // Dependência para garantir que o carrossel alterne

    const animacaoOnOff = () => {
        setAnimacaoAtiva(!animacaoAtiva)
    }

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

        if (caminhaoRef.current) observer.observe(caminhaoRef.current);


        return () => {
            if (caminhaoRef.current) observer.unobserve(caminhaoRef.current);
        };
    }, []);


    return (
        <div className={styles.container_metodos_all}>
            <div className={styles.container_metodos}>
                <h1 className={styles.titulo_metodos}>Métodos</h1>

                <p className={styles.texto_metodos}>
                    Contamos com diversas maneiras para monitorar a jornada de trabalho dos
                    motoristas, ferramentas indispensáveis para registrar tanto o tempo de trabalho quanto os
                    períodos de descanso no setor de transporte rodoviário de cargas e passageiros. Esses recursos
                    são cruciais para garantir a segurança nas estradas e o cumprimento das normas vigentes. Dentre
                    os métodos que utilizamos, destacam-se:
                </p>

                <div className={styles.carrossel_metodos} onClick={animacaoOnOff}>
                    <p className={metodoClass1}>
                        Sistema de Rastreamento via GPS: Esse sistema permite
                        o monitoramento contínuo da localização e das atividades dos motoristas. Extraímos os dados
                        do rastreador do veículo, integrando-os ao nosso sistema, o que possibilita o cálculo
                        automático do tempo de condução e das pausas, com base no movimento e posição do veículo.
                        Além disso, é possível captar outras informações do rastreador para auxiliar na
                        identificação automática e na gestão do controle de jornada.
                    </p>
                    <p className={metodoClass2}>
                        Aplicativo de Controle de Jornada: Desenvolvemos um aplicativo móvel
                        que permite aos motoristas registrar suas horas de trabalho, pausas e períodos de descanso
                        diretamente por meio de smartphones ou tablets. O aplicativo utiliza a localização GPS para
                        identificar o local exato onde o registro está sendo feito.
                    </p>
                </div>
                <div className={styles.container_bolinhas}>
                    <div ref={bolinhaRef1} className={`${styles.bolinhas} ${styles.bolinha_01}`}></div>
                    <div ref={bolinhaRef2} className={`${styles.bolinhas} ${styles.bolinha_02}`}></div>
                </div>
                <p className={styles.continuacao_metodos}>
                    Vale ressaltar que a leitura dos dados é feita de maneira automática
                    e em tempo real, mas o gerenciamento do controle de jornada é monitorado diariamente por nossa
                    equipe de operadores, que analisam de forma ampla os interstícios e eventuais ocorrências.
                    A implementação desses sistemas tem como objetivo garantir o cumprimento das legislações e
                    normas de segurança, evitando a exaustão dos motoristas e, consequentemente, aumentando a
                    segurança nas rodovias.
                </p>
            </div>
            <div ref={caminhaoRef} className={styles.container_img_metodos}>
                <img className={styles.img_metodos} src={caminhao} alt="caminhao" />
            </div>
        </div>
    )

}

export default Metodos