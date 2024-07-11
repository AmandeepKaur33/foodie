import nuggetsImg from '../Images/assets/nuggets.png';
import pepperoniPizza from '../Images/assets/Pepperoni Pizza.png';
import {  v4 as uuid  } from 'uuid'
export const ProductData =  [
    {
        PName: "Chicken Nuggets",
        PId: uuid(),
        PDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil in iure mollitia repellat",
        Price: "178",
        Qty: "20",
        PImg: nuggetsImg,
        Cat: "Nuggets",
        isEdit: false
    },
    {
        PName: "Pepperoni Pizza",
        PId: uuid(),
        PDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil in iure mollitia repellat",
        Price: "378",
        Qty: "20",
        PImg: pepperoniPizza,
        Cat: "Pizza",
        isEdit: false
    }
]