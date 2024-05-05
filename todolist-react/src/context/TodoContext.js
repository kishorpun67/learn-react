import React,{createContext, useContext} from 'react';

export  const TodoContex = createContext({
    todos : [
        {
            id:Date.now(),
            todo:"javascript",
            completed:false,
        }
    ],
    addTodo : (todo) =>{},
    updateTodo:(id, todo) =>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
})


export const TodoProvider = TodoContex.Provider

export const useTodo = () => {
    return useContext(TodoContex)
}