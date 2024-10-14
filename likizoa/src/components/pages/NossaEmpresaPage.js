import React from "react"

import styles from './NossaEmpresaPage.module.css'

import MenuPages from "../MenuPages"
import NossaEmpresaSections from "../sectionsNossaEmpresa/NossaEmpresaSections"
import ScrollToTop from "../ScrollToTop"


function NossaEmpresaPage() {

    return (

        <div className={styles.body}>
            <ScrollToTop />
            <MenuPages />
            <NossaEmpresaSections />

        </div>

    )
}

export default NossaEmpresaPage