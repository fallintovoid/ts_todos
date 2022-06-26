import { Todo } from "../interfaces";
import { useState } from "react";

export const useTodos = (initial: Todo[]) => {
    const [todos, setTodos] = useState(initial);
    
    return {
        todos,
        todoHandler: (title: string) => {
            const todoObj: Todo = {
                title,
                id: Date.now(),
                completed: false
            }
            setTodos(prev => [todoObj, ...prev])
        },
        toggleHandler: (id: number) => {
            setTodos(prev =>
            prev.map(todo => {
            if (todo.id === id) {
                return {
                ...todo,
                completed: !todo.completed
                }
            }
            return todo
            }))
        },
        removeHandler: (id: number) => {
            const confirmWind = window.confirm('Do you want to delete todo?')
            if (confirmWind === true) {
            setTodos(prev => prev.filter(item => item.id !== id))
            }
        }
    }
}