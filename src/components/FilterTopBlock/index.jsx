import React from 'react';

import CategoriesBlock from "../CategoriesBlock";
import Sort from "../SortBlock/SortBlock";

import style from './style.module.scss';

const FilterTopBlock = () => {
    return (
        <div className={style.content__top}>
            <CategoriesBlock/>
            <Sort/>
        </div>
    );
};

export default FilterTopBlock;