import React, { useState } from "react"

type RegisterNowProps = {
    isRegistrationOpen: boolean;
};

const RegisterNow: React.FC<RegisterNowProps> = ({ isRegistrationOpen }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="relative bg-inherit flex items-center justify-center text-black text-base h-screen">
            <div className="w-full h-auto">
                <img 
                    src={ isRegistrationOpen ? "../register_now/text_open.png" : "../register_now/text_opensSoon.png"}
                    className={`absolute top-5 -translate-y-1/2 -translate-x-2/5 md:translate-y-0 md:top-10 md:-translate-x-1/2
                                ${ isRegistrationOpen ? `left-3/7 md:left-3/8 w-[70vw] md:w-[50vw]`
                                                     : `left-2/5 w-[80vw] md:w-[60vw]`} h-auto`
                                }
                />
                { isRegistrationOpen ? 
                    <a
                        className="w-fit h-fit"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        href="/about"
                    >
                        <img
                            src="../register_now/unlit_bulb.png"
                            className={`absolute top-15 md:top-10 left-1/2 md:left-2/3 translate-y-1/3 w-[35vw] md:w-[25vw] h-auto`}
                        />
                        <img
                            src="../register_now/lit_bulb.png"
                            className={`absolute top-15 md:top-10 left-1/2 md:left-2/3 translate-y-1/3 w-[35vw] md:w-[25vw] h-auto transition-opacity duration-150 opacity-0 ${hovered ? 'md:opacity-100' : 'md:opacity-0'}`}
                        />
                        <img
                            src="../register_now/mobile_reg_button.png"
                            className={`absolute top-15 md:top-10 left-1/2 md:left-2/3 translate-y-1/3 w-[35vw] md:w-[25vw] h-auto md:hidden`}
                        />
                    </a>
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