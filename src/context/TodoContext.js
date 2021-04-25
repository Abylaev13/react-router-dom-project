import React, { useReducer } from 'react';
import axios from 'axios';

export const TodoContext  = React.createContext(); // это сам контекст , при помощи него можем создать глобальное хранилище


const INIT_STATE = {
 todos: []
}

const reducer = (state=INIT_STATE, action) => {
    switch(action) {
        case "GET_TODOS_DATA":     
            return{...state, todos: action.payload}
        default: return state
    }                    
      
}

const TodoContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getTodosData = async () => {
        let { data } = await axios('http://localhost:8000/todos')
        dispatch({
            type: "GET_TODOS_DATA",
            payload: data
        })

    }


    const addTask = (newTask) => {
        axios.post('http://localhost:8000/todos', newTask)     
        getTodosData();
    } 

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            addTask
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;