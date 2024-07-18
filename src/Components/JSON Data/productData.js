import nuggetsImg from '../Images/assets/nuggets.png';
import pepperoniPizza from '../Images/assets/Pepperoni Pizza.png';
import cheese_onion_burger from '../Images/assets/Cheese burger with onion.png';
import american_chicken_nuggets from '../Images/assets/American_chicken_nuggets-removebg-preview (1).png';
import bacon_cheese_burger from '../Images/assets/Bacon_cheese_burger-removebg-preview.png';
import green_leafy_pizza from '../Images/assets/f9.png';
import grilled_sandwich from '../Images/assets/grilled_sandwich.png';
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
    },
    {
        PName: "Cheese Burger With Onion",
        PId: uuid(),
        PDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil in iure mollitia repellat",
        Price: "169",
        Qty: "20",
        PImg: cheese_onion_burger,
        Cat: "Burger",
        isEdit: false
    },
    {
        PName: "American Chicken Nuggets",
        PId: uuid(),
        PDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil in iure mollitia repellat",
        Price: "363",
        Qty: "20",
        PImg: american_chicken_nuggets,
        Cat: "Nuggets",
        isEdit: false
    },
    {
        PName: "Bacon Cheese Buger",
        PId: uuid(),
        PDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil in iure mollitia repellat",
        Price: "135",
        Qty: "20",
        PImg: bacon_cheese_burger,
        Cat: "Burger",
        isEdit: false
    },
    {
        PName: "Green Leafy Cheese Pizza",
        PId: uuid(),
        PDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil in iure mollitia repellat",
        Price: "239",
        Qty: "20",
        PImg: green_leafy_pizza,
        Cat: "Pizza",
        isEdit: false
    },
    {
        PName: "Grilled Sandwich with Vegetables and Mozzarella",
        PId: uuid(),
        PDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil in iure mollitia repellat",
        Price: "119",
        Qty: "20",
        PImg: grilled_sandwich,
        Cat: "Pizza",
        isEdit: false
    }
]