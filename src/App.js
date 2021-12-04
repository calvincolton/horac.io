import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./components/Home";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import CreateProduct from "./components/CreateProduct";
import "./app.css";
import { fetchCurrentUser } from "./redux/currentUser";
// if utilizing google analytics
// import { googleTagEvent } from "../../helpers";

// const gaTrackingId = "UA-999999999-1";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route path="/products/new" element={<CreateProduct />} />
            <Route
              exact
              path="/products/:productId"
              element={<ProductDetails />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

// NOTE: this file, App.js, is the rendering layer (i.e. react-router)
// index.js provides provides data layer control (i.e. redux)
