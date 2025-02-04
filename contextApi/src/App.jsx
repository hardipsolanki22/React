import { useState } from "react"
import { Login} from "./components/login"
import { Profile } from "./components/profile"
import { UserProvider, useUser } from "./context/UserContext"
import { UserContextProvider } from "./context/userContextProvider"

function App() {
  // const [username , setUser] = useState('') 
  // const [password ,setPassword] = useState('')
     

  return (
    // <UserProvider value={{username , setUser , password , setPassword}}>
    <UserContextProvider>
      <h1>Context Api By Hitesh Sir </h1>
      <Login/>
      <Profile />
    </UserContextProvider>
      // </UserProvider>
  )
}

export default App
