import React from "react";
// import { Navbar } from "../Header";
import { Slider } from "../Slider";
import Category from "../Category";
import About from "../About";
import { Navbar } from "../Header";
import Foodfooter from "../Footer";
// import Foodfooter from "../Footer";


const Landing = () => {
    return(
        <section>
            <Navbar />
            <Slider />
            <Category />
            <About />
            <Foodfooter />
        </section>
    )
}

export {Landing};