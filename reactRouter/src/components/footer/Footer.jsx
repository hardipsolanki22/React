import React from "react";
import {NavLink} from "react-router-dom"

function Footer() {
    return (
        <footer className="bg-white w-full h-auto flex justify-around items-center 
        flex-col md:flex-row text-black border-t-2 border-slate-300 p-6  "
        >
            <div>
                <img src="../img/logo-2.png" alt="logo" className=" w-32 md:w-40 h-12 rounded-md" />
            </div>
            <div className="flex gap-12 flex-col sm:flex-row mt-4 ">
                <div>
                    <p className="font-semibold">RESOURCES</p>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `  duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b
                         border-gray-100 hover:text-orange-700 mt-4 block`
                        }
                    > Home</NavLink>
                   <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `  duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b
                         border-gray-100 hover:text-orange-700 mt-4 block `
                        }
                    > About</NavLink>
                </div>
                <div>
                    <p className="font-semibold">FOLLOWS US</p>
                    <NavLink
                        to="/github"
                        className={({ isActive }) =>
                            `  duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b
                         border-gray-100 hover:text-orange-700 mt-4 block`
                        }
                    > Github</NavLink>
                    <p className="mt-4">Discord</p>
                </div>
                <div>
                    <p className="font-semibold">LEGAL</p>
                    <p className="mt-4">Privacy Policy</p>
                    <p className="mt-4">Term & Conditions</p>
                </div>

            </div>

        </footer>
    )
}

export default Footer