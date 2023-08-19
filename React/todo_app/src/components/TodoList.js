import React from 'react'
import {MdDelete} from 'react-icons/md';

function TodoList(props) {
  return (
    <li className='list-item'>
        {props.item}
    <span className='icons' onClick={e=>{
        props.deleteItem(props.index)
    }}><MdDelete/></span>
    
    </li>
  )
}

export default TodoList