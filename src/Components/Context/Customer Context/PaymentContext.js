import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import PaymentReducer from "../../Reducers/Customer Reducer/PaymentReducer";


const PaymentContext = createContext();

const initialData = {
  OrderId: "",
  CId: "",
  payId: "",
  Owner: "",
  cardNo: "",
  expMonth: "",
  expYear: "",
  CVV: "",
  DAddr: "",
  submit: false,
  paymentRecords: JSON.parse(localStorage.getItem("paymentInfo")) || [],
  orderDetails: JSON.parse(localStorage.getItem("ordersInfo")) || [],
  updatedRecord: {
    PName: "",
    OrderId: ""
  },
  errors: {
    Owner: "",
    cardNo: "",
    expMonth: "",
    expYear: "",
    CVV: "",
    DAddr: "",
  },
};
// console.log(crypto.randomUUID(),"uuid");
const PaymentProvider = ({ children }) => {
  const [paymentState, paymentDispatch] = useReducer(
    PaymentReducer,
    initialData
  );
  const [status,setStatus] = useState("Pending")
  // const {handleDeleteCart} = useContext(CartContext)
  // const {handleQtyUpdate} = useContext(ProductContext)
  // const { loginState } = useContext(LoginContext);
  // const {cartState} = useContext(CartContext)
  // const { cartState } = useContext(CartContext);
  const handleChange = (e) => {
    paymentDispatch({
      type: "INPUT_CHANGE",
      field: e.target.name,
      value: e.target.value,
    });
    console.log(paymentState);
  };
//   const handleSubmit = () => {
//     // console.log(validateForm());
//  if (validateForm()) {
//     const existingData =  JSON.parse(localStorage.getItem("paymentRecords")) || [];
//     const payloadData = [
//       ...existingData,
//       {
//         OrderId: uuid(),
//         CId: loginState?.user?.CId,
//         payId: Math.floor(Math.random() * 10),
//         Owner: paymentState?.Owner,
//         cardNo: paymentState?.cardNo,
//         expMonth: paymentState?.expMonth,
//         expYear: paymentState?.expYear,
//         CVV: paymentState?.CVV,
//         DAddr: paymentState?.DAddr,
//       },
//     ];
//     console.log(payloadData.CId,"length");
//     paymentDispatch({ type: "SUBMIT", payload: payloadData });
//     console.log(paymentState?.paymentRecords,"pr");
//     handleDeleteCart(loginState?.user?.CId)
    
    
    
//       const filterCartData = cartState?.cartItems?.filter((i) => i?.CId === loginState?.user?.CId)
//       const updatedQuantities = filterCartData.map(element => ({
//         id: element?.PId,
//         qty: element?.cartQty
//       }));
      
//       // Dispatch all updates together
//       updatedQuantities.forEach(({ id, qty }) => {
//         setTimeout(() => {
//           handleQtyUpdate(id, qty);
//       }, 3000); // 3000 milliseconds delay        
//       });
//       // filterCartData.forEach(element => {
//       //   // console.log(element?.cartQty,element?.PId);
//       //   handleQtyUpdate(element?.PId,element?.cartQty)
//       // });
//       // console.log(filterCartData);
    
//     // handleQty()
//     paymentDispatch({type: "SET_CLEAR"})
//     alert("submit");
// }
// else{
//   console.log('form has errors');
// }
//   };
  const validateForm = () =>{
    // console.log(paymentState?.cardNo.length ,"len");
    let valid = true;
    if (paymentState?.Owner.trim() === "") {
      paymentDispatch({type: "VALIDATE", field: "Owner", error: "'Card Owner name is required'"})
      valid = false;
    } 
    else{
      paymentDispatch({type: "VALIDATE", field: "Owner", error: ""})
      valid = true
    }
     if (paymentState?.cardNo.trim() === "") {
      paymentDispatch({type: "VALIDATE", field: "cardNo", error: 'Card Number is required'})
      valid = false;
      
    }
    else if (paymentState?.cardNo?.length < 16) {
       paymentDispatch({type: "VALIDATE", field: "cardNo", error: 'Card Number must be 16 digits'})
       valid = false
    }
    else{
      paymentDispatch({type: "VALIDATE", field: "cardNo", error: ""})
      valid = true
    }
     if (paymentState?.expMonth.trim() === "") {
      paymentDispatch({type: "VALIDATE", field: "expMonth", error: "Expiry month is required"})
      valid = false;
    }
    else{
      paymentDispatch({type: "VALIDATE", field: "expMonth", error: ""})
      valid=true
    }
     if (paymentState?.expYear.trim() === "") {
      paymentDispatch({type: "VALIDATE", field: "expYear", error: 'Expiry year is required'})
      valid = false;
    }
    else{
      paymentDispatch({type: "VALIDATE", field: "expYear", error: ""});
      valid= true;
    }
     if (paymentState?.CVV.trim() === "") {
      paymentDispatch({type: "VALIDATE", field: "CVV", error: 'CVV is required'})
      valid = false;
    }
    else if ( paymentState?.CVV?.length < 3 && paymentState?.CVV?.length > 3 ) {
      paymentDispatch({type: "VALIDATE", field: "CVV", error: 'CVV only have 3 digits'})
      valid = false;
   }
    else{
      paymentDispatch({type: "VALIDATE", field: "CVV", error: ""})
      valid = true;
    }
     if (paymentState?.DAddr.trim() === "") {
      paymentDispatch({type: "VALIDATE", field: "DAddr", error: 'Delivery Address is required'})
      valid = false;
    }
    else{
      paymentDispatch({type: "VALIDATE", field: "DAddr", error: ""});
      valid = true;
    }
    return valid
  }
  const handleOrderDel = (orderId) => {
    const newCategory = paymentState?.paymentRecords?.filter((item) => item?.OrderId !== orderId);
    const newCategory2 = paymentState?.orderDetails?.filter((item) => item?.OrderId !== orderId);
    paymentDispatch({ type: "SUBMIT", payload: newCategory, orderPayload: newCategory2 });
  }
  const handleStatusChange = (e) => {
     setStatus(e.target.value)
  }
  const handleStatusUpdate = () => {
   const updatedRecord = 
      paymentState?.orderDetails?.map((element)=>(
        element?.map((el)=>(
          el?.OrderId === paymentState?.updatedRecord?.OrderId && el?.PName === paymentState?.updatedRecord?.PName 
          ?
          {
            ...el,
            status : status
          }
          :
          el
        ))
      ))
    
    console.log(updatedRecord);
    const existingData = JSON.parse(localStorage.getItem("paymentInfo")) || [];
    paymentDispatch({ type: "SUBMIT", payload: existingData,orderPayload: updatedRecord });
    paymentDispatch({type: "UPDATE_STATUS_VALUES", PName: "", OrderId: ""})
  }
  const handleUpdateValue = (OrderId,PName) => {
    paymentDispatch({type: "UPDATE_STATUS_VALUES", PName, OrderId})
    console.log("updatedRecord",paymentState?.updatedRecord);
  }
  const handleStatusClear = () =>{
    paymentDispatch({type: "UPDATE_STATUS_VALUES", PName: "", OrderId: ""})
  }
  const handleOrderSearch = (e) => {
     const filterItems =
      paymentState?.orderDetails?.filter((element)=>(
        element?.map((el)=>(

          el?.PName.includes(e.target.value) 
        ))
      ))
     
     console.log("filterItems",filterItems);
    //  item?.PName.toLowerCase().includes(e.target.value))
  // console.log(filterItems);
  // prodDispatch({type: "SEARCH_ITEMS", value: filterItems})
  }
  useEffect(() => {
    localStorage.setItem("paymentInfo", JSON.stringify(paymentState?.paymentRecords));
    localStorage.setItem("ordersInfo", JSON.stringify(paymentState?.orderDetails));
  }, [paymentState?.paymentRecords,paymentState?.orderDetails]);
  // useEffect(() => {
  //   const filterCartData = cartState?.cartItems?.filter((i) => i?.CId === loginState?.user?.CId);
  //   const updatedQuantities = filterCartData.map(element => ({
  //     id: element?.PId,
  //     qty: element?.cartQty
  //   }));
  
  //   updatedQuantities.forEach(({ id, qty }) => {
  //     handleQtyUpdate(id, qty);
  //   });
  // }, [cartState.cartItems, loginState.user,handleQtyUpdate,handleSubmit]);
  return (
    <PaymentContext.Provider
      value={{ paymentState, paymentDispatch,handleStatusClear, handleChange ,validateForm, handleOrderDel, handleStatusChange,handleStatusUpdate ,handleUpdateValue ,handleOrderSearch}}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export { PaymentContext, PaymentProvider };
