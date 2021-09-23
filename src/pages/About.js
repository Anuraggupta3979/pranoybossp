import React from 'react'
import AboutUs from "../components/AboutUs/AboutUs";
import AboutStory from "../components/AboutUs/AboutStory";
import AboutCraft from "../components/AboutUs/AboutCraft";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <div>
            <Navbar />
            <AboutUs/>
            <AboutStory/>
            <AboutCraft/>
        </div>
    )
}

export default About
