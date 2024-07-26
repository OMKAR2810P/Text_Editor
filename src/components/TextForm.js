import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=> {
        console.log("Convert to uppercase"+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=> {
        console.log("Convert to Lowercase"+ text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=> {
        console.log("Convert to Lowercase"+ text);
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (event)=> {
        console.log("On change");
        setText(event.target.value)
    }
    const handleCopy = ()=>{
        alert("Copied");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }


    const [text, setText] = useState('Enter Text Here');
  return (
    <>
    <div className={`container text-${props.mode==="light"?"dark":"light"}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value ={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className={`container mb-10 text-${props.mode==="light"?"dark":"light"}`}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
   </>
  )
}
