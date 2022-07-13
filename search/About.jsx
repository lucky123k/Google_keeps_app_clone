import React from "react";
import { NavLink } from "react-router-dom";


const About = () =>{
    return (
        <>
             <NavLink to="/about"> About us</NavLink>
            <br />
            <NavLink to="/contact"> Contact us</NavLink>
            <section>
                <h1>About page</h1>
            </section>
        </>
    )
}

export default About;