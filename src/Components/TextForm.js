import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newtext= text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to uppercase","danger");
    }
    const handleloClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newtext= text.toLowerCase();
        setText(newtext)
        props.showAlert("converted to lowercase","primary");
    }
    const handleloClear = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newtext= " ";
        setText(newtext)
        props.showAlert("converted to lowercase","primary");
    }
    
    const handlepop = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newtext= text.split("");
        setText(newtext.pop())
    }
    
    const handlecopy = ()=>{
        // console.log("Uppercase was clicked" + text);
        let text= document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleextraspaces = ()=>{
        // here regex is used in split;
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handlesubstring = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newtext= text.substring(4,16);
        setText(newtext)
    }
    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    //   if we want no comment on text area so just erase 'enter the text here'
    const [text, setText]= useState('');
    // text = "new text"
    // setText("new text");
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            
            <div className="mb-3">
            <textarea className="form-control" value={text}  style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to upper</button>
            <button className='btn btn-primary mx-2' onClick={handleloClick}>Convert to lower</button>
            <button className='btn btn-primary mx-2' onClick={handlesubstring}>substring</button>
            <button className='btn btn-primary mx-2' onClick={handlecopy}>copy text</button>
            <button className='btn btn-primary mx-2' onClick={handleextraspaces}>extra spaces</button>
            <button className='btn btn-primary mx-2' onClick={handlepop}>pop</button>
            <button className='btn btn-primary mx-2' onClick={handleloClear}>clear</button>
            
            
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>your word summary</h1>
            {/* counting words and charaters by spliting and lenght func */}
            <p>{text.split(" ").length}words and {text.length}characters</p>
            <p>{0.0008 * text.split(" ").length}Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text above to preview"}</p>

        </div>
        </>
    )
}

