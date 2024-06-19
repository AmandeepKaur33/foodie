// import React, { createContext, useReducer } from "react";
// import LoginReducer from "../../Reducers/Authentication Reducers/LoginReducer";
// import { useAuth } from "./Signup";
// import { useNavigate, useNavigation } from "react-router-dom";

// const LoginContext = createContext();

// const initialState = {
//   uname: "",
//   pass: "",
//   isAuthenticated: false,
//   user: null,
// };

// const LoginProvider = ({ children }) => {
  // const navigate = useNavigation();
  // const { state } = useAuth();
  // const [loginState, loginDispatch] = useReducer(LoginReducer, initialState);
  // const handleChange = (e) => {
  //   loginDispatch({
  //     type: "INPUT_CHANGE",
  //     field: e.target.name,
  //     value: e.target.value,
  //   });
  // };
  // const fetchUserData = async () => {
  //   // Simulate fetching user data asynchronously (replace with actual logic)
  //   return new Promise((resolve, reject) => {
  //     // Simulated delay to mimic asynchronous behavior
  //     setTimeout(() => {
  //       // Simulated user data (replace with actual user data retrieval logic)
  //       const users = {...state}
  //       resolve(users);
  //     }, 1000); // Simulated delay of 1 second
  //   });
  // };
  // const handleLogin = async(e) => {
    // state?.user.map((i) => {
    //   if (loginState?.uname && loginState?.pass) {
    //     if (
    //       i?.username === loginState?.uname &&
    //       i?.password === loginState?.pass
    //     ) {
    //       const userCredentials = {
    //         username: loginState?.uname,
    //         password: loginState?.pass,
    //       };
    //       console.log("userCredentials", userCredentials);
    //       loginDispatch({ type: "SAVE_LOGIN", payload: userCredentials });
    //       localStorage.setItem("LoginData", JSON.stringify(loginState?.user));
    //       alert("login successful");
    //     }
    //   } else {
    //     alert("Invalid Details");
    //   }
    // });
//     e.preventDefault();
//     try {
//       (
//         state?.user.map( (i) => {
//           if (loginState?.uname && loginState?.pass) {
//             if (i?.username === loginState?.uname && i?.password === loginState?.pass) {
//               const userCredentials = {
//                 username: loginState?.uname,
//                 password: loginState?.pass,
//               };
//               loginDispatch({ type: "SAVE_LOGIN", payload: userCredentials });
//               localStorage.setItem("LoginData", JSON.stringify(loginState?.user));
//               alert("Login successful");
//             }
//           } else {
//             alert("Invalid Details");
//           }
//         })
//       )
//     } catch (error) {
//       console.error("Error occurred during login:", error);
//       alert("An error occurred during login. Please try again.");
//     }
//   };

//   console.log("loginState", loginState);
//   return (
//     <LoginContext.Provider
//       value={{ loginState, loginDispatch, handleChange, handleLogin }}
//     >
//       {children}
//     </LoginContext.Provider>
//   );
// };

// export { LoginContext, LoginProvider };


import React, { createContext, useReducer } from 'react';

const LoginContext = createContext();

const initialState = {
  uname: '',
  pass: '',
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
    default:
      return state;
  }
};

const LoginProvider = ({ children }) => {
  const [loginState, dispatch] = useReducer(authReducer, initialState);

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   if (user) {
  //     dispatch({ type: 'LOGIN', payload: user });
  //   }
  // }, []);

  const handleChange = (e) => {
    dispatch({
      type: "INPUT_CHANGE",
      field: e.target.name,
      value: e.target.value,
    });
  };
  // useEffect(() => {
  //   if (loginState.isAuthenticated) {
  //     localStorage.setItem('user', JSON.stringify(loginState.user));
  //   } else {
  //     localStorage.removeItem('user');
  //   }
  // }, [loginState.isAuthenticated, loginState.user]);

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