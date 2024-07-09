import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import CartReducer from "../../Reducers/Customer Reducer/CartReducer";
import { toast } from "react-toastify";
import { LoginContext } from "../Authentication Context/LoginContext";
// import { ProductContext } from "../Admin Context/ProductsContext";

const CartContext = createContext();
const initialData = {
  currId: "",
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};
// localStorage.clear("cartItems")
const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(CartReducer, initialData);
  const { loginState } = useContext(LoginContext);

  const handleCart = (item) => {
    if (loginState?.isAuthenticated) {
      const existingData = JSON.parse(localStorage.getItem("cartItems")) || [];
      const checkDuplicacy = existingData?.filter(
        (i) => i?.name === item?.PName && loginState?.user?.CId === i?.CId
      );

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
        toast.success(`${item?.PName} added to your cart`);
      } else {
        toast.warn("Item already existed in your cart");
      }
    } else {
      toast.warn("Login first");
    }
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartState?.cartItems));
  }, [cartState?.cartItems]);

  const handleCartItemDelete = (id) => {
    const newCategory = cartState?.cartItems?.filter(
      (item) => item?.cartId !== id
    );
    cartDispatch({ type: "SUBMIT_CART", cartPayload: newCategory });
  };
  const handleDeleteCart = (cid) => {
    const newCart = cartState?.cartItems?.filter((item) => item?.CId !== cid);
    cartDispatch({ type: "SUBMIT_CART", cartPayload: newCart });
  };
  const cart = cartState?.cartItems?.filter(
    (item) => item?.CId === loginState?.user?.CId
  );
  let grandTotal = 0;

  for (let i = 0; i < cart.length; i++) {
    let cartl = cart[i];
    grandTotal += parseInt(cartl?.total_Price);
  }

  const setDecrement = (cartId, cartQty, CId) => {
    const updatedQuantity = cartState?.cartItems?.map((item) =>
      item?.cartId === cartId && item?.CId === CId
        ? {
            ...item,
            cartQty: cartQty > 1 ? cartQty - 1 : cartQty,
          }
        : item
    );
    cartDispatch({ type: "SUBMIT_CART", cartPayload: updatedQuantity });
    const get_Total = updatedQuantity?.map((item) =>
      item?.cartId === cartId
        ? {
            ...item,
            total_Price: item?.price * item?.cartQty,
          }
        : item
    );
    cartDispatch({ type: "SUBMIT_CART", cartPayload: get_Total });
  };
  const setIncrement = (cartId, CQty, qty, CId) => {
    const maxQty = qty;
    if (CQty >= maxQty) {
      toast.warn("Item is out of stock")
    }
    console.log(CQty,maxQty);
    const updatedQuantity = cartState?.cartItems?.map((item) =>
      item?.cartId === cartId && item?.CId === CId
        ? {
            ...item,
            cartQty: CQty < maxQty ? CQty + 1 : CQty,
          }
        : item
    );
    cartDispatch({ type: "SUBMIT_CART", cartPayload: updatedQuantity });
    const get_Total = updatedQuantity?.map((item) =>
      item?.cartId === cartId
        ? {
            ...item,
            total_Price: item?.price * item?.cartQty,
          }
        : item
    );
    cartDispatch({ type: "SUBMIT_CART", cartPayload: get_Total });
  };

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
        handleDeleteCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
