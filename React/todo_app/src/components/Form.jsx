import React,{useState} from 'react'

function Form({addTask}) {
    const[task,setTask] = useState("");
     

    const handleFormSubmit = (e) =>{
    e.preventDefault();
    addTask({
        name: task,
        checked: false,
        id: Date.now()

    });
    setTask("")
   
    }
 
  return (
       
    <form className="todo"
        onSubmit={handleFormSubmit}
    >
        <div classname="wrapper">
            <input 
            type='text' 
            id = "task"
            clasname="input"
            value={task}
            onInput = {(e) => setTask(e.target.value)}
            required
            autoFocus
            maxLength={50}
            placeholder='Enter task'
            />
            
            <button className='btn' aria-label='Add Task' type='submit'  >+</button>

        </div>

    </form>
  )
}

export default Form