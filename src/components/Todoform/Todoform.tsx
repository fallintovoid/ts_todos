import React, { useState } from 'react'

interface TodoFormProps {
    onAdd(title: string): void;
}

const Todoform: React.FC<TodoFormProps> = ({onAdd}) => {
    const [todoText, setTodoText] = useState<string>('');

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value)
    }

    const keyDownHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onAdd(todoText);
            setTodoText('');
        }
    }

    return (
        <div>
            <input 
                value={todoText} 
                onChange={changeHandler} 
                placeholder="Write todo" 
                id="todo" 
                type="text" 
                className="validate"
                onKeyDown={keyDownHandler}/>
            <label htmlFor="todo" className='active'>Write Todo</label>
        </div>
    )
}

export default Todoform