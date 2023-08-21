import React,{useState} from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [Count,setCount] = useState(0);

  const addTask = (task) =>{
    console.log(task)
  }


  return (
    <div className="App">
      <h1>My Task List</h1>
      <Form addTask={addTask} />
    </div>
  );
}

export default App;
