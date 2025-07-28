import React from "react"
import { EventCarousel } from "./EventCarousel"

const Ideate2024: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white text-base px-10 sm:px-20">
            <div className="title-text">
                <div className="title-firsttext">about</div>
                <div className="title-subtext">ideate</div>
            </div>

            {/* ideate 2024 info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-15">
                <div className="col-span-1 text-justify normal-text"> 
                    IDEATE is the flagship innovation makerthon jointly organised by the College of Design and Engineering
                    (CDE) Office of Research and Technology, CDE Innovation Design and Programme Student Club (iDPSC) and 
                    NUS Enterprise at the National University of Singapore (NUS). IDEATE is a merger of two highly successful 
                    events, IDEATE and the Eureka Innovation Challenge, with the objective to foster innovation and entrepreneurial 
                    spirit among NUS students by encouraging aspiring innovators to develop practical solutions for real-world 
                    challenges. 
                    This merger not only amplifies the reach and impact of both events but also provides a larger, 
                    more vibrant platform for aspiring innovators to shape ideas that address the needs of the future.
                </div>
                <div className="lg:w-[30vw] justify-self-center content-center">
                    <EventCarousel />
                </div>
            </div>

        </div>
    )
}

export default Ideate2024