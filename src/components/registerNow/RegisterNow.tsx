import React, { useState } from "react"

type RegisterNowProps = {
    isRegistrationOpen: boolean;
};

const RegisterNow: React.FC<RegisterNowProps> = ({ isRegistrationOpen }) => {
// const RegisterNow: React.FC = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="relative bg-inherit flex items-center justify-center text-black text-base h-screen">
            <div className="w-full">
                <img 
                    src={ isRegistrationOpen ? "../register_now/text_open.png" : "../register_now/text_opensSoon.png"}
                    className={`absolute top-10 -translate-x-1/2 ${ isRegistrationOpen ? `left-1/3 w-[50vw]`: `left-2/5 w-[60vw]`} h-auto`}
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
                            className={`absolute top-10 left-2/3 translate-y-1/3 w-[25vw] h-auto transition-opacity duration-150 ${hovered ? 'opacity-100' : 'opacity-100'}`}
                        />
                        <img
                            src="../register_now/lit_bulb.png"
                            className={`absolute top-10 left-2/3 translate-y-1/3 w-[25vw] h-auto transition-opacity duration-150 ${hovered ? 'opacity-100' : 'opacity-0'}`}
                        />
                    </a>
                :
                    <img
                        src="../register_now/unlit_bulb.png"
                        className="absolute top-10 left-2/3 translate-y-1/3 w-[25vw] h-auto"
                    />
                }
            </div>
        </div>
    )
}

export default RegisterNow