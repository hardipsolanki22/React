import {createContext , useContext} from 'react'

export const todoContext = createContext({
    todos : [
        {
            id: 1,
            name: 'name ',
            number : '91+ ',
            completed: false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id , todo) => {},
    deleteTodo : (id) => {},
    toggleTodo : (id) => {}

})

export const TodosProvider = todoContext.Provider

export const  useTodo = () => {
    return useContext(todoContext)
}