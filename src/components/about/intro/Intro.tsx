import React from "react"
import { OrganiserCarousel } from "../OrganiserCarousel"

const Intro: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white text-base py-20 px-50">

            <div className="relative text-7xl uppercase font-extrabold w-full h-20">
                <div>who</div>
                <div className="absolute top-14 left-1/11 text-nowrap">are we?</div>
            </div>

            <div className="pt-20 grid grid-cols-2">
                <OrganiserCarousel />
                <div className="relative text-5xl uppercase font-semibold h-25 m-20 self-center">
                    <div>
                        The people
                    </div>
                    <div className="absolute text-nowrap top-10 left-1/3">
                        who made
                    </div>
                    <div className="absolute text-nowrap top-20 left-1/4">
                        it happen
                    </div>
                </div>
            </div>

            <div className="w-full text-xl m-10">
                iDPSC :)
            </div>
        </div>
    )
}

export default Intro