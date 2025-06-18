import React from "react"
import { EventCarousel } from "./EventCarousel"
import { OrganiserCarousel } from "./OrganiserCarousel"

const Ideate2024: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white text-base pt-25 px-50">
            <div className="relative w-full uppercase text-7xl font-extrabold p-5 h-45">
                <div>about</div>
                <div className="absolute top-20 left-40">ideate</div>
            </div>
            {/* old theme */}
            <div className="flex bg-gray-100/10 rounded-xl p-10" >
                <div className="grid items-center justify-center">
                    <img 
                        src="../info/ideate2024/IDEATE_2024.png"
                        className="h-[50vh]"
                    />
                </div>
                <div className="bg-white w-1 h-auto ml-6" />
                <div className="flex flex-col items-center justify-center text-2xl lg:text-7xl 
                                min-h-[50vh] gap-y-8 px-4 lg:px-8">
                    <img 
                        src="../oldtheme/full_theme.png" 
                        className='pb-10 w-[40vw]'
                    />
                    <div className="grid grid-cols-3">
                        <img
                        src="../oldtheme/triangle_block.png"
                        alt="Triangle Block"
                        className="w-[10vw]"
                        />
                        <img
                        src="../oldtheme/bulb_with_house.png"
                        alt="Bulb With House"
                        className="w-[8vw] mr-4"
                        />
                        <img
                        src="../oldtheme/square_block.png"
                        alt="Square Block"
                        className="w-[8vw]"
                        />
                    </div>
                </div>
            </div>

            {/* ideate 2024 info */}
            <div className="grid grid-cols-2 pt-10 gap-15">
                <div className="col-span-1 text-justify text-xl"> 
                    <span className="font-bold">"Innovating the Ordinary: Future Home Edition"</span> was the theme of IDEATE 2024, 
                    aimed at challenging university students in Singapore to envision and create innovative solutions that enhance
                    everyday living. The first makerthon in IDEATE's history, IDEATE 2024 garnered over 250 participants, with a
                    prize pool of $10,000 SGD and incubation at The Hangar.
                </div>
                <EventCarousel />
            </div>
        </div>
    )
}

export default Ideate2024