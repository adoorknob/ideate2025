import React from "react"
import { OrganiserCarousel } from "./OrganiserCarousel"

const Intro: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white text-base pt-10 px-15 md:px-20 lg:px-50">
            <div className="title-text">
                <div className="title-firsttext">who</div>
                <div className="title-subtext">are we?</div>
            </div>

            <div className="grid md:grid-cols-2">
                <OrganiserCarousel />
                <div className="relative text-xl sm:text-4xl lg:text-5xl 2xl:text-7xl uppercase font-semibold h-10 lg:h-25 m-5 sm:m-10 lg:m-20 lg:self-center">
                    <div className="text-nowrap">
                        The people
                    </div>
                    <div className="absolute text-nowrap top-4 sm:top-8 lg:top-10 2xl:top-15 left-1/3">
                        who made
                    </div>
                    <div className="absolute text-nowrap top-8 sm:top-16 lg:top-20 2xl:top-30 left-1/4">
                        it happen
                    </div>
                </div>
            </div>

            <div className="mt-5 sm:mt-10 text-justify">
                <div className="w-full normal-text mb-10">
                    The iDP Students’ Club strives to build a vibrant community of aspiring engineers, designers, innovators, 
                    and entrepreneurs. We aim to enrich the iDP and NUS students’ experience by organising social events, 
                    professional development workshops, internship opportunities, and publicity campaigns.
                </div>
                <div className="w-full text-base sm:text-lg lg:text-xl 2xl:text-3xl">
                    Following the success of IDEATE 2024, we are honoured to have 
                    the synergistic support of the {" "} 
                        <a href="https://cde.nus.edu.sg" className="underline font-semibold text-blue-300 hover:text-blue-400">CDE Office of 
                    Research and Technology</a> 
                    {" "} and {" "}  
                        <a href="https://enterprise.nus.edu.sg" className="underline font-semibold text-blue-300 hover:text-blue-400">NUS Enterprise</a> 
                    {" "} for IDEATE 2025. What began as a homegrown ideathon has now 
                    grown into a faculty-level makerthon, bringing together innovators from across the NUS community.
                </div>
            </div>
        </div>
    )
}

export default Intro