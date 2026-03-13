import React from "react";

import styles from "./NossaEmpresaPage.module.css";

import MenuPages from "../MenuPages";
import NossaEmpresaSections from "../sectionsNossaEmpresa/NossaEmpresaSections";
import ScrollToTop from "../ScrollToTop";

function NossaEmpresaPage() {
  return (
    <div className={styles.pageShell}>
      <ScrollToTop />
      <MenuPages />

      <main className={styles.mainContent}>
        <section className={styles.heroInterna}>
          <div className={`containerPadrao ${styles.heroContainer}`}>
            

            <div className={styles.contentWrapper}>
          <NossaEmpresaSections />
        </div>
          </div>
        </section>

        
      </main>
    </div>
  );
}

export default NossaEmpresaPage;