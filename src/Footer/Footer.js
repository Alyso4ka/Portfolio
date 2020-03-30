import React from 'react';
import styles from './Footer.module.css';


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <h2> Евгений Зинюк </h2>
                <div className={styles.items}>
                    <div><a>qwe</a> </div>
                    <div><a>qwe</a> </div>
                    <div><a>qwe</a> </div>

                </div>
                <h5>© 2020 Все права защищены </h5>
            </div>
        </div>
    );
}

export default Footer;