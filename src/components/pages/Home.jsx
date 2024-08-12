import React from "react";
import Categories from "../Categories";
import Sort from "../Sort";
import PizzaSkeleton from "../PizzaBlock/Skeleton";
import PizzaBlock from "../PizzaBlock";


// Server settings
const apiUrl = 'https://my-api.local/public/';
const apiKey = '12345';

export default function Home() {

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
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(6)].map((_, index) => (<PizzaSkeleton key={index}/>))
                        : items.map((obj) => <PizzaBlock key={obj.id}{...obj} />)
                }
            </div>
        </>
    )
}

