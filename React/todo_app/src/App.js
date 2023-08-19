import logo from './logo.svg';
import './App.css';
import Todoinput from './components/Todoinput';
import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [listTodo,setListTodo] = useState([]);

  let addList = (inputText) =>{
    if(inputText !== ""){
      setListTodo([...listTodo,inputText]);
    }
  }

  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1);
    setListTodo([...newListTodo])
  }

  return (
    <div className="App">
      <div  className="main-container">
        <div className='center-container'>
          <Todoinput addList={addList}/>

          <hr/>
          {listTodo.map((listItem,i)=>{
            return(
              <TodoList key={i}  index={i} item={listItem} deleteItem={deleteListItem} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
