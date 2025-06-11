import React from "react"

const RegisterNow: React.FC = () => {
    return (
        <div className="relative bg-inherit flex items-center justify-center text-black text-base h-screen">
            <div className="w-full">
                <img 
                    src="../register_now/text.png"
                    className="absolute top-10 left-2/5 -translate-x-1/2 w-[60vw] h-auto"
                />
                <img
                    src="../register_now/unlit_bulb.png"
                    className="absolute top-10 left-2/3 translate-y-1/3 w-[25vw] h-auto"/>
            </div>
        </div>
    )
}

export default RegisterNow