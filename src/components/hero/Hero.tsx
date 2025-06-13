import React from "react"

const Hero: React.FC = () => {
    return (
        <div className="bg-inherit flex items-center justify-center text-black text-base h-screen">
            <img 
                src="../logo/main_logo.png" 
                className="w-[60vw] h-auto m-20"
            />
        </div>
    )
}

export default Hero