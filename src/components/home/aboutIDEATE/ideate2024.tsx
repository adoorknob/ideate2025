import React from "react"
import { EventCarousel } from "./EventCarousel"

const Ideate2024: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white text-base pt-25 px-10 sm:px-20 py-30">
            <div className="relative w-full uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl font-extrabold p-5 h-15 sm:h-45 2xl:h-80">
                <div className="absolute ">about</div>
                <div className="absolute top-11 left-19 sm:top-15 sm:left-29 md:top-18 md:left-33 lg:top-20 lg:left-40 2xl:top-30 2xl:left-45">ideate</div>
            </div>

            {/* ideate 2024 info */}
            <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-15">
                <div className="col-span-1 text-justify text-sm sm:text-lg lg:text-xl 2xl:text-4xl"> 
                    IDEATE is the flagship innovation makerthon jointly organised by the College of Design and Engineering
                    (CDE) Office of Research and Technology, CDE Innovation Design and Programme Student Club (iDPSC) and 
                    NUS Enterprise at the National University of Singapore (NUS). IDEATE is a merger of two highly successful 
                    events, IDEATE and the Eureka Innovation Challenge, with the objective to foster innovation and entrepreneurial 
                    spirit among NUS students by encouraging aspiring innovators to develop practical solutions for real-world 
                    challenges. 
                </div>
                <div className="md:w-[30vw] justify-self-center content-center">
                    <EventCarousel />
                </div>
                <div className="md:col-span-2 text-justify text-sm sm:text-lg lg:text-xl 2xl:text-4xl"> 
                    This merger not only amplifies the reach and impact of both events but also provides a larger, 
                    more vibrant platform for aspiring innovators to shape ideas that address the needs of the future.
                </div>
            </div>
            <div className="mt-20 relative w-full uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl font-extrabold p-5 h-25 sm:h-45 2xl:h-80">
                <div className="absolute ">highlights</div>
                <div className="absolute top-11 left-19 sm:top-15 sm:left-29 md:top-18 md:left-33 lg:top-20 lg:left-40 2xl:top-30 2xl:left-45">from 2024</div>
            </div>
            <div className="mt-5 w-full content-center pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center content-center">
                    <img
                        src="../info/numbers_ideate.png"
                        className="m-5 w-[50vw] md:w-[28vw] justify-self-center"
                    />
                    <img
                        src="../info/numbers_eureka.png"
                        className="m-5 w-[50vw] md:w-[28vw] justify-self-center"
                    />
                </div>
            </div>

        </div>
    )
}

export default Ideate2024