import React from 'react';
import styles from './Loader.module.css';

function Loader() {
    return (
        <div className={styles.loaderContainer}>
            <svg className={styles.spinner} viewBox="0 0 50 50">
                <circle className={styles.circle} cx="25" cy="25" r="20" />
            </svg>
            <p className={styles.loadingText}>Aguarde um momento...</p>

            {/* Pequenas linhas de vento */}
            <div className={styles.windLines}>
                {Array(12).fill().map((_, index) => (
                    <div key={index} className={styles.smallLine}></div>
                ))}
            </div>
        </div>
    );
}

export default Loader;
