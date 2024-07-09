const FeedbackReducer = (state,action) => {
    switch(action.type) {
        case "INPUT_CHANGE":
            return{
                ...state,
                [action.field] : action.value
            }
        case "SUBMIT":
           return{
            ...state,
            feedbackRecords: action.feedbackRecords,
        }
        case "SET_CLEAR":
        return{
            ...state,
            FeedbackId: "",
            FName: "",
            LName: "",
            email: "",
            subject: "",
            message: "",
        }
        default:
            return state;
    }
}
export default FeedbackReducer;