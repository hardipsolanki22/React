import React from "react";
import {useDispatch} from 'react-redux'
import { addTodo } from "../features/todo/todoSlice";

function Input() {

    const [input , setInput] = React.useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


    return (
        
         <form action="#" onSubmit={addTodoHandler}>
         <div className="flex justify-center items-center font-bold text-xl">
                <p>Learn about redux toolkit</p>
            </div>
            <div className="flex justify-center items-center flex-col md:flex-row">
                <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter todos"
                className="w-64 md:w-96  px-4 py-4 rounded-md text-slate-300 my-4 mx-4"
                 />
                 <button type="submit" className="bg-orange-700 text-white rounded-md mx-2 ">Add Todo</button>
            </div>
         </form>
        
    )
}

export default Input