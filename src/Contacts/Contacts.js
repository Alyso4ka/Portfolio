import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.contacts}>

            <div className={styles.container}>
                <h2>Контакты</h2>
                <form action="#">
                    <div><input></input></div>
                    <div>  <input></input></div>
                    <div> <textarea></textarea></div>
                    <div>  <button>Отправить</button> </div>
                </form>
            </div>

        </div>
    );
}

export default Contacts;
