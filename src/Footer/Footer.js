import React from 'react';
import styles from './Footer.module.css';
import {faGithub, faGoogle, faInstagram, faTelegram, faVk} from '@fortawesome/free-brands-svg-icons';
import Item from "../Item/Item";


class Footer extends React.Component {

    state = {
        faItem: [
            {icon: faTelegram, className: styles.item, size: "3x", id: "https://t.me/zhenya_ziniuk"},
            {icon: faVk, className: styles.item, size: "3x", id: "https://vk.com/id252534874"},
            {icon: faInstagram, className: styles.item, size: "3x", id: "https://www.instagram.com/evgeny_zinuk"},
            {icon: faGithub, className: styles.item, size: "3x", id: "https://github.com/Alyso4ka"},

        ]
    }

    render() {
        let itemsFooter = this.state.faItem.map(it => <a href={it.id}><Item className={it.className} icon={it.icon}
                                                                            size={it.size}/></a>)
        return (
            <div className={styles.footer}>
                <div className={styles.container}>
                    <h2>Зинюк Евгений </h2>
                    <div className={styles.items}>
                        <div>{itemsFooter}</div>
                        <h4>© 2020 it-incubator, All Rights Reserved.</h4>


                    </div>

                </div>
            </div>

        );
    }
}

export default Footer;