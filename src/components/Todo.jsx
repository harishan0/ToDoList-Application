import React from 'react'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
export const Todo = ({task, toggleComplete, deleteTodo, editTodo, moveTaskUp, moveTaskDown, index}) => {
    return(
        <div className = "Todo">
            <p onClick = {() => toggleComplete(task.id)}className ={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
            <div>
                {task.completed ? <FontAwesomeIcon className = "check" icon={faCheck} /> : null}
                <FontAwesomeIcon icon = {faPenToSquare} 
                onClick = {() => editTodo(task.id)}/>
                <FontAwesomeIcon icon = {faTrash} 
                onClick = {()=> deleteTodo(task.id)}/>
                <FontAwesomeIcon icon={faArrowTurnUp} 
                onClick = {() => moveTaskUp(index)}/>
                <FontAwesomeIcon icon={faArrowTurnDown} 
                onClick = {() => moveTaskDown(index)}/>
            </div>
        </div>
    )
}