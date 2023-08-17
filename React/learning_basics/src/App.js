
import './App.css';
import React,{useState,useMemo} from 'react';

// using useMemo hook 
// which is based on pure component

// useMemo is used to save unwanted calls 

function App(){
    const[count,setCount] = useState(0);

    const multiCountMemo = useMemo( function updateCount(){
        console.log("update count ")
        return count*5
    },[count]) // this is the condition if count is updated then  this useMultiCountMemo  function is called ; 

    return(
      <div className='App'>
        <h1>count {count}</h1>
        <br></br>
        <h2>{multiCountMemo}</h2>

        <button onClick={()=> setCount(count+1)}>updaste Count</button>
      </div>

    );
}

export default App;