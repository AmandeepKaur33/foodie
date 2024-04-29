import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AppProvider, CartProvider } from "./Components/Context/context";
// import { AppProvider, LoginContext } from "./Components/Context/context";
// import store from "./store";
// import { Provider } from 'react-redux';
// store.subscribe(()=> console.log(store.getState()))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <CartProvider>
  <BrowserRouter>
      <App />
    <ToastContainer />
  </BrowserRouter>
  </CartProvider>
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
