import React from "react"
import RegistrationBulb from "./RegistrationBulb";

type RegisterNowProps = {
    isRegistrationOpen: boolean;
};

const RegisterNow: React.FC<RegisterNowProps> = ({ isRegistrationOpen }) => {
    return (
        <div className="relative bg-inherit flex items-center justify-center text-black text-base h-[60vw] min-h-[60vh] 2xl:h-screen">
            { isRegistrationOpen ? 
            <div className="w-full h-auto">
                <a 
                    className="absolute -translate-y-50 md:-translate-y-4/5 -translate-x-2/5 md:-translate-x-1/2 left-3/7 md:left-3/8 w-[70vw] md:w-[50vw] lg:w-[40vw] h-auto"
                    href="https://forms.office.com/r/jVt88zsPrV">
                    <img 
                        src="../register_now/text_open.png"
                    />
                </a>
                <div className="absolute left-3/5 md:top-3/7 md:left-5/8 w-[30vw] md:w-[25vw] lg:w-[20vw] h-auto">
                    <RegistrationBulb />
                </div>
            </div>
            :
            <div className="w-full h-auto">
                <img 
                    src="../register_now/text_closed.png"
                    className="absolute 
                                -translate-y-40 md:-translate-y-4/5 -translate-x-2/5  
                                left-3/7 md:left-3/8 
                                w-[80vw] md:w-[70vw] lg:w-[60vw] h-auto"
                />
                <img
                    src="../register_now/unlit_bulb.png"
                    className="
                            absolute 
                            w-22/100 
                            h-auto
                            z-10
                            right-[10%] top-[35%]
                            transform -translate-x-1/2 translate-y-1/2"
                />
            </div>
        }
        </div>
    )
}

export default RegisterNow