import React from "react";
import style from "./style.module.scss";

const CategoriesBlock = () => {

    const [activeIndex, setActiveIndex] = React.useState(0);
    const categories = ['Все', 'Мясные','Вегетарианская','Гриль','Острые','Закрытые',];

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

export default CategoriesBlock;