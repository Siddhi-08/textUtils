import React, { useState } from 'react' 

export default function About(props) {
  let style={
     color:props.mode==='dark'?'white':'rgb(36,74,104)',
     backgroundColor:props.mode==='dark'?'rgb(36,74,104)':'white',
    
}

  
    return (
    <div className='container'  >
      <h1 className='my-3'style={{ color:props.mode==='dark'?'white':'rgb(36,74,104)'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={style}>
      TextUtils is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header ">
      <button className="accordion-button collapsed"  style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={style}>
      Textutils is a free character counter tool that provides instant character count & word count statics for a given text. Textutils reports the number of words and characters
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={style}>
    TextUtils is simply a set of utility functions to do operations on String objects. I usually have gone through many projects & I have seen many times in the code there is no use of TextUtils
      </div>
    </div>
  </div>
</div>
{/* <div className="container" onClick={toggleStyle}>
  <button  type='button' className='btn btn-primary my-3 '>{btnText}</button>
</div> */}
</div>
  )
}

