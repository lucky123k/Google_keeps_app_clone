import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import "./index.css";
import Search from './Search';


ReactDom.render(
  
   <React.StrictMode>
         <App />
         <Search />
   </React.StrictMode>
       ,document.getElementById("root")
)

//useparams is a react router  hook used for url me kuch likha h to use dynamicaaly get karne ke liye
