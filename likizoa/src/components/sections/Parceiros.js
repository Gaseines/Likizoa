import React, { useEffect, useRef } from "react";

import styles from "./Parceiros.module.css";
import ClientesImages from "../../image/ClientesImages.js";

const PARCEIROS = [
  { tipo: "imagem", src: ClientesImages.BC, alt: "BC" },
  { tipo: "imagem", src: ClientesImages.Saff, alt: "Saff" },
  { tipo: "imagem", src: ClientesImages.Tac, alt: "Tac" },
  { tipo: "imagem", src: ClientesImages.Beviani, alt: "Beviani" },
  { tipo: "imagem", src: ClientesImages.Sanmartino, alt: "Sanmartino" },
  { tipo: "imagem", src: ClientesImages.gh, alt: "GH" },
  { tipo: "imagem", src: ClientesImages.Betel, alt: "Betel" },
  { tipo: "imagem", src: ClientesImages.Simas, alt: "Simas" },

  { tipo: "imagem", src: ClientesImages.MWM, alt: "MWM" },
  { tipo: "imagem", src: ClientesImages.Baroncello, alt: "Baroncello" },
  { tipo: "imagem", src: ClientesImages.smLog, alt: "SM Log" },
  { tipo: "imagem", src: ClientesImages.EIL, alt: "EIL" },
  { tipo: "imagem", src: ClientesImages.PTC, alt: "PTC" },
  { tipo: "imagem", src: ClientesImages.GTL, alt: "GTL" },
  { tipo: "imagem", src: ClientesImages.RTM, alt: "RTM" },
  { tipo: "imagem", src: ClientesImages.Comavix, alt: "Comavix" },

  { tipo: "imagem", src: ClientesImages.Portolog, alt: "Portolog" },
  { tipo: "imagem", src: ClientesImages.Vibelog, alt: "Vibelog" },
  { tipo: "imagem", src: ClientesImages.Dumaszak, alt: "Dumaszak" },
  { tipo: "imagem", src: ClientesImages.Barcellos, alt: "Barcellos" },
  { tipo: "imagem", src: ClientesImages.MGE, alt: "MGE" },
  { tipo: "imagem", src: ClientesImages.Spiazzi, alt: "Spiazzi" },
  { tipo: "imagem", src: ClientesImages.ComexCargo, alt: "Comex Cargo" },
  { tipo: "imagem", src: ClientesImages.Kobrasol, alt: "Kobrasol" },

  { tipo: "imagem", src: ClientesImages.Jomar, alt: "Jomar" },
  { tipo: "imagem", src: ClientesImages.SemFronteiras, alt: "Sem Fronteiras" },
  { tipo: "imagem", src: ClientesImages.Transcosta, alt: "Transcosta" },
  { tipo: "imagem", src: ClientesImages.lfCargo, alt: "LF Cargo" },
  { tipo: "imagem", src: ClientesImages.Froes, alt: "Froes" },
  { tipo: "imagem", src: ClientesImages.Elo, alt: "Elo" },
  { tipo: "imagem", src: ClientesImages.Sudden, alt: "Sudden" },

  { tipo: "texto", texto: "Evandro Transportes" },
  { tipo: "texto", texto: "Renato Werner Transportes LTDA" },
  { tipo: "texto", texto: "Transportes Paganini" },
];

function Parceiros() {
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
      { threshold: 0.14 }
    );

    elementos.forEach((elemento) => observer.observe(elemento));

    return () => observer.disconnect();
  }, [styles.visible]);

  return (
    <section className={styles.secao} id="parceiros" ref={sectionRef}>
      <div className={`containerPadrao ${styles.container}`}>
        <div className={`${styles.topo} ${styles.fadeUp}`} data-animate>
          <span className={styles.badge}>Parceiros</span>

          <h2 className={styles.titulo}>Empresas que confiam na Likizoa</h2>

          <p className={styles.descricao}>
            Relacionamentos construídos com consistência, proximidade e
            confiança operacional. Abaixo, os parceiros são apresentados na
            mesma ordem da estrutura original do projeto.
          </p>
        </div>

        <ul className={styles.gradeLogos}>
          {PARCEIROS.map((parceiro, index) => (
            <li
              key={`${parceiro.tipo}-${parceiro.alt || parceiro.texto}-${index}`}
              className={`${styles.itemLogo} ${styles.fadeUp}`}
              data-animate
              style={{ "--delay": `${Math.min(index * 0.03, 0.42)}s` }}
            >
              {parceiro.tipo === "imagem" ? (
                <img
                  className={styles.logoImagem}
                  src={parceiro.src}
                  alt={parceiro.alt}
                  draggable="false"
                />
              ) : (
                <span className={styles.logoTexto}>{parceiro.texto}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Parceiros;