import React from "react";
import { useParams } from "react-router-dom";

function User() {
        const {userId} = useParams()
    return (
            <div className="w-full h-screen flex justify-center  bg-white">
                <p className="text-lg font-bold text-white p-4 bg-slate-600 rounded-md
                  h-12 my-12 text-center w-auto
                ">User : {userId} </p>
            </div>
    )
}

export default User