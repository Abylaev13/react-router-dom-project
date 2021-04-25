import React, { useReducer } from 'react';

export const TodoContext  = React.createContext(); // это сам контекст , при помощи него можем создать глобальное хранилище


const INIT_STATE = {
 todos: []
}

const reducer = (state=INIT_STATE, action) => {
    switch(action)  {
        
    }                    // проверяет каждый action который он получает
      
}

const TodoContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    return (
        <TodoContext.Provider>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;