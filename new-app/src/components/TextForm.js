/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';

const TextForm = (props) => {
  const handleUpClick = () => {
   
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("converted to upper case","success")
  }
  
    const handlelowClick = () => {
     
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("converted to lower case","success")
    
    }
    
   const handleClearClick=()=>{
    let newText=" ";
    setText(newText)
    props.showAlert("clear text","success")
   }
  
   const handleDownClick=()=>{
    
      const blob = new Blob([text], { type: 'text/plain' }); // Create a Blob with textarea content
      const url = URL.createObjectURL(blob); // Generate a URL for the Blob
  
      const link = document.createElement('a'); // Create a download link element
      link.href = url;
      link.download = 'text-file.txt'; // Set the filename for the downloaded file
      link.click(); // Trigger a click event on the link to initiate download
  
      URL.revokeObjectURL(url); // Release the URL object
      props.showAlert("Text downloaded","success")
    
   };
  const handleOnChange = (event) => {
   
    setText(event.target.value)
   
  }

  const [text, setText] = useState('');

  return (
    <>
    

   
      <div className='container'  style={{color: props.mode==='dark'?'white':'black'}}>
        <h2 >{props.heading}</h2>
        <div className="mb-3" >
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows={8} style={{backgroundColor: props.mode ==='dark'?'black':'white',
        color: props.mode==='dark'?'white':'black'}} >
          
          </textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-danger mx-4" onClick={handleDownClick}>Download Text</button>
        {/* <button className="btn btn-dark mx-4" onClick={handleDarkClick}>Dark Mode for text area</button> */}
        
      </div>
     <div className='container my-3'  style={{color: props.mode==='dark'?'white':'black'}} >
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words, and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to preview "}</p>
    
     </div>
    
    </>
  );
};

export default TextForm;
