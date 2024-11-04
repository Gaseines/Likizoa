import React, { useRef, useEffect, useState } from 'react';

import styles from './Parceiros.module.css'
import stylesAni from './animacoes.module.css';

//Importação correta das imagens
import ClientesImages from '../../image/ClientesImages.js'

function Parceiros() {

    const parceirosRef = useRef(null)
    const sliderRef = useRef(null)

    const [isDown, setIsDown] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    //Funções Mouse Slider

    useEffect(() => {
        const slider = sliderRef.current

        //Mouse Clicado e segurado
        const mouseDown = (e) => {
            setIsDown(true)

            slider.classList.add('active');
            slider.style.cursor = 'grabbing'

            setStartX(e.pageX - slider.offsetLeft)
            setScrollLeft(slider.scrollLeft)
        }

        //Mouse sai do Slider
        const mouseLeave = () => {
            setIsDown(false)
            slider.style.cursor = 'grab'
        }

        //Mouse solto
        const mouseUp = () => {
            setIsDown(false)
            slider.style.cursor = 'grab'
        }


        //Mouse em movimento
        const mouseMove = (e) => {
            if (!isDown) return

            e.preventDefault()
            const x = e.pageX - slider.offsetLeft
            const anda = (x - startX) * 0.8

            slider.scrollLeft = scrollLeft - anda
        }

        slider.addEventListener('mousedown', mouseDown)
        slider.addEventListener('mouseleave', mouseLeave)
        slider.addEventListener('mouseup', mouseUp)
        window.addEventListener('mouseup', mouseUp)
        slider.addEventListener('mousemove', mouseMove)

        return () => {
            slider.removeEventListener('mousedown', mouseDown)
            slider.removeEventListener('mouseleave', mouseLeave)
            slider.removeEventListener('mouseup', mouseUp)
            window.removeEventListener('mouseup', mouseUp)
            slider.removeEventListener('mousemove', mouseMove)
        }


    })


    // animação Baixo para Cima
    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(stylesAni.ani_BC);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });

        if (parceirosRef.current) observer.observe(parceirosRef.current);


        return () => {
            if (parceirosRef.current) observer.unobserve(parceirosRef.current);
        };
    }, []);

    return (
        <div id="parceiros" className={styles.container_parceiros}>
            <div className={styles.divisoria_parceiros}></div>
            <div className={styles.divisoria_parceiros}></div>
            {/*Seção Parceiros*/}
            <div ref={parceirosRef} className={styles.parceiros}>
                <h1 className={styles.titulo_parceiros}>Parceiros</h1>
                <div ref={sliderRef} className={styles.carrossel_parceiros}>
                    <div className={styles.logo_clientes}>
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.BC} alt="BC" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Saff} alt="Saff" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Tac} alt="Tac" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Beviani} alt="Beviani" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Sanmartino} alt="Sanmartino" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.gh} alt="GH" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Betel} alt="Betel" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Contrans} alt="Contrans" />
                    </div>

                    <div className={styles.logo_clientes}>
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.MWM} alt="MWM" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Baroncello} alt="Baroncello" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Transmoor} alt="Transmoor" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.smLog} alt="SM Log" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Simas} alt="Simas" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.PTC} alt="PTC" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.GTL} alt="GTL" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.RTM} alt="RTM" />
                    </div>

                    <div className={styles.logo_clientes}>
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Portolog} alt="Portolog" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Portoex} alt="Portoex" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Vibelog} alt="Vibelog" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Dumaszak} alt="Dumaszak" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.EIL} alt="EIL" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.MGE} alt="MGE" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Spiazzi} alt="Spiazzi" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.ComexCargo} alt="Comex Cargo" />
                    </div>

                    <div className={styles.logo_clientes}>
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Jomar} alt="Jomar" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.SemFronteiras} alt="Sem Fronteiras" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Transcosta} alt="Transcosta" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Kobrasol} alt="Kobrasol" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Barcellos} alt="Barcellos" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Froes} alt="Froes" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.Nardi} alt="Nardi" />
                        <img className={styles.img_clientes} draggable="false" src={ClientesImages.lfCargo} alt="LF Cargo" />
                    </div>

                    <div className={styles.logo_clientes}>
                        <p className={styles.img_clientes}>Renato Werner Transportes LTDA</p>
                        <p className={styles.img_clientes}>Evandro Transportes</p>
                        <p className={styles.img_clientes}></p>
                        <p className={styles.img_clientes}></p>
                        <p className={styles.img_clientes}>Transportes Paganini</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Parceiros
