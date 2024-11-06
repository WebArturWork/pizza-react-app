import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoriesId } from "../../../redux/Filter/filterSlice";

import style from "./Categories.module.scss";

const Categories = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleCategoriesChange = (id) => {
    dispatch(setCategoriesId(id));
  };

  return (
    <div className={style.categories}>
      <ul>
        {filter.categories.map((item, index) => (
          <li
            key={index}
            onClick={() => handleCategoriesChange(index)}
            className={filter.categoriesId === index ? style.active : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
