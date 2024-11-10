import React from 'react'
import Item from './Item'

function Todos(props) {
  return (
    <div className='container'>
      <h3 className=' my-3'>Todo list </h3>

      {props.todos.length===0? "No todos to dispaly": 
     props.todos.map((todo)=>{
      return (
        <>
       <Item todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
    </>
      )
     })
     }
    
    </div>
  )
}

export default Todos



