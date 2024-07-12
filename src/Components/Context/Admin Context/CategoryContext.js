import React, { createContext, useEffect, useReducer, useState } from "react";
import CategoryReducer from "../../Reducers/Admin Reducers/CategoryReducers";
import { toast } from "react-toastify";
import { getCategories } from "../../Services/categoryServices";
import {  v4 as uuid  } from 'uuid'

const CategoryContext = createContext();

const intialData = {
  CatId: "",
  CName: "",
  CatImg: "",
  CatStatus: false,
  categories: JSON.parse(localStorage.getItem("categoryData")) || [],
  showCategories: JSON.parse(localStorage.getItem("categoryData")) || [],
  isEdit: false,
};
const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CategoryReducer, intialData);
  const [categoryData, setCategoryData] = useState()
  console.log(state?.categories,"data");
  // const existingData = [];
  useEffect(()=>{
    getCategories().then(foods => setCategoryData(foods))
  },[setCategoryData])
  console.log(categoryData,"CategoryData");
  const handleChange = (e) => {
    dispatch({
      type: "INPUT_CHANGE",
      field: e.target.name,
      value: e.target.value,
    });
  };
  const handleStatus = (e) => {
    dispatch({
      type: "INPUT_CHANGE",
      field: e.target.name,
      value: e.target.checked,
    });
  };
  const handleImg = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      dispatch({
        type: "INPUT_CHANGE",
        field: e.target.name,
        value: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.isEdit) {
      const updatedCategories = state.categories.map((item) =>
        item.CatId === state.CatId
          ? {
              ...item,
              CName: state.CName,
              CatImg: state.CatImg,
              CatStatus: state.CatStatus,
            }
          : item
      );
      dispatch({ type: "SUBMIT", categories: updatedCategories });
      toast.success(`${state?.CName} category updated successfully`);
      dispatch({ type: "SET_CLEAR" });
    } else {
      const existingData = JSON.parse(localStorage.getItem("categoryData")) || [];
      const payload = [
        ...existingData,
        {
          CatId: uuid(),
          CatImg: state.CatImg,
          CName: state.CName,
          CatStatus: state?.CatStatus,
        },
      ];
      dispatch({ type: "SUBMIT", categories: payload });
      toast.success(`${state?.CName} added in categories`);
      dispatch({ type: "SET_CLEAR" });
    }
  };
  useEffect(() => {
    
    localStorage.setItem("categoryData", JSON.stringify(state?.categories));
  }, [state?.categories]);
  const handleDelete = (id) => {
    let removedItem;
    const newCategory = state?.categories?.filter((item) => item?.CatId !== id);
    state?.categories?.map((item) =>
      item?.CatId !== id ? "" : (removedItem = item?.CName)
    );
    dispatch({ type: "SUBMIT", categories: newCategory });
    toast.warning(`${removedItem} removed from Categories`);
  };
  const handleUpdate = (id) => {
    const obj = {
      CName: "",
      CatImg: "",
      CatStatus: false,
      CatId: "",
    };
    for (let i = 0; i < state?.categories?.length; i++) {
      if (state?.categories[i]?.CatId === id) {
        obj.CName = state?.categories[i]?.CName;
        obj.CatImg = state?.categories[i]?.CatImg;
        obj.CatStatus = state?.categories[i]?.CatStatus;
        obj.CatId = state?.categories[i]?.CatId;
      }
    }
    dispatch({
      type: "EDIT_INPUTS_CHANGE",
      CName: obj.CName,
      CatStatus: obj.CatStatus,
      CatImg: obj.CatImg,
      CatId: obj.CatId,
      isEdit: true,
    });
  };
  const handleReset = () => {
    dispatch({ type: "SET_CLEAR" });
  };
  const handleSearch = (e) => {
    const filterItems = state?.categories?.filter((item) =>
      item?.CName.toLowerCase().includes(e.target.value)
    );
    dispatch({ type: "SEARCH_ITEMS", value: filterItems });
  };
  return (
    <CategoryContext.Provider
      value={{
        state,
        dispatch,
        categoryData,
        setCategoryData,
        handleChange,
        handleStatus,
        handleImg,
        handleSubmit,
        handleDelete,
        handleUpdate,
        handleReset,
        handleSearch,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };
