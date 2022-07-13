import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () =>{
    return (
        <>
            <NavLink to="/about"> About us</NavLink>
            <br />
            <NavLink to="/contact"> Contact us</NavLink>
        </>
    )
}

export default Menu;