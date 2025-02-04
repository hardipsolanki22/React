import React from "react";
import { Link, NavLink } from "react-router-dom"

function Hedaer() {

    const showNavbar = () => {
        console.log("click nav");
    }

    return (
        <nav className=" md:h-16 h-20 bg-slate-200 text-black  md:w-full
        flex justify-between items-center px-4 md:px-10 flex-wrap shadow-lg
        border-b-2 border-slate-300
        ">
            <div className="">
                <img src="../img/logo-2.png" alt="logo" className="w-32 md:w-40 h-12 rounded-md pl-4 " />
            </div>
            <ul className="md:flex gap-5 lg:gap-7 font-semibold hidden cursor-pointer">
                <li>
                    <NavLink to=""
                        className={({ isActive }) =>
                            `${isActive ? "text-orange-600" : "text-black"} border-b
                            border-gray-100 hover:text-orange-700 lg:hover:bg-transparent
                            duration-200 
                        `
                        }
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `  duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b
                         border-gray-100 hover:text-orange-700 `
                        }
                    > About</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `  duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b
                         border-gray-100 hover:text-orange-700 `
                        }
                    > Contact</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/github"
                        className={({ isActive }) =>
                            `  duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b
                         border-gray-100 hover:text-orange-700 `
                        }
                    > Github</NavLink>
                </li>
            </ul>
            <div className="font-semibold hidden md:flex justify-center items-center ">
                <Link to={"#"} className="mx-4 text-black cursor-pointer">Log In</Link>
                <div >
                    <p className="md:px-4 md:py-2 p-1 bg-orange-700 text-white rounded-md cursor-pointer">Get Started</p>
                </div>
            </div>
            <div className="md:hidden">
                <p className="text-4xl " onClick={showNavbar}>&#8801;</p>
            </div>
        </nav>
    )
}

export default Hedaer