import React from "react";

 function Contact() {
    return (
        <div className="w-full md:h-screen h-auto flex  md:justify-evenly items-center flex-col 
        sm:flex-row bg-white text-black  px-10 py-12
        ">
            <div className="px-4 bg-slate-200 py-4 md:min-w-[400px] sm:min-w-[350px]
             rounded-md shrink shadow-2xl"
             >
                <div>
                    <p className="font-bold text-2xl md:text-4xl mb-2">Get in touch</p>
                    <p className="text-xl">Fill in the form to start a conversion</p>
                </div>
                <div>
                    <p className="mb-2">Acme inc, Street,</p>
                    <p className="mb-2">Gujrat , 362560</p>
                    <p className="mb-2">+91 12345467890</p>
                    <p>hardipsolanki2224@gmail.com</p>
                </div>
            </div>
            <form action="#" className=" flex flex-col mt-9 sm:ml-6">
                <input type="text" placeholder="Full Name" className=" border-2 border-slate-400
                 rounded-md md:w-[300px] w-[250px] bg-slate-200 py-2 md:py-3 px-2 mb-3"
                 required={true}
                 />
                <input type="text" placeholder="Email" className="  border-2 border-slate-400
                 rounded-md w-[250px] md:w-[300px] bg-slate-200 py-2 md:py-3 px-2 mb-3"
                 required={true}
                 />
                <input type="text" placeholder="Telephone Number" className=" w-[250px] border-2 border-slate-400
                 rounded-md md:w-[300px] bg-slate-200 py-2 md:py-3 px-2 mb-3" 
                 required={true}
                 />
                <button className="bg-orange-700 text-white px-4 w-24">Submit</button>

            </form>
            
        </div>
    )
}

export default Contact