import React,{useEffect,useState} from 'react'

function HokUseState() {
  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.warn(count)
  },[count == 5 ])
 
  return (
    <div>
        <p>
          <h1> UseEffect</h1>
          1st class components 
          then functional components are more eazy
          <br></br>
          = we cant use life cycle methods with functional components and state to resolve that issue hooks were created
          
          What is UseEffect Hooks :- 
          <br></br>
          :-  Replacement for<br></br>
          1 componentWillUnmouont<br></br>
          2 componentDidMount

          <br></br>
          <br></br>
          <button onClick={()=>{setCount(count+1)}}>click increase</button>
          <h1> increase it man {count}</h1>
        </p>
    </div>
  )
}

export default HokUseState