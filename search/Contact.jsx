import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Contact = () =>{
    const navigate = useNavigate();

    const goToAbout = () => {
        navigate("/About")
    }

    return (
        <>
             <NavLink to="/about"> About us</NavLink>
            <br />
            <NavLink to="/contact"> Contact us</NavLink>
            <section>
                <h1>Contact page</h1>
                <button onClick={() => goToAbout()}>Home</button>
            </section>
        </>
    )
}

export default Contact;