const ProductReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.field]: action.value,
      };
      // case 'UPDATE_QUANTITY':
      // return {
      //   ...state,
      //   products: state.products.map(product =>
      //     product.PId === action.pid
      //       ? console.log(product?.Qty - action.quantityToSubtract,"diff")
      //       : console.log("proucr")
      //   )
      // }
      case "EDIT_INPUTS_CHANGE":
        return{
            ...state,
            PName: action.PName,
            PId: action.PId,
            PImg: action.PImg,
            Price: action.Price,
            Qty: action.Qty,
            PDesc: action.PDesc,
            Cat: action.Cat,
            isEdit: action.isEdit
        }
        case "SEARCH_ITEMS": 
        return{
            ...state,
            showProducts: action.value
        }
    case "SET_CLEAR":
      return {
        ...state,
        isEdit: false,
        PName: "",
        PId: "",
        PDesc: "",
        Price: "",
        Qty: "",
        PImg: null,
        Cat: "Select Category",
      };
      case "SUBMIT":
        return{
            ...state,
            products: action.products,
            showProducts: action.products
        }
      case "check":
        console.log("check dispatch",action.products)
        break;
    default:
      return state;
  }
};
export default ProductReducer;
