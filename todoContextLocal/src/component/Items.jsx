import React, { useState } from "react";
import { useTodo } from "../context/todo";

export function TodoItems({todo}) {

    
    const { updateTodo, deleteTodo, toggleTodo } = useTodo()
    console.log('todo',todo);
    
    const [isTododEditable , setIsTodoEditable] = useState(false)
    const [userName , setUserName] = useState(todo.name)
    const [userNumber , setUserNumber] = useState(todo.number)

    const editTodo = () => {
        updateTodo(todo.id , {...todo , name: userName , number : userNumber})
        setIsTodoEditable(false)
    }
    const toggleCompleted = () => {
        console.log('todoToggle id :' , todo.id);
        
        toggleTodo(todo.id)
    }

    return (
            <div className={`w-full flex justify-center p-4 items-center
              ${todo?.completed ? 'bg-[#c6e9a7]': 'bg-[#ccbed7]'}
               `}> 
                <input
                 type="checkbox" 
                 className=""
                 value={todo.completed}
                 onChange={toggleCompleted}
                
                />
                <div className="">
                <input
                 type="text"
                 className={` py-1 px-7 rounded-md mx-4  border-none 
                    ${isTododEditable ? 'border-black/10 px-2 ' : 'border-transparent'}
                    ${todo.completed ? "line-through" : ""}`}
                 value={userName}
                 onChange={(e) => setUserName(e.target.value)}
                 readOnly={!isTododEditable}

                />
                 <input
                 type="number"
                 key={todo.id}
                 className={` py-1 my-2 px-7 rounded-md mx-4  border-none 
                    ${isTododEditable ? 'border-black/10 px-2 ' : 'border-transparent'}
                    ${todo.completed ? "line-through" : ""}`}
                 value={userNumber}
                 onChange={(e) => setUserNumber(e.target.value)}
                 readOnly={!isTododEditable}

                />
                </div>
                <button className={`mx-2 md:mx-4 px-2 py-1 md:px-4 md:py-2 text-white *
                
                ` }
                onClick={() => {
                    if(todo.completed) return

                    if(isTododEditable) {
                        editTodo()
                    } else setIsTodoEditable((prev) => !prev)

                }}
                disabled={todo.completed}
                >   {isTododEditable ? ' ✏️': '📁'} </button>
                <button className=" px-2 py-1 md:px-4 md:py-2 border-none text-white"
                onClick={() => deleteTodo(todo.id)}
                >   ❌</button>
              
            </div>
    )
}