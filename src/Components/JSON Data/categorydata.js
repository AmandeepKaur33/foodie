import pizzaImg from '../Images/assets/f6.png';
import nuggetsImg from '../Images/assets/nuggets.png';
import {  v4 as uuid  } from 'uuid'
export const CategoryData = [
    {
        CatId: uuid(),
        CName: "Pizza",
        CatImg: pizzaImg,
        CatStatus: true,
        isEdit: false
    },
    {
        CatId: uuid(),
        CName: "Nuggets",
        CatImg: nuggetsImg,
        CatStatus: true,
        isEdit: false
    }
]