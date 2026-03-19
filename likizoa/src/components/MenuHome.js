import React, { useEffect, useState } from "react";
import styles from "./MenuHome.module.css";
import logo from "../image/logo.png";

const MENU_ITEMS = [
  { label: "Início", href: "#capa" },
  { label: "Soluções", href: "#controle_jornada" },
  { label: "Nossa Empresa", href: "#nossa_empresa" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Contato", href: "#contatos" },
];

function MenuHome() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [headerAtivo, setHeaderAtivo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderAtivo(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuAberto(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuAberto]);

  const fecharMenu = () => setMenuAberto(false);
  const alternarMenu = () => setMenuAberto((estadoAtual) => !estadoAtual);

  return (
    <header
      className={`${styles.nav_menu} ${headerAtivo ? styles.scrolled : ""}`}
    >
      <div className={styles.header}>
        <a href="#capa" className={styles.brand} aria-label="Ir Para O Início">
          <img className={styles.img_logo} src={logo} alt="Likizoa" />
        </a>

        <nav className={styles.desktop_nav} aria-label="Navegação Principal">
          <ul className={styles.lista_menu}>
            {MENU_ITEMS.map((item) => (
              <li key={item.label} className={styles.itens_menu}>
                <a className={styles.navLink} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.desktop_actions}>
          <a
            className={styles.secondaryButton}
            href="https://wa.me/5549999828876?text=Ol%C3%A1%21%20Estava%20Visitando%20O%20Site%20Da%20Likizoa%20E%20Gostaria%20De%20Mais%20Informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noreferrer"
          >
            Solicitar Atendimento
          </a>

          <a
            className={styles.primaryButton}
            href="https://gaseines.github.io/sistema-likizoa/#/login"
            target="_blank"
            rel="noreferrer"
          >
            Acessar Sistema
          </a>
        </div>

        <button
          type="button"
          className={`${styles.mobile_toggle} ${
            menuAberto ? styles.mobile_toggle_open : ""
          }`}
          onClick={alternarMenu}
          aria-label={menuAberto ? "Fechar Menu" : "Abrir Menu"}
          aria-expanded={menuAberto}
        >
          <span className={styles.mobile_toggle_bar}></span>
          <span className={styles.mobile_toggle_bar}></span>
          <span className={styles.mobile_toggle_bar}></span>
        </button>
      </div>

      <div
        className={`${styles.mobile_panel} ${
          menuAberto ? styles.mobile_panel_open : ""
        }`}
      >
        <nav aria-label="Menu Mobile">
          <ul className={styles.mobile_menu}>
            {MENU_ITEMS.map((item) => (
              <li key={item.label} className={styles.mobile_item}>
                <a
                  className={styles.mobileLink}
                  href={item.href}
                  onClick={fecharMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.mobile_actions}>
            <a
              className={styles.mobile_secondaryButton}
              href="https://wa.me/5549999828876?text=Ol%C3%A1%21%20Estava%20Visitando%20O%20Site%20Da%20Likizoa%20E%20Gostaria%20De%20Mais%20Informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noreferrer"
              onClick={fecharMenu}
            >
              Falar No WhatsApp
            </a>

            <a
              className={styles.mobile_primaryButton}
              href="http://sistema.likizoa.com.br/"
              
              onClick={fecharMenu}
            >
              Acessar Sistema
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default MenuHome;