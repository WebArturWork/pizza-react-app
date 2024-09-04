import React from "react";
import style from "./Categories.module.scss";

const Categories = () => {

    const [activeIndex, setActiveIndex] = React.useState(0);
    const categories = ['All', 'Meat','Vegetarian','Grill','Sharp',];

    return (
        <div className={style.categories}>
            <ul>
                {categories.map((item, index) => (
                    <li key={index} onClick={() => setActiveIndex(index)} className={activeIndex === index ? style.active : ""}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;