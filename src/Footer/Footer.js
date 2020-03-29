import React from 'react';
import styles from './Footer.module.css';

function Footer () {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
       <h2>Зинюк Евгений</h2>
        <div>******************</div>
        <h4>© 2020 Все права защищены</h4>
      </div>
      
    </div>
  );
}

export default Footer;
