import React, { useState } from "react";
import { useTodo } from "../context/todo";

function TodoForm() {
    
    const [number, setNumber] = useState('')
    const[name , setName] = useState('')
    const {addTodo } = useTodo()

    const todoHandler = (e) => {
        e.preventDefault()
       if( ! (name && number )) return

       addTodo({ name,number ,copleted: false})
       setName('')
       setNumber('')
    }

    return (
        <form action="#" onSubmit={todoHandler}>
        <div className="flex justify-center items-center font-bold text-xl">
           </div>
           <div className="flex justify-center items-center flex-col md:flex-row">
               <input 
               type="text" 
               value={name}
               onChange={(e) => setName(e.target.value)}
               placeholder=" Name"
               className="w-64 md:w-96  px-4 py-4 rounded-md text-slate-300 my-2 mx-4"
                />
                 <input 
               type="number" 
               value={number}
               onChange={(e) => setNumber(e.target.value)}
               placeholder="+91"
               className="w-64 md:w-96  px-4 py-4 rounded-md text-slate-300 my-4 mx-4"
                />
                <button  type="submit" className="bg-orange-700 text-white rounded-md mx-2 ">Add </button>
           </div>
        </form>
    )
}

export default TodoForm