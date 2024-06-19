import React, { createContext, useContext, useEffect, useReducer } from "react";
import CartReducer from "../../Reducers/Customer Reducer/CartReducer";
import { LoginContext } from "../Authentication Context/LoginContext";
import { ProductContext } from "../Admin Context/ProductsContext";

const CartContext = createContext();
console.log("check storage",localStorage.getItem("cartItems"));
const initialData = {
  currId: "",
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  
};
// localStorage.clear("cartItems")
const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(CartReducer, initialData);
  const {qtyUpdate} = useContext(ProductContext);
  const { loginState } = useContext(LoginContext);

  const handleCart = (item) => {
    // const totalPrice = item?.cartQty * item?.p
    console.log("price", item.Price);
    if (loginState?.isAuthenticated) {
      
      const existingData = JSON.parse(localStorage.getItem("cartItems")) || [];
      const checkDuplicacy = existingData?.filter((i)=>i?.name === item?.PName && loginState?.user?.CId === i?.CId)

      console.log("cart?.",checkDuplicacy);
     if (checkDuplicacy.length === 0) {
       const payload = [
         ...existingData,
         {
          PId: item?.PId,
           CId: loginState?.user?.CId,
           name: item?.PName,
           img: item?.PImg,
           price: item?.Price,
           cartQty: 1,
           qty: item?.Qty,
           total_Price: item?.Price,
           cartId: Math.floor(Math.random() * 10),
         },
       ];
       cartDispatch({ type: "SUBMIT_CART", cartPayload: payload });
       console.log(cartState);
     }
     else{
      alert("Item already existed in your cart")
     }
    } else {
      alert("Login first");
    }
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartState?.cartItems));
  }, [cartState?.cartItems]);

  const handleCartItemDelete = (id) => {
    const newCategory = cartState?.cartItems?.filter(
      (item) => item?.cartId !== id
    );
    console.log(newCategory);
    cartDispatch({ type: "SUBMIT_CART", cartPayload: newCategory });
  };
  const handleDeleteCart = (id) => {

    const newCategory = cartState?.cartItems?.filter(
      (item) => item?.CId == id

    );
    const pid = newCategory?.map((it)=> it?.PId)
    const qty = newCategory?.map((it)=> it?.cartQty)
    console.log(pid,"pid");
    qtyUpdate(pid,qty)
    // console.log(q,"prod");
    // cartDispatch({ type: "SUBMIT_CART", cartPayload: newCategory });
  }
  const cart = cartState?.cartItems?.filter(
    (item) => item?.CId === loginState?.user?.CId
  );
  let grandTotal = 0;
 
  for (let i = 0; i < cart.length; i++) {
    let cartl = cart[i];
    grandTotal += parseInt(cartl?.total_Price);
    // cart?.price * cart?.qty
    // totalPrice =  cartl?.price * cartl?.qty
  }

  
  
  // const findTotal = (cartId) => {
  //   const get_Total = cart?.map((item)=>(
  //     item?.cartId === cartId
  //     ?
  //     {
  //       ...item,
  //       total_Price: item?.price * item?.cartQty
  //     }: item
  //     ))
  //     return cartDispatch({type: "SUBMIT_CART", cartPayload: get_Total})
  //     //  console.log(cartState);
  // }
  const setDecrement = (cartId, cartQty, CId) => {
    const updatedQuantity = cartState?.cartItems?.map((item) =>
      item?.cartId === cartId && item?.CId === CId
        ? {
            ...item,
            cartQty: cartQty > 1 ? cartQty - 1 : cartQty,
          }
        : item
    );
    console.log("up",updatedQuantity,);
    // problem occurs here
    cartDispatch({ type: "SUBMIT_CART", cartPayload: updatedQuantity });
    const get_Total = updatedQuantity?.map((item)=>(
      item?.cartId === cartId
      ?
      {
        ...item,
        total_Price: item?.price * item?.cartQty
      }
      :
       item
      ))
       cartDispatch({type: "SUBMIT_CART", cartPayload: get_Total})
  };
  const setIncrement = (cartId, CQty, qty,CId) => {
    const maxQty = qty;
    const updatedQuantity = cartState?.cartItems?.map((item) =>
      item?.cartId === cartId && item?.CId === CId
        ? {
            ...item,
            cartQty: CQty < maxQty ? CQty + 1 : CQty,
          }
        : item
        );
        console.log(cartState);
        // const payload = [...cartState?.cartItems, updatedQuantity]
        cartDispatch({ type: "SUBMIT_CART", cartPayload: updatedQuantity });
        const get_Total = updatedQuantity?.map((item)=>(
          item?.cartId === cartId
          ?
          {
            ...item,
            total_Price: item?.price * item?.cartQty
          }
          :
           item
          ))
           cartDispatch({type: "SUBMIT_CART", cartPayload: get_Total})
        // findTotal(cartId)
    // const total_PriceId = cart?.filter((item)=>item?.cartId === cartId)
    // console.log("total_PriceId",total_PriceId?.map((i)=>i?.price));
  //  const get_Total = cart?.map((item)=>(
  //     item?.cartId === cartId
  //     ?
  //     {
  //       ...item,
  //       total_Price: item?.price * item?.cartQty
  //     }
  //     // console.log("yes",item?.price * item?.cartQty)
  //     : item
  //     ))
  //     console.log(get_Total);
  //      cartDispatch({type: "SUBMIT_CART", cartPayload: get_Total})
    //  if (item?.cartId === cartId) {
    //   let tprice = item?.price * item?.cartQty
    //   console.log(tprice);
    //   {...item,}
    //  }

  };
  useEffect(() => {
    
  }, [])
  
  return (
    <CartContext.Provider
      value={{
        cartState,
        handleCart,
        handleCartItemDelete,
        cart,
        grandTotal,
        setIncrement,
        setDecrement,
        handleDeleteCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
