const CartReducer = (state,action) => {
switch (action.type) {
    case "SUBMIT_CART":
       return {
        ...state,
        cartItems: action.cartPayload
       }
    case "SET_TOTAL_PRICE":
        return{
            ...state,
            total_Price: action.price
        }
    default: 
    return state;
}
}

export default CartReducer;