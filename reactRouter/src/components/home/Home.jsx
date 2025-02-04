import React from "react";

function Home() {
    return (
            <div className="w-full h-auto bg-white  ">
                <div className="flex justify-around pt-20 text-black flex-col md:flex-row items-center">
                    <img src="../img/Remote2.png" alt="img1" className="md:w-[380px] md:h-72 w-72 h-52" />
                    <div className="mt-24 md:mt-0">
                        <h1 className="font-bold text-2xl md:text-4xl">Download Now</h1>
                        <p className="font-bold md:text-2xl  text-xl mx-12 mt-2">Availabel on iphone</p>
                        <button className="bg-orange-700 text-white mx-14 mt-4 border-none">Download</button>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-12">
                   <div className="flex flex-col pb-12">
                     <img src="../img/Remote1.png" alt="img2" className="md:w-[380px] md:h-72 w-72 h-52" />
                    <p className="text-2xl font-bold mt-5 font-serif md:text-4 text-black md:font-semibold">Let Start with Fun...</p>
                   </div>
                </div>
            </div>
    )
}

export default Home