import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © Likizoa. Todos Os Direitos Reservados. Desenvolvido Por{" "}
        <a
          className={styles.footer_link}
          target="_blank"
          rel="noreferrer"
          href="https://gaseines.github.io/Portifolio/"
        >
          Gabriel Nunes
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;