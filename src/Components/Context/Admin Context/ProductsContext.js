import React, { createContext, useEffect, useReducer } from "react";
import ProductReducer from "../../Reducers/Admin Reducers/ProductReducer";
import { toast } from "react-toastify";
import { getProducts } from "../../Services/productServices";
import {  v4 as uuid  } from 'uuid'

const ProductContext = createContext();

const initialData = {
  PName: "",
  PId: "",
  PDesc: "",
  Price: "",
  Qty: "",
  PImg: "",
  Cat: "Select Category",
  products: JSON.parse(localStorage.getItem("productsData")) || [],
  showProducts: JSON.parse(localStorage.getItem("productsData")) || [],
  isEdit: false,
};

const ProductProvider = ({ children }) => {
  const [prodState, prodDispatch] = useReducer(ProductReducer, initialData);
  
  const handleProdChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        prodDispatch({
          type: "INPUT_CHANGE",
          field: e.target.name,
          value: reader.result,
        });
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      prodDispatch({
        type: "INPUT_CHANGE",
        field: e.target.name,
        value: e.target.value,
      });
    }
  };

  const handleProdSubmit = (e) => {
    e.preventDefault();
    if (prodState.isEdit) {
      const updatedCategories = prodState.products.map((item) =>
        item.PId === prodState.PId
          ? {
              ...item,
              PName: prodState?.PName,
              PId: prodState?.PId,
              PDesc: prodState?.PDesc,
              Price: prodState?.Price,
              Qty: prodState?.Qty,
              PImg: prodState?.PImg,
              Cat: prodState?.Cat,
            }
          : item
      );
      prodDispatch({ type: "SUBMIT", products: updatedCategories });
      toast(`${prodState?.PName} product updated successfully`);
      prodDispatch({ type: "SET_CLEAR" });
    } else {
      const existingData = JSON.parse(localStorage.getItem("productsData")) || getProducts().then(foods => {return foods}).catch((error)=>console.log(error));
      const payload = [
        ...existingData,
        {
          PId: uuid(),
          PName: prodState?.PName,
          PDesc: prodState?.PDesc,
          Price: prodState?.Price,
          Qty: prodState?.Qty,
          PImg: prodState?.PImg,
          Cat: prodState?.Cat,
        },
      ];
      prodDispatch({ type: "SUBMIT", products: payload });
      toast(`${prodState?.PName} added in your products`);
      prodDispatch({ type: "SET_CLEAR" });
    }
  };
  useEffect(() => {
    localStorage.setItem("productsData", JSON.stringify(prodState?.products));
  }, [prodState?.products]);

  const handleProdDelete = (id) => {
    const newCategory = prodState?.products?.filter((item) => item?.PId !== id);
    prodDispatch({ type: "SUBMIT", products: newCategory });
    toast.warn("item removed ");
  };

  const handleProdUpdate = (id) => {
    const obj = {
      PName: "",
      PImg: "",
      Price: "",
      PDesc: "",
      Qty: "",
      Cat: "",
      PId: "",
    };
    for (let i = 0; i < prodState?.products?.length; i++) {
      if (prodState?.products[i]?.PId === id) {
        obj.PName = prodState?.products[i]?.PName;
        obj.PImg = prodState?.products[i]?.PImg;
        obj.Price = prodState?.products[i]?.Price;
        obj.Qty = prodState?.products[i]?.Qty;
        obj.PId = prodState?.products[i]?.PId;
        obj.Cat = prodState?.products[i]?.Cat;
        obj.PDesc = prodState?.products[i]?.PDesc;
      }
    }
    prodDispatch({
      type: "EDIT_INPUTS_CHANGE",
      PName: obj.PName,
      PDesc: obj.PDesc,
      PImg: obj.PImg,
      PId: obj.PId,
      Price: obj.Price,
      Qty: obj.Qty,
      Cat: obj.Cat,
      isEdit: true,
    });
  };
  const handleQtyUpdate = (id, qty) => {
    const updatedQuantity = prodState.products.map((item) =>
      item.PId === id
        ? {
            ...item,
            Qty: item.Qty - qty <= 0 ? "Out of Stock" : item.Qty - qty,
          }
        : item
    );

    // Dispatch action to update state with the new array of products
    prodDispatch({ type: "SUBMIT", products: updatedQuantity });
  };

  const handleProdSearch = (e) => {
    const filterItems = prodState?.products?.filter((item) =>
      item?.PName.toLowerCase().includes(e.target.value)
    );
    prodDispatch({ type: "SEARCH_ITEMS", value: filterItems });
  };
  return (
    <ProductContext.Provider
      value={{
        prodState,
        prodDispatch,
        handleProdChange,
        handleProdSubmit,
        handleProdDelete,
        handleQtyUpdate,
        handleProdUpdate,
        handleProdSearch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
