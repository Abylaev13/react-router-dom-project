import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import Home from './components/Home/Home'; 


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/add" component={AddTodo}/>
                <Route exact path="/list" component={TodoList}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;