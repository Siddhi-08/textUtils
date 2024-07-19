import React,{useState}from 'react'

export default function TextForm(props) {
  const[text,setText]=useState(' ')
  const handleUpClick=()=>{
    // console.log("upper case clicked" + text)
    let newText=text.toUpperCase()
    setText(newText)
    props.showAlert("your message has been converted to upper case","success")
  }
  const handleLowClick=()=>{
   let newText=text.toLowerCase()
    setText(newText)
    props.showAlert("your message has been converted to lower case","success")
  }
  const handleClearClick=()=>{
    let newText=" "
     setText(newText)
     props.showAlert("your message is cleared","success")
   }
  const handleOnChange=(event)=>{
    setText(event.target.value)
}
  const handleCopy=()=>{
    let text=document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
    document.getSelection().removeAllRanges();
    props.showAlert("your message has been copied","success")
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[]+/)
    setText(newText.join(" "))
    props.showAlert("the extra spaces have been removed from your text","success")
  }
  

  return (
<>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h2 className='mb-4'>{props.heading}</h2>
 <div className="mb-3">
 <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange}id="myBox" rows="8"></textarea>
 </div>
 <button  disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
 <button  disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
 <button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>ClearText</button>
 <button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
 <button  disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Extra Spaces</button>
 
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <h2 >What you have written in textArea</h2>
  <p>{text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
  <p>{0.008 *text.split(" ").filter((element)=>{ return element.length!==0}).length} minutes to read </p>
  <h3>Preview</h3>
  <p>{text.length>0 ? text:'Nothing to preview!'}</p>
</div>
</>
  )
}
