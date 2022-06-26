import React from 'react'
import { useTodos } from '../hooks/useTodos';
import Todolist from '../components/Todolist/Todolist';
import Todoform from '../components/Todoform/Todoform';

const TodosPage: React.FC = () => {
    const {todos, todoHandler, toggleHandler, removeHandler} = useTodos([])

    return (
        <>
            <Todoform onAdd={todoHandler}/>
            <Todolist 
                todos={todos}
                onToggle={toggleHandler}
                onRemove={removeHandler}/>
        </>
    )
}

export default TodosPage