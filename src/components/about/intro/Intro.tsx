import React from "react"
import { OrganiserCarousel } from "../OrganiserCarousel"

const Intro: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white text-base pt-20 px-15 md:px-20 lg:px-50">
            <div className="bg-gray-100/10 h-1 w-full mb-10 sm:mb-15"/>

            <div className="relative text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-extrabold w-full h-10 sm:h-20">
                <div>who</div>
                <div className="absolute top-7 left-8 sm:top-10 sm:left-4/20 md:top-12 md:left-3/20 lg:top-14 lg:left-1/11 text-nowrap">are we?</div>
            </div>

            <div className="pt-10 md:pt-15  lg:pt-20 grid md:grid-cols-2">
                <OrganiserCarousel />
                <div className="relative text-xl sm:text-4xl lg:text-5xl uppercase font-semibold h-10 lg:h-25 m-5 sm:m-10 lg:m-20 lg:self-center">
                    <div className="text-nowrap">
                        The people
                    </div>
                    <div className="absolute text-nowrap top-4 sm:top-8 lg:top-10 left-1/3">
                        who made
                    </div>
                    <div className="absolute text-nowrap top-8 sm:top-16 lg:top-20 left-1/4">
                        it happen
                    </div>
                </div>
            </div>

            <div className="mt-5 sm:mt-10 text-justify">
                <div className="w-full text-sm sm:text-lg lg:text-xl mb-10">
                    The iDP Students’ Club strives to nurture and develop a vibrant community of aspiring engineers, 
                    innovators and entrepreneurs in the iDP. We aim to play a vital role in the university experience 
                    of iDP students through organising events and programmes such as social networking events, professional 
                    development workshops, internship placements, and publicity campaigns.
                </div>
                <div className="w-full text-base sm:text-lg lg:text-xl">
                    IDEATE is iDPSC's annual flagship hackathon. Following the success of IDEATE 2024, we are honoured to have 
                    the support of the {" "} 
                        <a href="https://cde.nus.edu.sg" className="underline font-semibold text-blue-300 hover:text-blue-400">College of Design and Engineering (CDE)</a> 
                    {" "} as well as{" "}  
                        <a href="https://enterprise.nus.edu.sg" className="underline font-semibold text-blue-300 hover:text-blue-400">NUS Enterprise</a> 
                    {" "} in organising IDEATE 2025, bringing began as a homegrown ideathon to a faculty level makerthon. 
                </div>
            </div>
        </div>
    )
}

export default Intro