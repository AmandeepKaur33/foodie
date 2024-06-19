import React, { createContext, useContext, useEffect, useReducer } from "react";
import ProductReducer from "../../Reducers/Admin Reducers/ProductReducer";
import { CategoryContext } from "./CategoryContext";

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
  isEdit: false
};


const ProductProvider = ({ children }) => {
  const [prodState, prodDispatch] = useReducer(ProductReducer, initialData);
  const {state} = useContext(CategoryContext)
  const handleProdChange = (e) => {
    console.log(e.target.type);
    if (e.target.type === "file") {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        // dispatch({type: "INPUT_CHANGE", field: e.target.name, value: URL.createObjectURL(e.target.files[0])})
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
    console.log(prodState);
  };

  const handleProdSubmit = (e) => {
    // localStorage.removeItem("productsData")
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
      // localStorage.clear("productsData")
      prodDispatch({ type: "SUBMIT", products: updatedCategories });
      prodDispatch({ type: "SET_CLEAR" });
    } else {
      const existingData =
        JSON.parse(localStorage.getItem("productsData")) || [];
      const payload = [
        ...existingData,
        {
          PId: Math.floor(Math.random() * 10),
          PName: prodState?.PName,
              PDesc: prodState?.PDesc,
              Price: prodState?.Price,
              Qty: prodState?.Qty,
              PImg: prodState?.PImg,
              Cat: prodState?.Cat,
        },
      ];
      prodDispatch({ type: "SUBMIT", products: payload });
      alert("submit");
      prodDispatch({ type: "SET_CLEAR" });
      // localStorage.setItem('productsData',JSON.stringify(state?.categories))
      console.log("submit", prodState?.products);
    }
  };
  useEffect(() => {
    localStorage.setItem("productsData", JSON.stringify(prodState?.products));
  }, [prodState?.products]);

const handleProdDelete = (id) => {
  console.log(prodState?.products, "and", id);
  const newCategory = prodState?.products?.filter((item) => item?.PId !== id);
  prodDispatch({ type: "SUBMIT", products: newCategory });
}

const handleProdUpdate = (id) => {
  // const updateItem = state?.categories?.filter((item) => item?.CatId === id);

    const obj = {
      PName: "",
      PImg: "",
      Price: "",
      PDesc: "",
      Qty: "",
      Cat: "",
      PId: ""

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
    console.log("product update",prodState);
    // console.log(obj.CatStatus);
    // const updateItem = state?.categories?.filter((item)=> item?.CatId === id)
    // console.log("upItem",updateItem,updateItem?.map((i)=>i.CName),updateItem.map((element)=> Object.keys(element)));
    // dispatch({type: "INPUT_CHANGE", field: updateItem.map((element)=> Object.keys(element)), value: updateItem.map((element)=> Object.values(element))})
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
}

const handleProdSearch = (e) => {
  const filterItems = prodState?.products?.filter((item)=> item?.PName.toLowerCase().includes(e.target.value))
  console.log(filterItems);
  prodDispatch({type: "SEARCH_ITEMS", value: filterItems})
}


  // pid.forEach(pid => {
  //       // Perform your logic to update quantity for each pid
  //       const quantityToSubtract = /* calculate quantity */5
  //       prodDispatch({ type: 'UPDATE_QUANTITY', pid: pid, quantityToSubtract: quantityToSubtract });
  //     });
  // prodDispatch({state,"prod quntity");
// const updateQty = prodState?.products?.map((item)=>(
//   // pid?.map((el)=>(
//   //   item?.PId === el
//   // ))
//   // console.log(item?.PId, pid.map((elem)=> elem))
//   item?.PId === pid 
//   ?
//   console.log(item?.Qty - qty, "qty")
//   :
//   console.log("item qty updated")
//   ))
// console.log(updateQty,"updateQty")
// console.log("updateQty",updateQty);


  return (
    <ProductContext.Provider
      value={{ prodState, prodDispatch, handleProdChange, handleProdSubmit, handleProdDelete, handleProdUpdate, handleProdSearch }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
