import React from 'react';
import Routes from "./Routes";
import TodoContextProvider from './context/TodoContext';

const App = () => {
  return (
    <div>
      <TodoContextProvider>
          <Routes/>
      </TodoContextProvider>
     
    </div>
  );
};

export default App;