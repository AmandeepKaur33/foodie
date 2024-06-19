import React, { createContext, useEffect, useReducer } from "react";
import CategoryReducer from "../../Reducers/Admin Reducers/CategoryReducers";

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
// localStorage.removeItem("categoryData")
console.log("chhhh", JSON.parse(localStorage.getItem("categoryData")));

const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CategoryReducer, intialData);
  const handleChange = (e) => {
    dispatch({
      type: "INPUT_CHANGE",
      field: e.target.name,
      value: e.target.value,
    });
    console.log(state);
  };
  const handleStatus = (e) => {
    // console.log(e.target.checked);
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
      // dispatch({type: "INPUT_CHANGE", field: e.target.name, value: URL.createObjectURL(e.target.files[0])})
      dispatch({
        type: "INPUT_CHANGE",
        field: e.target.name,
        value: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
    console.log("jk", URL.createObjectURL(e.target.files[0]));
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
      dispatch({ type: "SET_CLEAR" });
    } else {
      const existingData =
        JSON.parse(localStorage.getItem("categoryData")) || [];
      const payload = [
        ...existingData,
        {
          CatId: Math.floor(Math.random() * 10),
          CatImg: state.CatImg,
          CName: state.CName,
          CatStatus: state?.CatStatus,
        },
      ];
      dispatch({ type: "SUBMIT", categories: payload });
      alert("submit");
      dispatch({ type: "SET_CLEAR" });
      // localStorage.setItem('categoryData',JSON.stringify(state?.categories))
      console.log("submit", state?.categories);
    }
  };
  useEffect(() => {
    localStorage.setItem("categoryData", JSON.stringify(state?.categories));
  }, [state?.categories]);
  const handleDelete = (id) => {
    // localStorage.removeItem("categoryData");
    console.log(state?.categories, "and", id);
    const newCategory = state?.categories?.filter((item) => item?.CatId !== id);
    dispatch({ type: "SUBMIT", categories: newCategory });
    // console.log(e);
    // dispatch({type: "DELETE_ITEM", currId: id})
  };
  const handleUpdate = (id) => {
    const updateItem = state?.categories?.filter((item) => item?.CatId === id);

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
    console.log(obj.CatStatus);
    // const updateItem = state?.categories?.filter((item)=> item?.CatId === id)
    // console.log("upItem",updateItem,updateItem?.map((i)=>i.CName),updateItem.map((element)=> Object.keys(element)));
    // dispatch({type: "INPUT_CHANGE", field: updateItem.map((element)=> Object.keys(element)), value: updateItem.map((element)=> Object.values(element))})
    dispatch({
      type: "EDIT_INPUTS_CHANGE",
      CName: obj.CName,
      CatStatus: obj.CatStatus,
      CatImg: obj.CatImg,
      CatId: obj.CatId,
      isEdit: true,
    });
    console.log("state", state);
  };
  const handleReset = () => {
    dispatch({type: "SET_CLEAR"})
  }
  const handleSearch = (e) => {
    console.log(e.target.value);
    const filterItems = state?.categories?.filter((item)=> item?.CName.toLowerCase().includes(e.target.value))
    console.log(filterItems);
    dispatch({type: "SEARCH_ITEMS", value: filterItems})
    console.log("search", state?.showCategories);
  }
  return (
    <CategoryContext.Provider
      value={{
        state,
        dispatch,
        handleChange,
        handleStatus,
        handleImg,
        handleSubmit,
        handleDelete,
        handleUpdate,
        handleReset,
        handleSearch
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };
