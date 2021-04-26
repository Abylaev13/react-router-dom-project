import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../../context/TodoContext';


const TodoList = () => {
    const { todos, getTodosData } = useContext(TodoContext);
    useEffect(() =>{
        getTodosData()  
       
    },[])
    

  
    return (
        <ul>
         {todos.map(item => (
             <li key={item.id}><input type="checkbox"/>{item.task}</li>
         ))}
        </ul>
    );
};

export default TodoList;