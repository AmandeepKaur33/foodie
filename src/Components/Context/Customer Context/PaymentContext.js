import React, { createContext, useContext, useEffect, useReducer } from "react";
import PaymentReducer from "../../Reducers/Customer Reducer/PaymentReducer";
import { LoginContext } from "../Authentication Context/LoginContext";

const PaymentContext = createContext();

const initialData = {
  CId: "",
  payId: "",
  Owner: "",
  cardNo: "",
  expMonth: "",
  expYear: "",
  CVV: "",
  DAddr: "",
  paymentRecords: JSON.parse(localStorage.getItem("paymentData")) || [],
};

const PaymentProvider = ({ children }) => {
  const [paymentState, paymentDispatch] = useReducer(
    PaymentReducer,
    initialData
  );
  const { loginState } = useContext(LoginContext);
  const handleChange = (e) => {
    paymentDispatch({
      type: "INPUT_CHANGE",
      field: e.target.name,
      value: e.target.value,
    });
    console.log(paymentState);
  };
  const handleSubmit = () => {
    const existingData = JSON.parse(localStorage.getItem("paymentData")) || [];
    const payloadData = [
      ...existingData,
      {
        CId: loginState?.user?.CId,
        payId: Math.floor(Math.random() * 10),
        Owner: paymentState?.Owner,
        cardNo: paymentState?.cardNo,
        expMonth: paymentState?.expMonth,
        expYear: paymentState?.expYear,
        CVV: paymentState?.CVV,
        DAddr: paymentState?.DAddr,
      },
    ];
    paymentDispatch({ type: "SUBMIT", payload: payloadData });
    paymentDispatch({type: "SET_CLEAR"})
    alert("submit");
  };
  useEffect(() => {
    localStorage.setItem("paymentData", JSON.stringify(paymentState?.paymentRecords));
  }, [paymentState?.paymentRecords]);
  return (
    <PaymentContext.Provider
      value={{ paymentState, paymentDispatch, handleChange, handleSubmit }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export { PaymentContext, PaymentProvider };
