import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <section className={styles.root}>
      <Header />
      <div className={styles.wrap}>
        <p className={styles.smile}>😕</p>
        <h2>Ничего не найдено</h2>
        <p>К сожалению данная страница отсутствует</p>
        <Link to="./" className={styles.button}>
          Вернуться назад
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
