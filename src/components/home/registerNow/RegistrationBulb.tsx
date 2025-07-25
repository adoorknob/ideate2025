import React, { useState } from "react"

const RegistrationBulb: React.FC = () => {
    const [hovered, setHovered] = useState(false);
    return (
        <a
            className="w-fit h-fit cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            href="https://forms.office.com/r/jVt88zsPrV"
        >
            <div className="relative h-auto">
                <img
                    src="../register_now/web_reg_button.png"
                    className={`absolute`}
                />
                
                <img
                    src="../register_now/lit_bulb.png"
                    className={`absolute transition-opacity ${hovered? "opacity-100":"custom-pulse"}`}
                />
            </div>
            
            {/* MOBILE */}
            {/* <img
                src="../register_now/mobile_reg_button.png"
                className={`absolute top-50 left-1/2 md:left-2/3 translate-y-1/3 w-[30vw] h-auto md:hidden`}
            /> */}
        </a>
    )
}

export default RegistrationBulb