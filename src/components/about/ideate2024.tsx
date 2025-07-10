import React from "react"
import { EventCarousel } from "./EventCarousel"
import DoughnutChart from "./DoughnutChart"

const Ideate2024: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white text-base pt-25 px-15 md:px-20 lg:px-50">
            <div className="relative w-full uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl font-extrabold p-5 h-25 sm:h-45 2xl:h-80">
                <div>about</div>
                <div className="absolute top-11 left-19 sm:top-15 sm:left-29 md:top-18 md:left-33 lg:top-20 lg:left-40 2xl:top-30 2xl:left-45">ideate</div>
            </div>
            {/* old theme */}
            {/* <div className="flex flex-col md:flex-row bg-gray-100/10 rounded-xl p-10" >
                <div className="grid items-center justify-center">
                    <img 
                        src="../info/ideate2024/IDEATE_2024.png"
                        className="hidden md:block w-[7vw]"
                    />
                    <img 
                        src="../info/ideate2024/IDEATE_2024_horizontal.png"
                        className="md:hidden w-[50vw]"
                    />
                </div>
                <div className="bg-white w-auto h-1 mt-5 mb-6 md:mt-0 md:mb-0 md:w-1 md:h-auto md:ml-6" />
                <div className="flex flex-col items-center justify-center text-2xl lg:text-7xl 
                                gap-y-8 px-4 lg:px-8">
                    <img 
                        src="../oldtheme/full_theme.png" 
                        className='w-[50vw] md:w-[40vw]'
                    />
                    <div className="grid grid-cols-3">
                        <img
                        src="../oldtheme/triangle_block.png"
                        alt="Triangle Block"
                        className="w-[15vw] md:w-[10vw]"
                        />
                        <img
                        src="../oldtheme/bulb_with_house.png"
                        alt="Bulb With House"
                        className="w-[12vw] md:w-[8vw] mr-4"
                        />
                        <img
                        src="../oldtheme/square_block.png"
                        alt="Square Block"
                        className="w-[12vw] md:w-[8vw]"
                        />
                    </div>
                </div>
            </div> */}

            {/* ideate 2024 info */}
            <div className="grid md:grid-cols-2 pt-10 gap-15">
                <div className="col-span-1 text-justify text-sm sm:text-lg lg:text-xl 2xl:text-4xl"> 
                    IDEATE is the flagship innovation makerthon jointly organised by the College of Design and Engineering (CDE), 
                    CDE Innovation Design and Programme Student Club (iDPSC) and NUS Enterprise at the National University of Singapore 
                    (NUS). IDEATE is a merger of two highly successful events, 
                    IDEATE and the Eureka Innovation Challenge, with the objective to foster innovation and entrepreneurial 
                    spirit among NUS students by encouraging aspiring innovators to develop practical solutions for real-world 
                    challenges. This merger not only amplifies the reach and impact of both events but also provides a larger, 
                    more vibrant platform for aspiring innovators to shape ideas that address the needs of the future.
                </div>
                <EventCarousel />
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 w-full items-center justify-center content-center">
                <div className="flex justify-center">
                    <img
                        src="../info/EUREKA.png"
                        className="m-5 w-[30vw] md:w-[15vw]"
                    />
                </div>
                {/* <div className="hidden md:block">
                    <DoughnutChart />
                </div> */}
                <div className="visible flex justify-center">
                    <img
                        src="../info/mobile_chart.png"
                        className="w-[40vw]"
                    />
                </div>
                <div className="flex justify-center">
                    <img
                        src="../info/IDEATE_2024.png"
                        className="m-5 w-[30vw] md:w-[15vw]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Ideate2024