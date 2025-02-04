import Recat, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editeTodo, removeTodo } from '../features/todo/todoSlice'
import { useState } from 'react'

function Todo() {


    const dispatch = useDispatch()

   

    return (
        <div className='flex justify-center items-center mt-2 md:mt-0 flex-col'>
            <p className='font-bold text-2xl text-sky-900'>Todo</p>
            <div className='w-full '> 
                <li className='text-slate-300 w-full flex-wrap
                 rounded-sm mt-4 bg-black px-3 items-center py-3  flex justify-between'
                    key={todo.id}
                >
                    <input 
                type="text" 
                value={todo.text}
                className="w-64 md:w-96  px-4 py-4 rounded-md text-slate-300 my-4 mx-4"
                readOnly={true}
                 />

                   <div className='gap-4 flex'>
                   <button
                        className='text-2xl font-bold bg-orange-700 text-white py-1 px-[20px]'
                        onClick={() => dispatch(removeTodo(todo.id))}>
                    X</button>
                    <button
                        className='text-2xl font-bold bg-orange-700 text-white py-1 px-[20px]'
                        onClick={() => dispatch(editeTodo(todo.id ))}>
                    E</button>
                   </div>
                </li>
            
            </div>
        </div>
    )
}

export default Todo