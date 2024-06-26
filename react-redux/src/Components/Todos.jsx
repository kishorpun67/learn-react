import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
function Todos() {
 
    const todos = useSelector(store=>store.todos)
  return (
    <>
        <div>Todos</div>
        <ul className="list-none">
            {todos.map((todo)=>(
                <div key={todo.id}>
                    <TodoItem todo={todo}/>
                </div>
            ))}
        </ul>
    </>  
    )
}

export default Todos