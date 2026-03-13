import React, { useEffect, useRef } from "react";

import styles from "./Metodos.module.css";
import caminhao from "../../image/caminhao_sol.jpg";

function Metodos() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elementos = sectionRef.current?.querySelectorAll("[data-animate]");

    if (!elementos || elementos.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    elementos.forEach((elemento) => observer.observe(elemento));

    return () => observer.disconnect();
  }, [styles.visible]);

  return (
    <section className={styles.secao} id="metodos" ref={sectionRef}>
      <div className={`containerPadrao ${styles.container}`}>
        <div
          className={`${styles.colunaConteudo} ${styles.fadeLeft}`}
          data-animate
        >
          <span className={styles.badge}>Métodos de acompanhamento</span>

          <h2 className={styles.titulo}>
            Recursos que tornam o controle de jornada mais preciso e mais
            confiável
          </h2>

          <p className={styles.descricao}>
            Trabalhamos com soluções que ajudam a registrar, acompanhar e
            interpretar a jornada dos motoristas com mais clareza, mais
            agilidade e mais segurança para a operação.
          </p>

          <div className={styles.gridMetodos}>
            <article
              className={`${styles.cardMetodo} ${styles.fadeUp}`}
              data-animate
            >
              <span className={styles.cardNumero}>01</span>
              <h3 className={styles.cardTitulo}>
                Sistema de rastreamento via GPS
              </h3>
              <p className={styles.cardTexto}>
                Os dados do rastreador do veículo são integrados ao sistema para
                apoiar o cálculo automático do tempo de jornada, pausas,
                deslocamentos e outras informações relevantes para o controle da
                jornada.
              </p>
            </article>

            <article
              className={`${styles.cardMetodo} ${styles.fadeUp}`}
              data-animate
            >
              <span className={styles.cardNumero}>02</span>
              <h3 className={styles.cardTitulo}>
                Aplicativo de controle de jornada
              </h3>
              <p className={styles.cardTexto}>
                O aplicativo permite registrar horas de trabalho, intervalos e
                descansos diretamente por smartphones ou tablets, com apoio da
                localização para identificar o ponto do registro.
              </p>
            </article>
          </div>

          <div
            className={`${styles.blocoAcompanhamento} ${styles.fadeUp}`}
            data-animate
          >
            <strong>Acompanhamento diário da operação</strong>
            <p>
              A leitura dos dados acontece de forma automática e em tempo real,
              mas o gerenciamento do controle de jornada também é monitorado por
              nossa equipe, que acompanha interstícios, ocorrências e pontos que
              exigem atenção no dia a dia.
            </p>
          </div>
        </div>

        <div
          className={`${styles.colunaImagem} ${styles.fadeRight}`}
          data-animate
        >
          <div className={styles.cardImagem}>
            <img
              className={styles.imagem}
              src={caminhao}
              alt="Caminhão em operação ao pôr do sol"
            />

            <div className={styles.overlayImagem}>
              <span className={styles.overlayTag}>Monitoramento</span>
              <p className={styles.overlayTexto}>
                Tecnologia, leitura em tempo real e acompanhamento humano para
                uma rotina mais segura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Metodos;