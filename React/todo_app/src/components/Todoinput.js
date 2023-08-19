import React,{useState} from 'react'


function Todoinput(props) {
    const[inputText,setInputtext] = useState("");
    



  return (
    <div className='input-container'>
        <input type='text' className='input-box-todo' value={inputText} placeholder='enter you task' onChange={e => {
            setInputtext(e.target.value)   
        }} />
        <button className='add-btn' onClick={()=>{
            props.addList(inputText)
            setInputtext(" ")
        }} >+</button>

    </div>
  )
}

export default Todoinput