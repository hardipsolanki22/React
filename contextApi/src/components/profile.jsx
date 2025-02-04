import React,{useContext} from "react";
import { useUser } from "../context/UserContext";
import userContext from "../context/UserContext";
function Profile() {

    // const {username,password} = useUser()
    const {user} = useContext(userContext)

        if( !user)  return <div>Please Login</div>

        return (
              <div>
                <p> Welcome : {user.username}  </p>
                {/* <p>Password : {password}</p> */}
        </div>
    )
    
}

export {Profile}