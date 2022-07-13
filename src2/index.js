import React from "react";
import ReactDOM from "react-dom";
import Card from './Cards';
import "./index.css";
import Sdata from "./Sdata";

function ncard(val){
    return(
        <Card
            imgsrc={val.imgscr}
            title={val.title}
            sname={val.sname}
            link={val.links}
        />
    )
}

ReactDOM.render(
    <>
        <h1 className="heading_style">Personal photos gallary 2022</h1>
        {Sdata.map(ncard)}
    </>,
    document.getElementById("root")
);
<h1>::s== </h1>