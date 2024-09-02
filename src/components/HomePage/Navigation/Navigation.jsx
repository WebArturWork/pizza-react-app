import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <section className={styles.root}>
        <nav>
            <ul className={styles.nav}>
                <li className={styles.link}><Link to="#">Пиццы</Link></li>
                <li className={styles.link}><Link to="#">Напитки</Link></li>
                <li className={styles.link}><Link to="#">Десерты</Link></li>
                <li className={styles.link}><Link to="#">Соусы</Link></li>
                <li className={styles.link}><Link to="#">Акции</Link></li>
            </ul>
        </nav>
    </section>
  )
}

export default Navigation