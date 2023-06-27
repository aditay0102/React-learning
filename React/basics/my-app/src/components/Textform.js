import React, {useState} from 'react'
 

export default function Textform(props) {
   
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleLoClick = ()=>{
        console.log("Uppercase was clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const change = ()=>{
        let newtext = " ";
        setText(newtext);
    }
    

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here ');
        
  return (
    <div>
        <div className="container">
            <h1 style={{color: props.mode === 'light'?'black':'white'}} 
>{props.heading}</h1>
            <div className="form-group" style={{color: props.mode === 'light'?'black':'white'}} >
            <label htmlfor="exampleFormControlTextarea1" style={{color: props.mode === 'light'?'black':'white' , color: props.mode === 'light'?'black': 'white'}} >Example textarea</label>
                <textarea className="form-control" value={text} 
                style={{backgroundColor: props.mode === 'dark'?'darkgrey':'white'}} 
                onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8">{props.text}</textarea>
                <br></br>
            <button className="btn btn-primary mx-2" onClick={handleUpClick  }> convert to uppercase </button>
            <button className="btn btn-primary mx-2 " onClick={handleLoClick  }> convert to uppercase </button>
            <button className="btn btn-primary mx-2 " onClick={change }> clear </button>

            
            </div> 
        </div>
        <div className="container my-3">
            <h1 style={{color: props.mode === 'light'?'black':'white'}} >your text summery</h1>
            <p style={{color: props.mode === 'light'?'black':'white'}}>{text.split(" ").length} words and {text.length} characters </p>
            <p style={{color: props.mode === 'light'?'black':'white'}}>{0.008 * text.split(" ").length}</p>
            <h2 style={{color: props.mode === 'light'?'black':'white'}}>Preview</h2>     
            <p style={{color: props.mode === 'light'?'black':'white'}}>{text}</p>
        </div>  
    </div>
  )
}

