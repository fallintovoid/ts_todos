import React from 'react'
import { Todo } from '../../interfaces'


import './Todolist.scss'

type TodoListProps = {
    todos: Todo[],
    onToggle(id: number): void,
    onRemove(id: number): void
}

const Todolist: React.FC<TodoListProps> = ({todos, onRemove, onToggle}) => {
    if (todos.length === 0) {
        return <p className='center'> There`s no todos!</p>
    }
    return (
        <ul>
      {todos.map(todo => {
        const classes = todo.completed ? 'todo completed' : 'todo'
        return (
          <li className={classes} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={() => onRemove(todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}

export default Todolist