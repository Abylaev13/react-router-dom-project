import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';


const TodoList = () => {
    const { todos } = useContext(TodoContext);
    console.log(todos)
    return (
        <div>
         
        </div>
    );
};

export default TodoList;