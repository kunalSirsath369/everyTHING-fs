import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Cart from "../components/Cart/Cart";
import Navigation from "../components/navigation/Navigation";

import ProductDetails from "../components/ProductDetail/ProductDetails";
import Product from "../components/Product/Product";
import ProductCard from "../components/Product/ProductCard";
import Checkout from "../components/Checkout/Checkout";
import Order from "../components/Order/Order";
import OrderDetails from "../components/Order/OrderDetails";
import Shoes from "../components/categoryProduct/Shoes";
import NewArrival from "../components/categoryProduct/NewArrival";
import Footer from "../components/footer/Footer";
import Login from "../Login&SIgnUp/LoginSungUp";
import Register from "../Login&SIgnUp/register";
const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/:lavelOne/:lavelTwo/:lavelThre"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        <Route path="/shose" element={<Shoes />}></Route>
        <Route path="/new-arrival" element={<NewArrival />}></Route>
<Route path="/loginSignup" element={<Login/>}></Route>
<Route path="/register" element={<Register/>}></Route>
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </Routes>
      <Footer/>
    </div>
  );
};

export default CustomerRoutes;
