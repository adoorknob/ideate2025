import React, { useState } from "react"
import RegistrationBulb from "./RegistrationBulb";

type RegisterNowProps = {
    isRegistrationOpen: boolean;
};

const RegisterNow: React.FC<RegisterNowProps> = ({ isRegistrationOpen }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="relative bg-inherit flex items-center justify-center text-black text-base h-[60vw] min-h-[60vh] 2xl:h-screen">
            <div className="w-full h-auto">
                <img 
                    src={ isRegistrationOpen ? "../register_now/text_open.png" : "../register_now/text_opensSoon.png"}
                    className={`absolute -translate-y-50 md:-translate-y-4/5 -translate-x-2/5 md:-translate-x-1/2 
                                ${ isRegistrationOpen ? `left-3/7 md:left-3/8 w-[70vw] md:w-[50vw] lg:w-[40vw]`
                                                     : `left-2/5 w-[80vw] md:w-[60vw]`} h-auto`
                                }
                />
                { isRegistrationOpen ? 
                <div className="absolute left-3/5 md:top-3/7 md:left-5/8 w-[30vw] md:w-[25vw] lg:w-[20vw] h-auto">
                    <RegistrationBulb />
                </div>
                :
                <img
                    src="../register_now/unlit_bulb.png"
                    className="absolute top-10 left-1/2 md:left-2/3 translate-y-1/3 w-[35vw] md:w-[25vw] h-auto"
                />
                }
            </div>
        </div>
    )
}

export default RegisterNow