import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [ {id: 1 , text : "Hello"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state , action) => {
            console.log(`action ${action.payload.id } and ${action.payload.text}` );

            const todo = {
                id: nanoid() , 
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state , action) => {
            state.todos = state.todos.filter((todo) => todo
            .id !== action.payload 
        )
        },
        editeTodo : (state , action) => {
            console.log(`action ${action.payload.id } and ${action.payload.text}` );
            
            state.todos.map((todo) => (    
                console.log('todo text' , todo.text)    ,
                todo.id === action.payload.id ? todo.text = action.payload.text : todo.text,
                console.log('todo text' , todo.text)    

            ))
        }
    }
})

    

export const {addTodo , removeTodo, editeTodo} = todoSlice.actions

export default todoSlice.reducer