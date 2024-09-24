import React from "react";
import { Slider } from "../Slider";
import Category from "../Category";
import About from "../About";
import Review from "../Review";

const Landing = () => {
    return(
        <section className="w-full ">
            <Slider />
            <Category />
            <About />
            <Review/>
        </section>
    )
}

export {Landing};