import { useEffect, useState } from 'react'
import { TodosProvider, useTodo } from './context/todo'
import TodoForm from './component/TodoForm'
import {TodoItems} from './component/Items'

function App() {

    const [todos , setTodos] = useState([])

    const addTodo = (todo) => {
      setTodos((prev) => [...prev, { id:Date.now() ,...todo}])
    }

    const updateTodo = (id , todo) => {
        // const oldTodo = todos.map((prevTodo) => prevTodo.id === id ? setTodos(tods):setTodos(prevTodo) )
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...todo,name:todo.namw, number:todo.number}  : {...prevTodo }) ) )
    }


    const deleteTodo = (id) => {
      setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id ))
    }

    // const deleteTodo = (id) => {
    //     setTodos((prevTodo) => prevTodo.forEach((todo) => {
    //       if (prevTodo.id === id) {
    //         prevTodo.remov()
    //       } else {
    //         setTodos(prevTodo)
    //       }
    //     }))
    // }

    const toggleTodo = (id) => {
      setTodos((prevTodo) => prevTodo.map((
        todo) => todo.id === id  ? {...todo, completed : !todo.completed }: {...todo }
      ))
    }
    

    

    const storage = localStorage.getItem('todos')
    console.log(storage , storage?.type);
    

    useEffect(() =>  {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
    }, [])

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    } , [todos])

  return (
    <TodosProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8 w-100">
                <div className="w-100 max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItems todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodosProvider>
  )

    
}

export default App
