import React, { useEffect, useRef } from "react";
import styles from "./ControleJornada.module.css";

function ControleJornada() {
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
    <section className={styles.secao} id="controle_jornada" ref={sectionRef}>
      <div className={`containerPadrao ${styles.container}`}>
        <div
          className={`${styles.colunaTexto} ${styles.fadeLeft}`}
          data-animate
        >
          <span className={styles.badge}>Controle de jornada</span>

          <h2 className={styles.titulo}>
            Mais segurança operacional e mais clareza no acompanhamento da
            jornada
          </h2>

          <p className={styles.descricao}>
            O controle correto da jornada é essencial para empresas que precisam
            de mais organização, segurança nas informações e conformidade com a
            legislação. Quando o processo é bem estruturado, a operação ganha
            mais controle e mais confiabilidade no dia a dia.
          </p>

          <p className={styles.descricaoSecundaria}>
            De acordo com a{" "}
            <a
              className={styles.linkLei}
              href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13103.htm"
              target="_blank"
              rel="noreferrer"
            >
              Lei 13.103
            </a>
            , o registro da jornada dos motoristas deve ser feito de forma
            contínua, considerando início e fim da jornada, pausas e períodos
            de descanso.
          </p>

          <ul className={styles.listaBeneficios}>
            <li
              className={`${styles.beneficioItem} ${styles.fadeUp}`}
              data-animate
            >
              Mais controle sobre a rotina operacional
            </li>
            <li
              className={`${styles.beneficioItem} ${styles.fadeUp}`}
              data-animate
            >
              Mais segurança no acompanhamento das informações
            </li>
            <li
              className={`${styles.beneficioItem} ${styles.fadeUp}`}
              data-animate
            >
              Mais apoio para atuação com conformidade
            </li>
          </ul>
        </div>

        <div className={styles.colunaCards}>
          <div
            className={`${styles.cardPrincipal} ${styles.fadeRight}`}
            data-animate
          >
            <div className={styles.cardTop}>
              <span className={styles.cardEtiqueta}>Base legal</span>
              <span className={styles.cardMiniTexto}>Lei 13.103</span>
            </div>

            <h3 className={styles.cardTitulo}>
              Registro diário e acompanhamento em tempo real
            </h3>

            <p className={styles.cardTexto}>
              O controle da jornada precisa considerar os horários de trabalho,
              direção, intervalos e descanso, mantendo o processo mais seguro e
              mais bem organizado.
            </p>
          </div>

          <div className={styles.gridCards}>
            <article
              className={`${styles.cardInfo} ${styles.fadeUp}`}
              data-animate
            >
              <strong>Organização</strong>
              <span>Processos mais claros e melhor estruturados</span>
            </article>

            <article
              className={`${styles.cardInfo} ${styles.fadeUp}`}
              data-animate
            >
              <strong>Conformidade</strong>
              <span>Mais apoio no cumprimento das exigências legais</span>
            </article>

            <article
              className={`${styles.cardInfo} ${styles.fadeUp}`}
              data-animate
            >
              <strong>Segurança</strong>
              <span>Mais confiabilidade no controle das rotinas</span>
            </article>

            <article
              className={`${styles.cardInfo} ${styles.fadeUp}`}
              data-animate
            >
              <strong>Eficiência</strong>
              <span>Mais clareza para acompanhar a operação</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ControleJornada;