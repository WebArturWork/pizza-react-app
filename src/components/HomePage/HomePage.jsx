import React from "react";

import Header from "../Header/Header";
import Navigation from "./Navigation/Navigation";
import TopProduct from "./TopProduct/TopProduct";
import FilterAllProduct from "../FilterAllProduct/FilterAllProduct";
import ProductSkeleton from "./Product/ProductSkeleton";
import Product from "./Product/Product";

import { useSelector } from "react-redux";

import styles from "./HomePage.module.scss";


// Server settings
const apiUrl = 'https://my-api.local/public/';
const apiKey = '12345';

const HomePage = () => {
    const categoriesId = useSelector(state => state.filter.categoriesId);
    const sortId = useSelector((state) => state.sort.sortId);
    
    
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch(apiUrl, {
                method: "POST",
                headers: {
                    'Authorization': `${apiKey}`,
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                action: 'routeRequest',
                filterId: categoriesId,
            })

            }
        ).then(res => {
            return res.json()
        }).then((res) => {
            setItems(res);
            setIsLoading(false);
        })
    }, [categoriesId]);

    React.useEffect(() => {
        fetch(apiUrl, {
                method: "POST",
                headers: {
                    'Authorization': `${apiKey}`,
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                action: 'routeSortRequest',
                sortId: sortId
            })

            }
        ).then(res => {
            return res.json()
        }).then((res) => {
            setItems(res);
            setIsLoading(false);
        })
    }, [sortId]);

    return (
        <div>
            <Header />
            <Navigation />
            {!isLoading && <TopProduct items={items} />}
            <FilterAllProduct />
            <h2 className={styles.content__title}>All the pizzas</h2>
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