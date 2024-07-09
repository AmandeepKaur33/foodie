import React, { createContext, useContext, useEffect, useState } from "react";
import reducer from "../../Reducers/Authentication Reducers/SignupReducer";

import { useReducer } from "react";

// create a context to hold authentication state
const AuthContext = createContext();

// define initialData
const initialData = {
  id: "",
  name: "",
  username: "",
  password: "",
  address: "",
  zipCode: "",
  mobile: "",
  img: "",
  email: "",
  isSignUp: true,
  user: JSON.parse(localStorage.getItem("signupRecord")) || [],
  showUsers: JSON.parse(localStorage.getItem("signupRecord")) || [],
};
// Create a custom hook to access authentication context
const useAuth = () => {
  return useContext(AuthContext);
};
// const initialRecord = []h
// AuthProvider component to provide authentication state and action
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialData);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    const storedAuthState = localStorage.getItem("authState");
    if (storedAuthState) {
      dispatch({
        type: "LOAD_FROM_STORAGE",
        state: JSON.parse(storedAuthState),
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === "file") {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch({
          type: "INPUT_CHANGE",
          field: name,
          value: reader.result,
        });
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      dispatch({
        type: "INPUT_CHANGE",
        field: name,
        value: value,
      });
    }
  };
  const handleSubmit = (e) => {
    if (edit) {
      const updatedProfile = state.user.map((item) =>
        item.id === e
          ? {
              ...item,
              name: state.name,
              username: state.username,
              address: state.address,
              zipCode: state.zipCode,
              mobile: state.mobile,
              email: state.email,
            }
          : item
      );
      dispatch({ type: "SUBMIT_SUCCESS", user: updatedProfile });
      setEdit(false);
    } else {
      e.preventDefault();
      const existingData =
        JSON.parse(localStorage.getItem("signupRecord")) || [];
      const payload = [
        ...existingData,
        {
          id: Math.floor(Math.random() * 10),
          name: state.name,
          username: state.username,
          password: state.password,
          address: state.address,
          zipCode: state.zipCode,
          mobile: state.mobile,
          img: state.img,
          email: state.email,
        },
      ];
      dispatch({ type: "SUBMIT_SUCCESS", user: payload });
      dispatch({ type: "INPUT_CLEAR" });
    }
  };
  const handleUpdate = (id) => {
    const obj = {
      name: "",
      username: "",
      address: "",
      zipCode: "",
      mobile: "",
      email: "",
    };
    for (let i = 0; i < state?.user?.length; i++) {
      if (state?.user[i]?.id === id) {
        obj.name = state?.user[i]?.name;
        obj.username = state?.user[i]?.username;
        obj.address = state?.user[i]?.address;
        obj.zipCode = state?.user[i]?.zipCode;
        obj.mobile = state?.user[i]?.mobile;
        obj.email = state?.user[i]?.email;
      }
    }
    dispatch({
      type: "EDIT_INPUTS_CHANGE",
      name: obj.name,
      username: obj.username,
      address: obj.address,
      mobile: obj.mobile,
      email: obj.email,
      zipCode: obj.zipCode,
    });
  };
  useEffect(() => {
    localStorage.setItem("signupRecord", JSON.stringify(state?.user));
  }, [state?.user]);
  const toggleForm = () => {
    dispatch({ type: "TOGGLE_FORM" });
  };
  const handleUserDelete = (id) => {
    const newCategory = state?.user?.filter((item) => item?.id !== id);
    dispatch({ type: "SUBMIT_SUCCESS", user: newCategory });
  };
  const handleUserSearch = (e) => {
    const filterItems = state?.user?.filter(
      (item) =>
        item?.name.toLowerCase().includes(e.target.value) ||
        item?.username.toLowerCase().includes(e.target.value)
    );
    dispatch({ type: "SEARCH_ITEMS", value: filterItems });
  };
  const userCount = state?.user.length;
  return (
    <AuthContext.Provider
      value={{
        state,
        userCount,
        edit,
        setEdit,
        handleChange,
        handleUpdate,
        toggleForm,
        handleSubmit,
        handleUserDelete,
        handleUserSearch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, useAuth, AuthContext };
