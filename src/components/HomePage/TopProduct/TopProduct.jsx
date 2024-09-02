import React from "react";
import { Link } from "react-router-dom";

import styles from "./TopProduct.module.scss";

const TopProduct = ({ items }) => {
  return (
    <section className={styles.root}>
      <h3>Топ сезона</h3>
      <div className={styles.wrap}>
        {items.map((item, id) =>
          item.rating > 4 ? (
            <div>
              <Link key={id} to="#" className={styles.item}>
                <div className={styles.img}>
                  <picture>
                    <source
                      srcSet={item.imageUrl}
                      media="(min-width: 900px)"
                    />
                    <img
                      src={item.imageUrl}
                      alt="Описание изображения"
                    ></img>
                  </picture>
                </div>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.desc}>
                  <p>26 см</p>
                  <p>традиционное</p>
                </div>
              </Link>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </section>
  );
};

export default TopProduct;
