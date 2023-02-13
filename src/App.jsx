import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        setAddItem((prevData) => {
            return [...prevData, note];
        });
    };

    const onDelete = (id) => {
        setAddItem((olddata) => {
            return olddata.filter((currdata, indx) => {
                return indx !== id;
            })
        })
    }

    return (
        <>
            <Header />
            <CreateNote passNote={addNote} />
            <div className="yui">
            {addItem.map((val, index) => {
                return (
                    <div className="asdf">
                        <Note
                            key={index}
                            id={index}
                            title={val.title}
                            content={val.content}
                            deleteItem={onDelete}
                        />
                    </div>

                );
            })}
            </div>
            


        </>
    );
};

export default App;


