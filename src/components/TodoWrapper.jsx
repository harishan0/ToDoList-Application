import React, { useState }from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, 
            completed: false, isEditing: false}])
        console.log(todos);
    }
    const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? 
            {...todo, task, isEditing: !todo.isEditing} : todo))
    }
    const moveTaskUp = (index) => {
        if(index > 0){
            let updatedTasks = [...todos];
            const before = updatedTasks[index-1];
            const current = updatedTasks[index];
            updatedTasks[index-1] = current;
            updatedTasks[index] = before;
            setTodos(updatedTasks);
         }   
    }
    const moveTaskDown = (index) => {
        if(index < todos.length -1){
            const updatedTasks = [...todos];
            const current = updatedTasks[index];
            const after = updatedTasks[index + 1];
            updatedTasks[index+1] = current;
            updatedTasks[index] = after;
            setTodos(updatedTasks);
         } 
    }
    return(
        <div className = "TodoWrapper">
            <h1>Get Things Done!</h1>
            <TodoForm addTodo = {addTodo} />
            {
                todos.map((todo, index) => (
                    todo.isEditing ? (
                        <EditTodoForm editTodo={editTask} task={todo}/>
                    ) : 
                    (
                        <Todo 
                        key={todo.id} 
                        task = {todo} 
                        toggleComplete = {toggleComplete}
                        deleteTodo = {deleteTodo}
                        editTodo = {editTodo}
                        index = {index}
                        moveTaskUp = {moveTaskUp}
                        moveTaskDown = {moveTaskDown}/>
                        
                    )
                    
                ))
            }
        </div>
    )
}