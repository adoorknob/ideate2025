import React from "react"
import RegistrationBulb from "../registerNow/RegistrationBulb"

const Hero: React.FC = () => {
    return (
        <div className="bg-inherit flex items-center justify-center text-black text-base min-h-screen">
            <div className="relative w-[70vw] md:w-[45vw] aspect-[1/1]">
                <div className="
                            absolute 
                            w-22/100 
                            h-auto
                            z-10
                            left-[38%] top-[9%]
                            transform -translate-x-1/2 translate-y-full">
                    <RegistrationBulb />
                </div>
                <img 
                    // src="../logo/main_logo.png" 
                    src="../logo/logo_wo_bulb.png" 
                    className="absolute top-0 left-0 w-full h-full object-contain"
                />
            </div>
        </div>
    )
}

export default Hero