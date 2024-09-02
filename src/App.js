import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import BasketPage from "./components/BasketPage/BasketPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

import './scss/app.scss';


function App() {
  return (
      <div className="App">
        <div className="wrapper">
          <div className="content">
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/basket" element={<BasketPage/>} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
