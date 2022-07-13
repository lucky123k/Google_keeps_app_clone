import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from "../search/About";
import Contact from "./Contact";
import Menu from "./Menu";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>{<Menu />}</div>} />
                <Route path="contact" element={<div>{<Contact />}</div>} />
                <Route path="about" element={<div>{<About />}</div>} />
                <Route path="*" element={<h1>error</h1>} />
            </Routes>
        </BrowserRouter>
    );
}



export default App;