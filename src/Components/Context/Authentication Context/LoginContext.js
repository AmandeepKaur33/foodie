import React, { createContext, useReducer } from 'react';

const LoginContext = createContext();

const initialState = {
  uname: '',
  pass: '',
  submit: '',
  isAuthenticated: false,
  user: null,
  admin: false
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
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
        admin: false
      };
      case 'INPUT_CHANGE':
          return{
            ...state,
            [action.field] : action.value,
          }
      case 'INPUT_CLEAR':
        return{
          ...state,
          uname: '',
          pass: ''
        }
        case 'ADMIN_LOAD':
          return{
            ...state,
            admin: true
          }
          case 'SUBMIT_LOGIN':
            return{
              ...state,
              submit: action.submit
            }
    default:
      return state;
  }
};

const LoginProvider = ({ children }) => {
  const [loginState, dispatch] = useReducer(authReducer, initialState);
  
  const handleChange = (e) => {
    dispatch({
      type: "INPUT_CHANGE",
      field: e.target.name,
      value: e.target.value,
    });
  };
 
  const logout = () => {
    localStorage.removeItem('user');
    dispatch({type: 'LOGOUT'})
  }
  return (
    <LoginContext.Provider value={{ loginState, dispatch ,handleChange,logout,initialState}}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };