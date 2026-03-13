import React, { useEffect, useRef } from "react";

import styles from "./IA.module.css";
import code from "../../image/CODE.png";

function IA() {
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
    <section className={styles.secao} id="ia" ref={sectionRef}>
      <div className={`containerPadrao ${styles.container}`}>
        <div
          className={`${styles.colunaConteudo} ${styles.fadeLeft}`}
          data-animate
        >
          <span className={styles.badge}>Assistente com IA</span>

          <h2 className={styles.titulo}>
            Um canal inteligente para tirar dúvidas com mais rapidez
          </h2>

          <p className={styles.descricao}>
            A Likizoa também conta com um assistente inteligente para apoiar
            clientes e visitantes com explicações rápidas sobre o serviço,
            funcionamento da operação e pontos importantes relacionados ao
            controle de jornada.
          </p>

          <p className={styles.descricaoSecundaria}>
            Se você quiser entender melhor algum processo ou receber uma
            explicação mais objetiva, pode acessar o assistente diretamente pelo
            link ou usar o QR Code ao lado.
          </p>

          <div className={styles.gridRecursos}>
            <article
              className={`${styles.cardRecurso} ${styles.fadeUp}`}
              data-animate
            >
              <strong>Respostas rápidas</strong>
              <span>Apoio imediato para dúvidas frequentes</span>
            </article>

            <article
              className={`${styles.cardRecurso} ${styles.fadeUp}`}
              data-animate
            >
              <strong>Mais clareza</strong>
              <span>Explicações objetivas sobre pontos importantes</span>
            </article>

            <article
              className={`${styles.cardRecurso} ${styles.fadeUp}`}
              data-animate
            >
              <strong>Acesso facilitado</strong>
              <span>Link direto e leitura rápida por QR Code</span>
            </article>
          </div>

          <div className={`${styles.acoes} ${styles.fadeUp}`} data-animate>
            <a
              className={styles.botaoPrincipal}
              href="https://chatgpt.com/g/g-adStloXb7-assitente-likizoa"
              target="_blank"
              rel="noreferrer"
            >
              Acessar assistente inteligente
            </a>
          </div>
        </div>

        <div
          className={`${styles.colunaQr} ${styles.fadeRight}`}
          data-animate
        >
          <div className={styles.cardQr}>
            <div className={styles.topoQr}>
              <span className={styles.tagQr}>Likizoa IA</span>
              <span className={styles.statusQr}>Disponível online</span>
            </div>

            <div className={styles.areaQr}>
              <img
                className={styles.imagemQr}
                src={code}
                alt="QR Code para acessar o assistente inteligente da Likizoa"
              />
            </div>

            <div className={styles.rodapeQr}>
              <strong>Escaneie o QR Code</strong>
              <p>
                Acesse o assistente pelo celular e receba apoio de forma simples
                e rápida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IA;