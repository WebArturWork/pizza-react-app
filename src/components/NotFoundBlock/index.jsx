import React from "react";
import {Link} from "react-router-dom";
import styles from "./style.module.scss";

const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <p className={styles.smile}>😕</p>
            <h2>Ничего не найдено</h2>
            <p>К сожалению данная страница отсутствует</p>
            <Link to="./" className={styles.button}>Вернуться назад</Link>
        </div>
    )
}

export default NotFoundBlock;