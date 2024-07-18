import pizzaImg from '../Images/assets/f6.png';
import nuggetsImg from '../Images/assets/nuggets.png';
import sandwichImg from '../Images/sandwich.png';
import TacosImg from '../Images/tacos.png';
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
    },
    {
        CatId: uuid(),
        CName: "Tacos",
        CatImg: TacosImg,
        CatStatus: true,
        isEdit: false
    },
    {
        CatId: uuid(),
        CName: "Sandwich",
        CatImg: sandwichImg,
        CatStatus: true,
        isEdit: false
    }
]