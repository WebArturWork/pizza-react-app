import React from "react";
import { Route, Routes } from "react-router-dom";

// Blocks
import HeaderBlock from "./components/HeaderBlock";

// Pages
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import NotFound from "./components/pages/NotFound";

// Styles
import './scss/app.scss';


function App() {
  return (
      <div className="App">
        <div className="wrapper">
          <HeaderBlock/>
          <div className="content">
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
