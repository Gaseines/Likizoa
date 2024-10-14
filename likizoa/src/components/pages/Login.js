import React from 'react';


import MenuPages from '../MenuPages'
import styles from './Login.module.css'
import ScrollToTop from "../ScrollToTop"
import ComponentsLogin from "../ComponentsLogin/ComponentsLogin"



function Login() {



    return(
        <div className={styles.body}>
            <ScrollToTop />
            <MenuPages />
            <ComponentsLogin />
        </div>
    )
}

export default Login