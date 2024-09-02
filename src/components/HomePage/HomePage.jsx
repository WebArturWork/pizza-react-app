import React from "react";

import Header from "../Header/Header";
import FilterAllProduct from "../FilterAllProduct/FilterAllProduct";
import ProductSkeleton from "./Product/ProductSkeleton";
import Product from "./Product/Product";

import styles from "./HomePage.module.scss";


// Server settings
const apiUrl = 'https://my-api.local/public/';
const apiKey = '12345';

const HomePage = () => {

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        fetch(apiUrl, {
                method: "POST",
                headers: {
                    'Authorization': `${apiKey}`,
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                action: 'routeRequest',
            })

            }
        ).then(res => {
            return res.json()
        }).then((res) => {
            setItems(res);
            setIsLoading(false);
        })
    }, []);

    return (
        <div>
            <Header />
            <FilterAllProduct />
            <h2 className={styles.content__title}>Все пиццы</h2>
            <div className={styles.content__items}>
                {
                    isLoading
                        ? [...new Array(6)].map((_, index) => (<ProductSkeleton key={index}/>))
                        : items.map((obj) => <Product key={obj.id}{...obj} />)
                }
            </div>
        </div>
    )
}

export default HomePage;