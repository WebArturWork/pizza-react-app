import React from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import PizzaSkeleton from "./components/PizzaBlock/Skeleton";

import './scss/app.scss';


// Server settings
const apiUrl = 'https://my-api.local/public/';
const apiKey = '12345';

function App() {

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
      <div className="App">
        <div className="wrapper">
          <Header/>
          <div className="content">
            <div className="container">
              <div className="content__top">
                <Categories/>
                <Sort/>
              </div>
              <h2 className="content__title">Все пиццы</h2>
              <div className="content__items">
                {
                  isLoading
                      ? [...new Array(6)].map((_, index) => (<PizzaSkeleton key={index} />))
                      : items.map((obj) => <PizzaBlock key={obj.id}{...obj} />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
