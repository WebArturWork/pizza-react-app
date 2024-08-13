import React from "react";

import FilterTopBlock from "../FilterTopBlock";
import PizzaSkeleton from "../PizzaBlock/Skeleton";
import PizzaBlock from "../PizzaBlock";

import style from "./style.module.scss";


// Server settings
const apiUrl = 'https://my-api.local/public/';
const apiKey = '12345';

const HomeBlock = () => {

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        fetch(apiUrl, {
                method: "GET",
                headers: {
                    'Authorization': `${apiKey}`
                }
            }
        ).then(res => {
            return res.json()
        }).then((arr) => {
            setItems(arr);
            setIsLoading(false)
        })
    }, []);

    return (
        <div>
            <FilterTopBlock />
            <h2 className={style.content__title}>Все пиццы</h2>
            <div className={style.content__items}>
                {
                    isLoading
                        ? [...new Array(6)].map((_, index) => (<PizzaSkeleton key={index}/>))
                        : items.map((obj) => <PizzaBlock key={obj.id}{...obj} />)
                }
            </div>
        </div>
    )
}

export default HomeBlock;