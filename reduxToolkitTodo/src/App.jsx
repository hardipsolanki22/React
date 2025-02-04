import { useState } from 'react'
import Input from './components/Input'
import Todo from './components/Todo'

function App() {

  const todos = useSelector(state => state.todos)


  return (
    <div className="bg-slate-400 text-slate-950 p-4  ">
      {todos.map((todo) => (
        <div>
          <Input/>
          <Todo/>
        </div>
      
      ))}
    </div>
  )
}

export default App
