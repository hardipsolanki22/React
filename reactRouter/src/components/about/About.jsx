import React from "react";

export function About() {
    return (
        <div className="w-full md:h-screen h-auto bg-white text-black pt-12  ">
            <div className="flex justify-evenly items-center flex-col md:flex-row px-12 md:px-9 ">
                <img src="../img/startup.png" alt="about" className="rounded-md lg:w-5/12 md:w-5/12 " />
                <div className="md:px-12 flex flex-wrap mt-4 lg:w-6/12  md:mb-0 sm:max-h-[360px] md:7/12 ">
                    <p className="font-bold text-2xl md:text-4xl">React development is carried out
                        passionate development
                    </p>
                    <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Beatae laboriosam, enim, dolore repellat delectus incidunt, 
                         officiis sed optio saepe deserunt quis facere harum laborum reiciendis quos dolorum eo
                         s facilis libero Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, eius.
                         Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                    <p className="mt-4"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, fuga.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolorem ratione possimus, 
                        cumque beatae maxime!
                    </p>
                </div>
            </div>
        </div>

    )
}