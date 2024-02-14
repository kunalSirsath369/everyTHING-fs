
import {BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './customer/Pages/HomePage';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetail/ProductDetails';
import Footer from './customer/components/footer/Footer';

import Navigation from './customer/components/navigation/Navigation';
import CustomerRoutes from './customer/Routers/CustomerRoutes';

function App() {
  return (
    <CustomerRoutes/>
 

  );
}

export default App;
