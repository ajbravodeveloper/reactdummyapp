import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked")
    }
    const handleOnChange = ()=>{
        console.log("Handle on change")
    }
    const [text, setText] = useState('Enter your text here');
    // text = "new text " // wrong way to change the state
    // setText("New texts"); // correct way to change the state
    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <label htmlFor="mybox" className="form-label"></label>
                <textarea className="form-control" value = {text} onChange = {handleOnChange}id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick = {handleUpClick}> Convert to Uppercase </button>
        </div>
    )
}
