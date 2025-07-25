import React from "react"
import RegistrationBulb from "../registerNow/RegistrationBulb"

type HeroProps = {
    isRegistrationOpen: boolean;
};

const Hero: React.FC<HeroProps> = ({ isRegistrationOpen }) => {
    return (
        <div className="bg-inherit flex items-center justify-center text-black text-base min-h-screen pt-20">
            <div className="relative w-[70vw] md:w-[45vw] aspect-[1/1]">
            { isRegistrationOpen ? 
                <div className="
                            absolute 
                            w-22/100 
                            h-auto
                            z-10
                            left-[38%] top-[9%]
                            transform -translate-x-1/2 translate-y-full">
                    <RegistrationBulb />
                </div>
                :
                <div className="
                            absolute 
                            w-22/100 
                            h-auto
                            z-10
                            left-[38%] -top-[20%]
                            transform -translate-x-1/2 translate-y-full">
                    <img src="../register_now/lit_bulb.png"/>
                </div>
            }
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