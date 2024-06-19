  const LoginReducer = (state, action) => {
    console.log("action",action);
    switch (action.type) {
      case 'SAVE_LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
        case 'INPUT_CHANGE':
          return{
            ...state,
            [action.field] : action.value,
          }
      default:
        return state;
    }
  };
  export default LoginReducer;