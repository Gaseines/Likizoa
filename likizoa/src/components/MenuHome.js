import React, { useEffect, useState, useRef } from "react"; // Importação de hooks do React
import styles from "./MenuHome.module.css"; // Importa os estilos específicos para o componente
import logo from "../image/logo.png"; // Importa a imagem do logo
import { Link } from "react-router-dom";

function MenuHome() {
    const burguerRef = useRef(null); // Referência para o ícone de "hambúrguer" (menu)
    const fecharRef = useRef(null); // Referência para o ícone de "fechar"
    const menuRef = useRef(null); // Referência para o elemento <menu>
    const listaMenuRef = useRef(null); // Referência para a lista de itens de menu
    const navMenuRef = useRef(null); // Referência para o elemento <nav>

    const [fecharClass, setFecharClass] = useState(`${styles.fechado}`); // Classe do ícone de "fechar"
    const [burguerClass, setBurguerClass] = useState(`${styles.burguer}`); // Classe do ícone de "hambúrguer"
    const [fecharVisible, setfecharVisible] = useState(false); // Estado para saber se o menu está aberto

    const tamanhoTela = () => {
        if (window.innerWidth <= 1100) {
            setBurguerClass(`${styles.burguer}`);
            setFecharClass(`${styles.fechado}`);
            if (menuRef.current) {
                menuRef.current.style.height = '0%'; // Fecha o menu
                listaMenuRef.current.style.display = 'none'; // Esconde a lista de itens do menu
            }
        } else {
            if (menuRef.current) {
                menuRef.current.style.height = '100px'; // Define a altura do menu
                listaMenuRef.current.style.display = 'flex'; // Exibe a lista de itens do menu
                listaMenuRef.current.style.opacity = 1; // Define a opacidade para 100%
            }
        }
    };

    useEffect(() => {
        window.addEventListener('resize', tamanhoTela); // Adiciona o listener para redimensionamento da tela
        tamanhoTela(); // Ajusta o menu ao carregar

        return () => {
            window.removeEventListener('resize', tamanhoTela);
        };
    }, []);

    const handleClick = () => {
        if (window.innerWidth < 1100) {
            setfecharVisible(false);
            if (menuRef.current) {
                menuRef.current.style.height = '0%';
                navMenuRef.current.style.height = '0%';
            }
            setTimeout(() => {
                if (listaMenuRef.current) {
                    listaMenuRef.current.style.opacity = 0;
                    setBurguerClass(`${styles.burguer}`);
                }
            }, 200);
            setTimeout(() => {
                if (listaMenuRef.current) {
                    listaMenuRef.current.style.display = 'none';
                }
            }, 700);
        }
    };

    const abrirMenu = () => {
        setfecharVisible(true);
        if (menuRef.current) {
            menuRef.current.style.height = '100%';
        }
        setBurguerClass(`${styles.burguer} ${styles.giraCloseD}`);
        setFecharClass(`${styles.fechado} ${styles.giraOpenD}`);
        navMenuRef.current.style.height = '100%';

        setTimeout(() => {
            if (listaMenuRef.current && fecharRef.current) {
                listaMenuRef.current.style.display = 'block';
                fecharRef.current.style.display = 'block';
            }
        }, 200);

        setTimeout(() => {
            if (listaMenuRef.current) {
                listaMenuRef.current.style.opacity = 1; // Define a opacidade para 100%
            }
        }, 500);
    };

    useEffect(() => {
        const burguer = burguerRef.current;
        if (burguer) {
            burguer.addEventListener('click', abrirMenu);
        }

        return () => {
            if (burguer) {
                burguer.removeEventListener('click', abrirMenu);
            }
        };
    }, [burguerClass]);

    const fecharMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.height = '0%'
        }
        setFecharClass(`${styles.fechado} ${styles.giraCloseE}`)
        navMenuRef.current.style.height = '0%'

        setTimeout(() => {
            listaMenuRef.current.style.opacity = '0%';
            setBurguerClass(`${styles.burguer} ${styles.giraOpenE}`);
        }, 200);

        setTimeout(() => {
            listaMenuRef.current.style.display = 'none';
        }, 700);
    };

    useEffect(() => {
        const fechar = fecharRef.current;
        if (fechar) {
            fechar.addEventListener('click', fecharMenu);
        }

        return () => {
            if (fechar) {
                fechar.removeEventListener('click', fecharMenu);
            }
        };
    }, [fecharClass]);

    // JSX corrigido
    return (
        <nav ref={navMenuRef} className={styles.nav_menu}>
            <div className={styles.header}>
                <a href="#welcome">
                    <img className={styles.img_logo} src={logo} alt="Likizoa" />
                </a>
                <svg ref={burguerRef} className={burguerClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffffff" fill="none">
                    <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg ref={fecharRef} className={fecharClass} style={{ display: fecharVisible ? 'block' : 'none' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                    <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <menu ref={menuRef} className={styles.menu}>
                <ul ref={listaMenuRef} className={styles.lista_menu}>
                    <li className={styles.itens_menu} onClick={handleClick}>
                        <a href="#capa">Início</a>
                    </li>
                    <li className={styles.itens_menu} onClick={handleClick}>
                        <a href="#nossa_empresa">Nossa Empresa</a>
                    </li>
                    <li className={styles.itens_menu} onClick={handleClick}>
                        <a href="#parceiros">Parceiros</a>
                    </li>
                    <li className={styles.itens_menu} onClick={handleClick}>
                        <a href="#contatos">Contato</a>
                    </li>
                    <li className={styles.itens_menu} onClick={handleClick}>
                        <a href="#">Aplicativo</a>
                    </li>
                    <li className={styles.itens_menu} onClick={handleClick}>
                        <Link to="/Login">Login</Link>
                    </li>
                </ul>
            </menu>
        </nav>
    );
}

export default MenuHome;
