import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    // fetch data usinh loader
    const data = useLoaderData()

    // fetch data useing promise 

    // const [data, setData ] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/HardipSolanki')
    //         .then(Response => Response.json())
    //         .then((data) => setData(data))
    // }, [data]
    // )


    return (
        <div className="w-full md:h-screen h-auto bg-white p-12 flex flex-col justify-center items-center ">
            <p className="text-black text-center font-bold text-2xl mb-4">Github Details</p>
            <div>
                <div className="flex flex-col justify-center items-center
                 bg-slate-200 md:max-w-[480px] p-4 rounded-md ">
                    <img src={data.avatar_url} alt="" className="rounded-md md:w-[340px] 
                md:h-[250px] w-[280px] h-[220px]"/>
                    <p className="bg-slate-700 mt-4 px-4 py-2 rounded-md text-center
                     text-white text-xl font-bold">Github follwers : {data.followers} </p>
                </div>
            </div>
        </div>
    )
}

export default Github