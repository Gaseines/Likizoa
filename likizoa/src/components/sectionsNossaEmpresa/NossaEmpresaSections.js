import React from 'react';


import styles from './NossaEmpresaSections.module.css'

function NossaEmpresaSections() {
    return (
        <main className={styles.main}>
                <section className={styles.sobre}>
                    <h1 className={styles.fade_in}>Sobre a Empresa</h1>
                    <p className={`${styles.slide_up} ${styles.destaque}`}>
                        Desde o início de nossas atividades em <strong>04/10/2016</strong>, nossa empresa tem se especializado em <strong>gestão do controle de jornada dos motoristas</strong>, além de oferecer serviços e treinamentos na área de gestão de RH.
                    </p>
                    <div className={`${styles.divider} ${styles.slide_up}`}></div>
                    <p className={styles.slide_up}>
                        Com anos de experiência, desenvolvemos um <span className={styles.highlight}>sistema próprio</span> voltado para o <strong>controle eficiente de jornadas</strong>, o qual foi continuamente aprimorado ao longo do tempo para atender com precisão as necessidades do setor e as mudanças na legislação.
                    </p>
                    <div className={`${styles.divider} ${styles.slide_up}`}></div>
                    <p className={styles.slide_up}>
                        Hoje, orgulhamo-nos de contar com clientes em todas as regiões do Brasil, reforçando nossa <span className={styles.highlight}>presença e credibilidade</span>. Nossa equipe é composta por <strong>sócios dedicados</strong> e colaboradores altamente experientes, que oferecem <strong>análises detalhadas</strong> e <strong>soluções personalizadas</strong> para otimizar a operação e o resultado desejado para sua empresa.
                    </p>
                    <div className={`${styles.divider} ${styles.slide_up}`}></div>
                    <p className={styles.slide_up}>
                        Com nosso <span className={styles.highlight}>sistema robusto</span> e processos eficazes, garantimos não só a conformidade com as regulamentações legais, mas também uma <strong>gestão otimizada</strong> e <strong>segura</strong> das jornadas dos motoristas, resultando em mais eficiência e produtividade para o seu negócio.
                    </p>
                </section>

                {/* Seção de Benefícios da Empresa */}
                <section className={styles.beneficios}>
                    <h2 className={styles.fade_in}>Por que escolher nossos serviços?</h2>
                    <div className={`${styles.benefits_container} ${styles.slide_up}`}>
                        <div className={styles.benefit}>
                            <i className="fas fa-tachometer-alt"></i> {/* Ícone de eficiência (velocímetro) */}
                            <h3>Eficiência comprovada</h3>
                            <p>
                                Nosso sistema garante o controle preciso e eficaz da jornada dos motoristas, aumentando a produtividade da sua empresa.
                            </p>
                        </div>
                        <div className={styles.benefit}>
                            <i className="fas fa-file-alt"></i> {/* Ícone de conformidade (documento) */}
                            <h3>Conformidade Legal</h3>
                            <p>
                                Estamos sempre atualizados com a legislação vigente, garantindo que sua empresa opere dentro das normas.
                            </p>
                        </div>
                        <div className={styles.benefit}>
                            <i className="fas fa-headset"></i> {/* Ícone de atendimento (headset) */}
                            <h3>Atendimento especializado</h3>
                            <p>
                                Nossa equipe está sempre pronta para oferecer suporte personalizado, com soluções sob medida para o seu negócio.
                            </p>
                        </div>
                    </div>
                </section>

                <div className={styles.cta_container}>
                    <a href="https://wa.me/5549999828876?text=Ol%C3%A1%21%20Estava%20visitando%20o%20site%20da%20empresa%20Likizoa%20e%20fiquei%20interessado%28a%29%20no%20trabalho%20de%20voc%C3%AAs%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es."
                        target="_blank"
                        className={styles.btn_cta}>
                        Entre em contato
                    </a>
                </div>
            </main>
            


    )
}

export default NossaEmpresaSections