import React from "react";
import styles from "./Capa.module.css";

function Capa() {
  return (
    <section className={styles.capa} id="capa">
      <div className={styles.overlay}></div>

      <div className={`containerPadrao ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Soluções inteligentes em controle de jornada
          </span>

          <div className={styles.textos}>
            <p className={styles.kicker}>Likizoa Serviços e Treinamentos</p>

            <h1 className={styles.titulo}>
              Controle de jornada com clareza e segurança
            </h1>

            <p className={styles.descricao}>
              Organizamos processos, apoiamos a operação e entregamos mais
              controle para empresas que precisam de segurança nas informações,
              eficiência na rotina e conformidade no acompanhamento da jornada.
            </p>
          </div>

          <div className={styles.acoes}>
            <a
              className={styles.botaoPrimario}
              href="https://wa.me/5549999828876?text=Ol%C3%A1%21%20Estava%20Visitando%20O%20Site%20Da%20Likizoa%20E%20Gostaria%20De%20Mais%20Informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noreferrer"
            >
              Solicitar atendimento
            </a>

            <a className={styles.botaoSecundario} href="#controle_jornada">
              Conhecer soluções
            </a>
          </div>

          <ul className={styles.listaDestaques}>
            <li>Atendimento especializado</li>
            <li>Mais organização operacional</li>
            <li>Confiabilidade nos processos</li>
          </ul>
        </div>

        <div className={styles.heroCard}>
          <div className={styles.cardTopo}>
            <span className={styles.cardTag}>Likizoa</span>
            <span className={styles.cardStatus}>Atendimento profissional</span>
          </div>

          <div className={styles.cardConteudo}>
            <h2 className={styles.cardTitulo}>
              Gerenciando horas, entregando confiança
            </h2>

            <p className={styles.cardTexto}>
              Uma estrutura pensada para empresas que precisam de mais controle,
              organização e segurança na gestão da jornada.
            </p>

            <div className={styles.metricas}>
              <div className={styles.metricaItem}>
                <strong>Controle</strong>
                <span>Processos mais organizados</span>
              </div>

              <div className={styles.metricaItem}>
                <strong>Segurança</strong>
                <span>Mais clareza nas informações</span>
              </div>

              <div className={styles.metricaItem}>
                <strong>Confiança</strong>
                <span>Atuação com foco em qualidade</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Capa;