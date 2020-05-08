import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.contacts}>

            <div className={styles.container}>
                <h2>Контакты</h2>
                <form className={styles.formatArea}>

                        <input placeholder="Имя" type="text"/>
                        <input placeholder="E-mail" type="text"/>

                    <textarea placeholder="Сообщение"></textarea>

                </form>
                <button>Отправить</button>
            </div>

        </div>
    );
}

export default Contacts;