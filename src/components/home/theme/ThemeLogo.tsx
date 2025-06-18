import React from "react";

const ThemeLogo: React.FC = () => {
    return (
        <div className="flex flex-col md:grid md:grid-cols-5 gap-3 m-10 items-center">
            <img 
                src="../general_icons/triangle.png"
                className="col-start-2 w-[20vw] md:w-[14vw] justify-center justify-self-center md:self-end md:justify-self-end-safe 
                            animate-pulse transition md:duration-300 ease-in-out md:hover:-translate-y-5
                            opacity-100 md:opacity-50 md:hover:opacity-100 md:animate-none"
            />
            <img 
                src="../general_icons/bulb.png"
                className="w-[20vw] justify-self-center 
                            animate-pulse transition md:duration-300 ease-in-out md:hover:-translate-y-5 md:opacity-50 md:hover:opacity-100
                            md:animate-none"
            />
            <img 
                src="../general_icons/square.png"
                className="w-[20vw] md:w-[12vw] justify-self-center justify-center md:self-end md:ml-4 md:justify-self-start 
                            animate-pulse transition md:duration-300 ease-in-out md:hover:-translate-y-5
                            opacity-100 md:opacity-50 md:hover:opacity-100 md:animate-none"
            />
        </div>
    )
}

export default ThemeLogo