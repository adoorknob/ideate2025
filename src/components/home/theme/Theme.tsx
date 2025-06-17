import React from "react"
import ThemeLogo from "./ThemeLogo"

const Theme: React.FC = () => {
    return (
        <div className="text-white uppercase bg-inherit flex items-center text-black text-base h-screen">
            <div className="flex flex-col justify-start m-10 text-left gap-10">
                {/* header */}
                <div className="relative w-fit h-fit pb-10">
                    <div className="text-7xl font-bold">
                        Our
                    </div>
                    <div className="absolute left-2/5 top-15 text-7xl font-bold">
                        theme
                    </div>
                </div>
                {/* body text */}
                <div className="text-3xl text-center font-bold">
                    To be revealed closer to the competition date
                </div>
                <ThemeLogo />
            </div>
        </div>
    )
}

export default Theme