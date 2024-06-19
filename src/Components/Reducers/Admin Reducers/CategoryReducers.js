const CategoryReducer = (state,action) => {
 switch(action.type) {
    case "SET_CLEAR":
        return{
            ...state,
            CName: "",
            CatImg: null,
            CatStatus: false,
            CatId: "",
            isEdit: false
        }
    case "INPUT_CHANGE":
        return{
            ...state,
            [action.field] : action.value
        }
    
    case "SUBMIT":
        return{
            ...state,
            categories: action.categories,
            showCategories: action.categories
        }
    case "SEARCH_ITEMS": 
    return{
        ...state,
        showCategories: action.value
    }
    case "EDIT_INPUTS_CHANGE":
        return{
            ...state,
            CName: action.CName,
            CatId: action.CatId,
            CatImg: action.CatImg,
            CatStatus: action.CatImg,
            isEdit: action.isEdit
        }
        case "EDIT_ITEM":
            return {
                ...state,
                CatId: action.item.CatId,
                CName: action.item.CName,
                CatImg: action.item.CatImg,
                CatStatus: action.item.CatStatus,
                isEdit: true
            };
    // case "DELETE_ITEM":
    //     return{
    //         ...state,
    //         categories: state?.filter((item)=> item?.CatId !== action?.id)
    //     }
    default:
        return state;
 }
}
export default CategoryReducer;