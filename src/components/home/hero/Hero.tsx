import React from "react"

const Hero: React.FC = () => {
    return (
        <div className="bg-inherit flex items-center justify-center text-black text-base min-h-screen">
            <img 
                src="../logo/main_logo.png" 
                className="w-[60vw] h-auto max-h-[80vh] m-20"
            />
        </div>
    )
}

export default Hero