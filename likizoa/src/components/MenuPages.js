import React from 'react';
import { Link } from 'react-router-dom'

import styles from './MenuPages.module.css'
import logo from '../image/logo.png'



function MenuPages(){

    return(
        <header id='top' className={styles.header}>
        <nav className={styles.nav}>
            
            <Link to={'/'} className={styles.logo}> <img src={logo} alt="Likizoa" /> </Link>
            <Link to='/' className={styles.voltar}><i className="fas fa-arrow-left"></i> Voltar</Link>
        </nav>
    </header>
    )
}

export default MenuPages