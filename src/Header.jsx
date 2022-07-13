import React from "react";
import logo from "./images/th.jpg"

const Header =() =>{
    return(
        <>
            <div className="header">
                <img src={logo} />
                <h1>Google Keeps</h1>
            </div>
        </>
    );
};

export default Header;