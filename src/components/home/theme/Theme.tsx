import React from "react"
import ThemeLogo from "./ThemeLogo"

const Theme: React.FC = () => {
    return (
        <div className="text-white uppercase bg-inherit flex items-center text-black text-base">
            <div className="flex flex-col justify-start m-20 text-left gap-10">
                {/* header */}
                <div className="relative w-fit h-fit pb-3 md:pb-8 lg:pb-10 h-15 md:h-20 lg:h-35 text-3xl md:text-5xl lg:text-7xl">
                    <div className="font-bold">
                        Our
                    </div>
                    <div className="absolute top-6 md:top-10 left-2/5 lg:top-15 font-bold">
                        theme
                    </div>
                </div>
                {/* body text */}
                <div className="text-xl md:text-2xl lg:text-3xl text-center font-bold">
                    To be revealed closer to the competition date
                </div>
                <ThemeLogo />
            </div>
        </div>
    )
}

export default Theme