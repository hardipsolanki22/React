import React, { useContext, useState  } from "react";
import userContext, { useUser } from "../context/UserContext";

function Login() {

    const [username , setUserName] = useState('')
    const [password , setUserPassword] = useState('')

   //  const {setUser, setPassword } = useUser()

   const {setUser} = useContext(userContext)

    const handleSubmit = (e) => {
       // e.preventDefualt()
       setUser({username}) 
      //  setPassword(password)
    }
    return (
        <div>
            <h1> Login </h1>
         <div>
          <label htmlFor="1">username :</label>
          <input 
          type="text" 
        //   value={username}
          // onChange={(e) => setUserName(e.target.value)}
          placeholder="username" id="1" />
          {" "}
          <label htmlFor="2">password:</label>
          <input 
          type="password" 
          placeholder="password" 
        //   value={password}
          onChange={(e) => setUserPassword(e.target.value)}
          id="2" />
          <input type="button" value="submit" onClick={handleSubmit} />
       </div>
    </div>
    )
}

export {Login}