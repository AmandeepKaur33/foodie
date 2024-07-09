import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Components/Context/Authentication Context/Signup";
import { LoginProvider } from "./Components/Context/Authentication Context/LoginContext";
import { CategoryProvider } from "./Components/Context/Admin Context/CategoryContext";
import { ProductProvider } from "./Components/Context/Admin Context/ProductsContext";
import { CartProvider } from "./Components/Context/Customer Context/CartContext";
import { PaymentProvider } from "./Components/Context/Customer Context/PaymentContext";
import { ReportProvider } from "./Components/Context/Admin Context/ReportContext";
import { FeedbackProvider } from "./Components/Context/Customer Context/FeedbackContext";
// import { AuthProvider } from "./Components/Context/SignupIn";
// import { AppProvider, LoginContext } from "./Components/Context/context";
// import store from "./store";
// import { Provider } from 'react-redux';
// store.subscribe(()=> console.log(store.getState()))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <LoginProvider>
      <CategoryProvider>
    <CartProvider>
        <ProductProvider>
<PaymentProvider>
  <ReportProvider>
    <FeedbackProvider>
  <BrowserRouter>
      <App />
    <ToastContainer />
  </BrowserRouter>
  </FeedbackProvider>
    </ReportProvider>
  </PaymentProvider>
  </ProductProvider>
  </CartProvider>
  </CategoryProvider>
  </LoginProvider>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
