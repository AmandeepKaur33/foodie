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
            paymentRecords: action.payload,
            orderDetails: action.orderPayload,
            submit: true
        }
        case "UPDATE_STATUS_VALUES":
            return{
                ...state,
                updatedRecord: {
                    PName: action.PName,
                    OrderId: action.OrderId
                }
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
            case "VALIDATE": 
            return{
                ...state,
                errors: {
                    ...state.errors,
                [action.field]: action.error,
                }
            }
        default:
            return state;
    }
}
export default PaymentReducer;