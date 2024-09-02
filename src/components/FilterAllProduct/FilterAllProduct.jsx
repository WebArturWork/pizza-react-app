import React from 'react';

import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";

import style from './FilterAllProduct.module.scss';

const FilterAllProduct = () => {
    return (
        <div className={style.content__top}>
            <Categories/>
            <Sort/>
        </div>
    );
};

export default FilterAllProduct;