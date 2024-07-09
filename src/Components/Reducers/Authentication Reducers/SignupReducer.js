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
            case "EDIT_INPUTS_CHANGE":
            return{
                ...state,
                name: action.name,
                username: action.username,
                address: action.address,
                mobile: action.mobile,
                email: action.email,
                zipCode: action.zipCode
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