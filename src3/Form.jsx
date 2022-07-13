import React, { useState } from 'react';

const Form = () =>{
    const [fullname,setFullName] = useState({
        fname: "",
        lname: "",
    });

    const inputEvent = (event) =>{
        console.log(event.target.value);
        console.log(event.target.name);
        
        const value = event.target.value;
        const name = event.target.name;

        setFullName((prevalue) => {
            // console.log(prevalue);
            if(name === "fname" ){
                return{
                    fname: value,
                    lname: prevalue.lname,
                };
            } else if(name === "lname"){
                return{
                    fname: prevalue.fname,
                    lname: value,
                };
            }
        });
    };
        const onSubmits = (event) => {
            event.preventDefault();
            alert("form submitted");
        };
    

    return(
        <>
          <div className='main_div'>
              <form onSubmit={onSubmits}>
                  <div>
                      <h1>
                          Hello {fullname.fname} {fullname.lname}
                      </h1>
                      <input
                         type="text"
                         placeholder='Enter Your Name'
                         name='fName'
                         onChange={inputEvent}
                         value={fullname.fname} 
                      />
                      <br />
                      <input
                         type="text"
                         placeholder='Enter Last Name'
                         name='lName'
                         onChange={inputEvent}
                         value={fullname.lname} 
                      />
                      <button type='submit'>Submit Me</button>
                </div>
              </form>
          </div>
           
        </>
    );

};

export default Form;