import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import styles from "./NossaEmpresa.module.css";
import notbook from "../../image/notbook.jpg";

function NossaEmpresa() {
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
    <section className={styles.secao} id="nossa_empresa" ref={sectionRef}>
      <div className={`containerPadrao ${styles.container}`}>
        <div
          className={`${styles.colunaImagem} ${styles.fadeLeft}`}
          data-animate
        >
          <div className={styles.cardImagem}>
            <img
              className={styles.imagem}
              src={notbook}
              alt="Profissional utilizando notebook em ambiente corporativo"
            />

            <div className={styles.imagemOverlay}>
              <span className={styles.imagemTag}>Likizoa</span>
              <p className={styles.imagemTexto}>
                Organização, tecnologia e apoio para uma rotina mais segura.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${styles.colunaConteudo} ${styles.fadeRight}`}
          data-animate
        >
          <span className={styles.badge}>Nossa empresa</span>

          <h2 className={styles.titulo}>
            Tecnologia e acompanhamento para uma operação mais organizada
          </h2>

          <p className={styles.descricao}>
            A Likizoa atua com foco em controle de jornada e apoio operacional,
            oferecendo uma estrutura que contribui para mais clareza nas
            informações, mais segurança nos processos e mais eficiência no dia a
            dia das empresas.
          </p>

          <p className={styles.descricaoSecundaria}>
            Com uma abordagem prática e orientada à rotina real da operação,
            ajudamos a reduzir falhas, organizar registros e melhorar o
            acompanhamento das atividades com mais confiabilidade.
          </p>

          <div className={styles.listaDestaques}>
            <article
              className={`${styles.destaqueItem} ${styles.fadeUp}`}
              data-animate
            >
              <strong>Atuação especializada</strong>
              <span>Foco em controle de jornada e apoio operacional</span>
            </article>

            <article
              className={`${styles.destaqueItem} ${styles.fadeUp}`}
              data-animate
            >
              <strong>Processos mais claros</strong>
              <span>Mais organização no acompanhamento das informações</span>
            </article>

            <article
              className={`${styles.destaqueItem} ${styles.fadeUp}`}
              data-animate
            >
              <strong>Mais confiança</strong>
              <span>Rotinas mais seguras e melhor estruturadas</span>
            </article>
          </div>

          <div className={`${styles.acoes} ${styles.fadeUp}`} data-animate>
            <Link className={styles.botaoPrincipal} to="/nossaEmpresa">
              Conhecer a Likizoa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NossaEmpresa;