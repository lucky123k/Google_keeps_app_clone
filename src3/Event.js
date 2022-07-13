import React, { useState } from "react"

const Event = () =>{
    const purple = "#8e44ad"
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState("Click Me")

    const bgChange = () =>{
        let newbg = "#33495e";
        setBg(newbg);
        setName("ouch!! 🦊");
    };

    const bgbACK = () =>{
        setBg(purple);
        setName("ayoo!! 👿");
    };

    return(
        <>
            <div style={{backgroundColor: bg}}>
                <button onMouseEnter={bgChange} onMouseLeave={bgbACK}>
                    {name}
                </button>
            </div>
        </>
    )
}

export default Event;