const AuthReducer = (state,action) => {
    switch (action.type){
        case "INPUT_CHANGE":
            return{
                ...state,
                [action.field] : action.value,
            };
        case "TOGGLE_FORM":
            return{
                ...state,
                isSignUp: !state.isSignUp,
            };
            case "SEARCH_ITEMS": 
            return{
                ...state,
                showUsers: action.value
            }
        case "INPUT_CLEAR":
            return{
                ...state,
                name: "",
                username: "",
                password: "",
                id: "",
                address: "",
                zipCode: "",
                mobile: "",
                img: "",
                email: "",
            }
            case 'SUBMIT_SUCCESS':
                return {
                  ...state,
                  loading: false,
                  user: action.user,
                  showUsers: action.user
                };
        default:
            return state;
    }
}
export default AuthReducer;