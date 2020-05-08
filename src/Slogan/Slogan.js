import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
    return (
        <div className={styles.slogan}>


            <div className={styles.container}>
                <h2><span>Рассматриваю Варианты Удаленной Работы</span></h2>

                <button>Нанять меня</button>
            </div>
        </div>
    );
}

export default Slogan;