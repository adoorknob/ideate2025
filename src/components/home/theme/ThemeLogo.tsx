import React from "react";

const ThemeLogo: React.FC = () => {
    return (
        <div className="grid grid-cols-5 gap-3 m-10">
            <img 
                src="../general_icons/triangle.png"
                className="col-start-2 w-[14vw] self-end justify-self-end-safe transition duration-300 ease-in-out hover:-translate-y-5
                            opacity-50 hover:opacity-100"
            />
            <img 
                src="../general_icons/bulb.png"
                className="w-[20vw] transition duration-300 ease-in-out hover:-translate-y-5 opacity-50 hover:opacity-100"
            />
            <img 
                src="../general_icons/square.png"
                className="w-[12vw] self-end ml-4 justify-self-start transition duration-300 ease-in-out hover:-translate-y-5
                            opacity-50 hover:opacity-100"
            />
        </div>
    )
}

export default ThemeLogo