import React from "react";
import axios from "axios";

import { useSelector } from "react-redux";

import Header from "../Header/Header";
import Navigation from "./Navigation/Navigation";
import TopProduct from "./TopProduct/TopProduct";
import FilterAllProduct from "../FilterAllProduct/FilterAllProduct";
import ProductSkeleton from "./Product/ProductSkeleton";
import Product from "./Product/Product";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  const categoriesId = useSelector((state) => state.filter.categoriesId);
  const sortId = useSelector((state) => state.sort.sortId);
  const sortList = useSelector((state) => state.sort.sortList);
  const sortOptions = [
    { sortBy: "title", order: "asc" }, // sortId: 0
    { sortBy: "price", order: "asc" }, // sortId: 1
    { sortBy: "price", order: "desc" }, // sortId: 2
    { sortBy: "rating", order: "desc" }, // sortId: 3
  ];

  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);

    const categoryQuery = categoriesId !== 0 ? `category=${categoriesId}` : "";

    const { sortBy, order } = sortOptions[sortId];
    const sortQuery = `sortBy=${sortBy}&order=${order}`;

    const queryString = [categoryQuery, sortQuery].filter(Boolean).join("&");

    axios
      .get(`http://127.0.0.1:8000/api/data?${queryString}`)
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, [categoriesId, sortId]);

  return (
    <div>
      <Header />
      <Navigation />
      {!isLoading && <TopProduct items={items} />}
      <FilterAllProduct />
      <h2 className={styles.content__title}>All the pizzas</h2>
      <div className={styles.content__items}>
        {isLoading
          ? [...new Array(6)].map((_, index) => <ProductSkeleton key={index} />)
          : items.map((obj) => <Product key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default HomePage;
