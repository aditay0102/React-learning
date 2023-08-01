import React,{useState} from 'react'; 

function hook() {
  const [count,setCount] = useState(0); 
  return (
    <div>
    <h1>hooks in functional component {count} </h1>
    <button onClick={()=>{setCount(count+1)}} >
      increment
    </button>
    </div>
  )
}

export default hook