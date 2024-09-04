import React from "react";

import style from "./Product.module.scss";

const Product = ({title, imageUrl, price, types, sizes}) => {

    const pizzaTypes = ['Thin', 'Traditional']

    const [activeType, setActiveType] = React.useState(0);
    const [activeSize, setActiveSize] = React.useState(0);

    return (
        <div className={style.pizza_block}>
            <img
                className={style.pizza_block__image}
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className={style.pizza_block__title}>{title}</h4>
            <div className={style.pizza_block__selector}>
                <ul>
                    {types.map((type, i) => <li key={i} onClick={() => setActiveType(type)} className={activeType === type ? style.active : ""}>{pizzaTypes[type]}</li>)}
                </ul>
                <ul>
                    {sizes.map((size, i) => <li key={i} onClick={() => setActiveSize(i)} className={activeSize === i ? style.active : ""}>{size} cm.</li>)}
                </ul>
            </div>
            <div className={style.pizza_block__bottom}>
                <div className={style.pizza_block__price}>от {price} €</div>
                <button className="button button--outline button--add">
                    <span>Add</span>
                </button>
            </div>
        </div>
    )
}

export default Product;