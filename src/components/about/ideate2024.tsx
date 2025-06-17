import React from "react"
import { CarouselPlugin } from "./Carousel"

const Ideate2024: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white text-base">
            {/* old theme */}
            <div className="flex flex-col items-center justify-center text-2xl lg:text-7xl lg:pt-25 pt-8 min-h-[50vh] pb-12 gap-y-8 px-4 lg:px-8">
                <div className="uppercase text-4xl font-bold">
                    <span> 
                        previously on {" "}
                        <a 
                            className="font-peacesans underline hover:text-zinc-200"
                            href="https://www.ideate2024.xyz"
                        > 
                            ideate2024
                        </a>
                        ...
                    </span>
                </div>
                <img 
                src="../oldtheme/full_theme.png" 
                className='pb-10 w-[60vw]'
                />
                <div className="flex gap-x-4 lg:gap-x-16 pr-3">
                    <img
                    src="../oldtheme/triangle_block.png"
                    alt="Triangle Block"
                    className="h-[19vw] w-[19vw]"
                    />
                    <img
                    src="../oldtheme/bulb_with_house.png"
                    alt="Bulb With House"
                    className="h-[21vw] w-[15vw] mr-4"
                    />
                    <img
                    src="../oldtheme/square_block.png"
                    alt="Square Block"
                    className="h-[14.5vw] w-[14.5vw]"
                    />
                </div>
            </div>
            <div className="grid grid-cols-3 p-50">
                <div className="col-span-2"> some text</div>
                <CarouselPlugin />
            </div>
        </div>
    )
}

export default Ideate2024