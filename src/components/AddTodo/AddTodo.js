import React, { useState } from 'react';

const AddTodo = () => {

    const [inpValue, setInpValue] = useState('');
    
    function handleClick(){
        let newObj = {
            task: inpValue
        }
        
    }
    

    return (
        <div>
        
            <input onChange={(e) => setInpValue(e.target.value)} type="text"/>
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default AddTodo;