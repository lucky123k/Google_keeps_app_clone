import React, { useState } from "react";

const App = () =>{
    const state = useState();
    let newTime = new Date().toLocaleTimeString()

    const [ctime, setCtime] = useState(newTime);

    const updateTime = () =>{
        let newCTime = new Date().toLocaleTimeString();
        setCtime(newCTime);
    };

    setInterval(updateTime,1000);

  return(
      <>
          <h1>{ctime}</h1>
          {/* <button onClick={updateTime} > Click Me</button> */}
      </>
  );


};

export default App;