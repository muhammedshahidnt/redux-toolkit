import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addTodo, tododelete, update, strike } from '../todoSlice'



const Todo = () => {
    const [value, setvalue] = useState('')
    const [edititem, setedititem] = useState()

    const dispatch = useDispatch()
    const todo = useSelector((state) => state.todos)

    const add = (value) => {
        dispatch(addTodo(value));
        setvalue('')
    }
    const deletetodo = (id) => {
        dispatch(tododelete(id));
    }
    const updatetodo = () => {
        dispatch(update({ updatedName: value, oldname: edititem }));
        setvalue('')
    }
    const edit = (todo) => {
        setedititem(todo)
        setvalue(todo.name)

    }


    return (
        <>
            <div>
                <input type="text" value={value} onChange={(e) => setvalue(e.target.value)} />
                <button onClick={() => add(value)}>add</button>
                <button onClick={() => updatetodo(value)}>update</button>
            </div>
            <div>
                {todo.map((todo, index) => (
                    <ul>
                        <input type='checkbox' checked={todo.done} onClick={() => dispatch(strike(index))} />
                        <label style={{ textDecoration: todo.done ? 'line-through' : "none" }} key={index} >{todo.name}</label>
                        <button onClick={() => deletetodo(todo.id)}>delete</button>
                        <button onClick={() => edit(todo)}>edit</button>
                    </ul>
                ))}
            </div>
        </>
    )
}

export default Todo

