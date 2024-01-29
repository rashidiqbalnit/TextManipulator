//State and Handling Event
//we learn 1)how to handle event
//2)how to set event

import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick=()=>{
        //console.log("upper case was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","succes");
    }
    const handleLoClick=()=>{
        //console.log("upper case was clicked " + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","succes");
    }
    const handleClearClick=()=>{
      //console.log("upper case was clicked " + text)
      let newText = '';
      setText(newText)
      props.showAlert("Text Cleared!","succes");
  }

    const handleOnChange=(event)=>{
        //console.log("on change");
        setText(event.target.value);
    }

    const handleCopy=()=>{
         let text = document.getElementById("myBox");
         text.select();
         navigator.clipboard.writeText(text.value);
         props.showAlert("Copied to Clipboard!","succes");
    } 

    const handleExtraSpace=()=>{
         let newText = text.split(/[ ]+/);
         setText(newText.join(" "))
         props.showAlert("Removed Extra Space!","succes");
    }


    const [text, setText] = useState(''); 
    //useState is a hook which help us to build state variable
    //text is a value while setText is a function
    // Enter text here2 is the value of text
  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'#042743'}}>
       <h3>{props.heading}</h3>    
       <div className="mb-3">                                                     {/*here below style we write double bracket one is for javascript and another one is for javascript object*/}
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
       <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
       <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
       <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button> 
    </div>
    
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summery</h2>
        <p>{text.split(" ").length} word and {text.length} charactor</p>
        <p>{ 0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter somethng in the textbox above to preview it here"}</p>
       
    </div>
    </>
  )
}

// state -> value={text}
 //value={text} ke sath onChange={handleOnChange} laga jaruri hai nhi to error dega