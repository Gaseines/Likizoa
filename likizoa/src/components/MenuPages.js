import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./MenuPages.module.css";
import logo from "../image/logo.png";

function MenuPages() {
  const [headerAtivo, setHeaderAtivo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderAtivo(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${headerAtivo ? styles.scrolled : ""}`}>
      <div className={styles.nav}>
        <Link to="/" className={styles.logo} aria-label="Voltar para a home">
          <img src={logo} alt="Likizoa" />
        </Link>

        <div className={styles.actions}>
          <Link to="/" className={styles.voltar}>
            <span className={styles.icone}>←</span>
            Voltar para a home
          </Link>

          <a
            className={styles.botaoSistema}
            href="https://gaseines.github.io/sistema-likizoa/#/login"
            target="_blank"
            rel="noreferrer"
          >
            Acessar sistema
          </a>
        </div>
      </div>
    </header>
  );
}

export default MenuPages;