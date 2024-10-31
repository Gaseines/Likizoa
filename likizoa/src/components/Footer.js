import React from 'react';

import styles from './Footer.module.css'

function Footer(){
    return <footer>&copy; Developer <a className={styles.footer_link} target='_blank' href="https://gaseines.github.io/Portifolio/">Gabriel Nunes</a>. Todos os direitos reservados.</footer>
}

export default Footer