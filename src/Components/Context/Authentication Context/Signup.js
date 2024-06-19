import React, { createContext, useContext, useEffect } from "react";
import reducer from '../../Reducers/Authentication Reducers/SignupReducer';

import { useReducer } from "react";

// create a context to hold authentication state
const AuthContext = createContext();

// define initialData
const initialData = 
    {
        id: "",
        name: "",
        username: "",
        password: "",
        isSignUp: true,
        user: JSON.parse(localStorage.getItem("registrationData")) || [],
        showUsers: JSON.parse(localStorage.getItem("registrationData")) || []
    }
;
// Create a custom hook to access authentication context
const useAuth = () => {
    return useContext(AuthContext);
  };
  // const initialRecord = []
// AuthProvider component to provide authentication state and action 
const AuthProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialData);
    // const [recordState, recordDispatch] = useReducer(reducer,initialRecord)
console.log("state data",state);
    // load state from local storage on component mount
    useEffect(() => {
      const storedAuthState = localStorage.getItem('authState');
      if (storedAuthState) {
        dispatch({type: 'LOAD_FROM_STORAGE', state:JSON.parse(storedAuthState)});
      }
    }, [])
    
    // update local storage when state changes 
    // useEffect(() => {
    //   localStorage.setItem('authState',JSON.stringify(state))
    // }, [state]);

    const handleChange = (e) => {
        dispatch({
            type: 'INPUT_CHANGE',
            field: e.target.name,
            value: e.target.value
        });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      // dispatch({ type: 'SUBMIT_FORM' });
  
      // const endpoint = state.isSignUp ? '/api/signup' : '/api/login';
      const existingData =  JSON.parse(localStorage.getItem('registrationData')) || []
      const payload = [...existingData, { id: Math.floor(Math.random()*10), name: state.name, username: state.username ,password: state.password }];
      dispatch({ type: 'SUBMIT_SUCCESS', user: payload });
      dispatch({type: "INPUT_CLEAR"})
      console.log(state);
    //   try {
    //     const response = await fetch(endpoint, {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify(payload),
    //     });
  
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
  
    //     const data = await response.json();
    //     dispatch({ type: 'SUBMIT_SUCCESS', user: data.user });
    //   } catch (error) {
    //     dispatch({ type: 'SUBMIT_FAILURE', error: error.message });
    //   }
    };
    useEffect(()=>{
      localStorage.setItem("registrationData",JSON.stringify(state?.user))
    },[state?.user])
    const toggleForm = () => {
        dispatch({ type: 'TOGGLE_FORM' });
    };
    const handleUserDelete = (id) => {
      const newCategory = state?.user?.filter((item) => item?.id !== id);
      dispatch({ type: "SUBMIT_SUCCESS", user: newCategory });
    }
    const handleUserSearch = (e) => {
      const filterItems = state?.user?.filter((item)=> item?.name.toLowerCase().includes(e.target.value) || item?.username.toLowerCase().includes(e.target.value))
    console.log(filterItems);
    dispatch({type: "SEARCH_ITEMS", value: filterItems})
    }
    return <AuthContext.Provider value={{state,handleChange,toggleForm,handleSubmit,handleUserDelete,handleUserSearch}}>
        {children}
    </AuthContext.Provider>
}
export {AuthProvider,useAuth,AuthContext}