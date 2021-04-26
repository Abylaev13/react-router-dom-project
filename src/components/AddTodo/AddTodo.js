import React, { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';

const AddTodo = () => {

    const [inpValue, setInpValue] = useState('');
    const {addTask} = useContext(TodoContext)



    
    function handleClick(){
        let newObj = {
            task: inpValue,
            status: false
        }
        addTask(newObj)  
             
    }
    

    return (
        <div>
        
            <input onChange={(e) => setInpValue(e.target.value)} type="text"/>
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default AddTodo;