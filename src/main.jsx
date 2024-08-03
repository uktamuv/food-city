import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Root from "./root.jsx";
import { CartProvider } from "./context/CartContex.jsx";
import { MahsulotProvider } from "./context/mahsulotContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <CartProvider>
  <MahsulotProvider>
    <Root />
  </MahsulotProvider>
  </CartProvider>
  </BrowserRouter>
);
