import React from "react";
import { Slider } from "../Slider";
import Category from "../Category";
import About from "../About";
import Review from "../Review";
import GetApp from "../App";

const Landing = () => {
    return(
        <section className="w-[100vw] overflow-x-hidden">
            <Slider />
            <Category />
            <About />
            <Review/>
            <GetApp/>
        </section>
    )
}

export {Landing};