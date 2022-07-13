import React, { useState } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddIcon from "@material-ui/icons/Add"
import Button from "@material-ui/core//Button";
import Tooltip from '@material-ui/core/Tooltip'
import { lightBlue } from "@material-ui/core/colors";

const Bootstrap = () =>{
    return(
        <>
        <Tooltip title= "Add">
             <Button className="btn btn-success"><AddIcon /></Button>
        </Tooltip>  
        </>
    );
};


export default Bootstrap;







