const PaymentReducer = (state,action) => {
    switch (action.type){
        case "INPUT_CHANGE":
        return{
            ...state,
            [action.field] : action.value
        }
        case "SUBMIT":
        return{
            ...state,
            paymentRecords: action.payload
        }
        case "SET_CLEAR":
            return{
                ...state,
                CId: "",
                payId: "",
                Owner: "",
                cardNo: "",
                expMonth: "",
                expYear: "",
                CVV: "",
                DAddr: "",
            }
        default:
            return state;
    }
}
export default PaymentReducer;