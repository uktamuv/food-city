import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import AboutPage from './pages/AboutPage';
import ContacPage from './pages/ContacPage';
import KorzinkaPage from './pages/KorzinkaPage';
import DastafkaPage from './pages/DastafkaPage';
import ProductPage from './pages/ProductPage';
import CartPage from './component/Cart';
import { CartProvider } from './context/CartsContex';
import DastafkaMahsulotPage from './pages/dastafkaMahsulotPage';

function Root() {
 
  
  return (
    <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/ProductPage" element={<ProductPage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Contac" element={<ContacPage />} />
            <Route path="/korzinka" element={<KorzinkaPage />} />
            <Route path="/dastafka" element={<DastafkaPage />} />
            <Route path="/dastafkamahsulot" element={<DastafkaMahsulotPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
    </CartProvider>
  );
}

export default Root;
