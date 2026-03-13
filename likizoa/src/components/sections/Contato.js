import React, { useEffect, useRef } from "react";
import styles from "./Contato.module.css";

function Contato() {
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
      { threshold: 0.16 }
    );

    elementos.forEach((elemento) => observer.observe(elemento));

    return () => observer.disconnect();
  }, [styles.visible]);

  return (
    <section className={styles.secao} id="contatos" ref={sectionRef}>
      <div className={`containerPadrao ${styles.container}`}>
        <div className={`${styles.topo} ${styles.fadeUp}`} data-animate>
          <span className={styles.badge}>Contato</span>

          <h2 className={styles.titulo}>
            Fale com a Likizoa e entenda a melhor solução para sua operação
          </h2>

          <p className={styles.descricao}>
            Se você quer conhecer melhor nossos serviços, entender como funciona
            o controle de jornada ou falar com nossa equipe, escolha abaixo o
            canal mais adequado para o seu atendimento.
          </p>
        </div>

        <div className={styles.gridContato}>
          <article
            className={`${styles.cardContato} ${styles.fadeUp}`}
            data-animate
          >
            <div className={styles.cardTop}>
              <span className={styles.cardTag}>Comercial</span>
              <span className={styles.cardStatus}>Atendimento</span>
            </div>

            <h3 className={styles.cardTitulo}>Everson Nunes</h3>

            <p className={styles.cardInfo}>(49) 9 9982-8876</p>

            <p className={styles.cardTexto}>
              Canal ideal para conhecer a Likizoa, entender os serviços e
              solicitar informações comerciais.
            </p>

            <a
              className={styles.botaoContato}
              href="https://wa.me/5549999828876?text=Ol%C3%A1%21%20Estava%20visitando%20o%20site%20da%20empresa%20Likizoa%20e%20fiquei%20interessado%28a%29%20no%20trabalho%20de%20voc%C3%AAs%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noreferrer"
            >
              Solicitar atendimento comercial
            </a>
          </article>

          <article
            className={`${styles.cardContato} ${styles.fadeUp}`}
            data-animate
          >
            <div className={styles.cardTop}>
              <span className={styles.cardTag}>Operacional</span>
              <span className={styles.cardStatus}>Suporte</span>
            </div>

            <h3 className={styles.cardTitulo}>Jaeder Covas</h3>

            <p className={styles.cardInfo}>(47) 9 9694-0605</p>

            <p className={styles.cardTexto}>
              Canal indicado para assuntos operacionais, acompanhamento de
              rotina e apoio relacionado ao dia a dia da operação.
            </p>

            <a
              className={styles.botaoContato}
              href="https://wa.me/5547996940605?text=Ol%C3%A1%21%20Estava%20visitando%20o%20site%20da%20empresa%20Likizoa%20e%20fiquei%20interessado%28a%29%20no%20trabalho%20de%20voc%C3%AAs%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noreferrer"
            >
              Falar com o operacional
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contato;