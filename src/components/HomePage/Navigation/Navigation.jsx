import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <section className={styles.root}>
        <nav>
            <ul className={styles.nav}>
                <li className={styles.link}><Link to="#">Pizzas</Link></li>
                <li className={styles.link}><Link to="#">Drinks</Link></li>
                <li className={styles.link}><Link to="#">Desserts</Link></li>
                <li className={styles.link}><Link to="#">Sauces</Link></li>
                <li className={styles.link}><Link to="#">Stocks</Link></li>
            </ul>
        </nav>
    </section>
  )
}

export default Navigation