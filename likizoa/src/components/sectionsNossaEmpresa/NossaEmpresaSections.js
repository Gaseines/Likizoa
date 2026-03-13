import React, { useEffect, useRef } from "react";
import styles from "./NossaEmpresaSections.module.css";

function NossaEmpresaSections() {
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
    <div className={styles.wrapper} ref={sectionRef}>
      <section className={styles.secaoSobre}>
        <div className={`containerPadrao ${styles.container}`}>
          <div className={`${styles.topo} ${styles.fadeUp}`} data-animate>
            <span className={styles.badge}>Likizoa</span>

            <h2 className={styles.titulo}>
              Experiência, estrutura e evolução contínua no controle de jornada
            </h2>

            <p className={styles.descricao}>
              Desde o início das atividades, em <strong>04/10/2016</strong>, a
              Likizoa vem se especializando na gestão do controle de jornada dos
              motoristas, além de oferecer serviços e treinamentos ligados à
              gestão de RH.
            </p>
          </div>

          <div className={styles.gridConteudo}>
            <article
              className={`${styles.cardTexto} ${styles.fadeLeft}`}
              data-animate
            >
              <h3 className={styles.cardTitulo}>Evolução do sistema</h3>

              <p>
                Ao longo dos anos, desenvolvemos um{" "}
                <strong>sistema próprio</strong> voltado ao controle eficiente
                das jornadas, aprimorado continuamente para acompanhar as
                necessidades reais do setor e as mudanças da legislação.
              </p>

              <p>
                Essa evolução permitiu criar uma estrutura mais precisa, mais
                segura e mais preparada para apoiar a rotina operacional dos
                clientes.
              </p>
            </article>

            <article
              className={`${styles.cardTexto} ${styles.fadeRight}`}
              data-animate
            >
              <h3 className={styles.cardTitulo}>Presença e credibilidade</h3>

              <p>
                Hoje, temos clientes em diferentes regiões do Brasil, reforçando
                nossa presença no mercado e a confiança construída ao longo da
                nossa trajetória.
              </p>

              <p>
                Nossa equipe reúne sócios dedicados e profissionais experientes,
                capazes de oferecer análises detalhadas e soluções mais
                adequadas para cada operação.
              </p>
            </article>
          </div>

          <div className={styles.metricas}>
            <article
              className={`${styles.metricaItem} ${styles.fadeUp}`}
              data-animate
            >
              <strong>Desde 2016</strong>
              <span>Atuação focada em controle de jornada e apoio à operação</span>
            </article>

            <article
              className={`${styles.metricaItem} ${styles.fadeUp}`}
              data-animate
            >
              <strong>Sistema próprio</strong>
              <span>Estrutura desenvolvida e refinada com foco no setor</span>
            </article>

            <article
              className={`${styles.metricaItem} ${styles.fadeUp}`}
              data-animate
            >
              <strong>Atendimento nacional</strong>
              <span>Clientes atendidos em diferentes regiões do Brasil</span>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.secaoBeneficios}>
        <div className={`containerPadrao ${styles.container}`}>
          <div className={`${styles.topo} ${styles.fadeUp}`} data-animate>
            <span className={styles.badge}>Diferenciais</span>

            <h2 className={styles.titulo}>
              Por que escolher os serviços da Likizoa
            </h2>

            <p className={styles.descricao}>
              Nossa atuação combina tecnologia, acompanhamento humano e foco em
              conformidade para entregar mais clareza e mais segurança para a
              empresa.
            </p>
          </div>

          <div className={styles.gridBeneficios}>
            <article
              className={`${styles.cardBeneficio} ${styles.fadeUp}`}
              data-animate
            >
              <span className={styles.icone}>01</span>
              <h3>Eficiência comprovada</h3>
              <p>
                Nosso sistema apoia o controle preciso da jornada dos motoristas
                e contribui para uma operação mais organizada e produtiva.
              </p>
            </article>

            <article
              className={`${styles.cardBeneficio} ${styles.fadeUp}`}
              data-animate
            >
              <span className={styles.icone}>02</span>
              <h3>Conformidade legal</h3>
              <p>
                Acompanhamos as exigências legais para oferecer mais segurança e
                mais suporte no cumprimento das normas aplicáveis ao setor.
              </p>
            </article>

            <article
              className={`${styles.cardBeneficio} ${styles.fadeUp}`}
              data-animate
            >
              <span className={styles.icone}>03</span>
              <h3>Atendimento especializado</h3>
              <p>
                Nossa equipe está preparada para oferecer suporte próximo, com
                análises mais detalhadas e soluções ajustadas à realidade da
                operação.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.secaoCta}>
        <div className={`containerPadrao ${styles.container}`}>
          <div className={`${styles.cardCta} ${styles.fadeUp}`} data-animate>
            <div className={styles.ctaTexto}>
              <span className={styles.badgeCta}>Likizoa</span>

              <h2 className={styles.ctaTitulo}>
                Vamos conversar sobre a sua operação?
              </h2>

              <p className={styles.ctaDescricao}>
                Se você quer entender melhor como a Likizoa pode apoiar sua
                empresa, fale com nossa equipe e conheça a solução mais adequada
                para o seu cenário.
              </p>
            </div>

            <a
              href="https://wa.me/5549999828876?text=Ol%C3%A1%21%20Estava%20visitando%20o%20site%20da%20empresa%20Likizoa%20e%20fiquei%20interessado%28a%29%20no%20trabalho%20de%20voc%C3%AAs%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noreferrer"
              className={styles.botaoCta}
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NossaEmpresaSections;