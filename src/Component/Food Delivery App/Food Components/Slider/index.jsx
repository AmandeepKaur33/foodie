import React from "react";
import Slides from "./slideStates";
import herobanner from '../../../Images/hero-bg.jpg'

const Slider = () => {
    const slides = [
        {
            title: "Fast Food Restaurant",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta rerum repellat perferendis perspiciatis. Molestiae mollitia voluptate odio expedita amet reiciendis quia explicabo, earum ullam commodi eaque laboriosam officia. Ratione, eligendi!"
        },
        {
            title: "Shop Online",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta rerum repellat perferendis perspiciatis. Molestiae mollitia voluptate odio expedita amet reiciendis quia explicabo, earum ullam commodi eaque laboriosam officia. Ratione, eligendi!"
        },
        {
            title: "Remove your hunger",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta rerum repellat perferendis perspiciatis. Molestiae mollitia voluptate odio expedita amet reiciendis quia explicabo, earum ullam commodi eaque laboriosam officia. Ratione, eligendi!"
        }
    ]
    return(
        <div className="w-full h-[100vh] bg-cover bg-no-repeat  pt-10" style={{backgroundImage: `url(${herobanner})`}}>
            <Slides Slider={slides} />
        </div>
    )
};
export {Slider};