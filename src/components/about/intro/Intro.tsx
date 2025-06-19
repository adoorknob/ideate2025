import React from "react"
import { OrganiserCarousel } from "../OrganiserCarousel"

const Intro: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white text-base pt-20 px-50">
            <div className="bg-gray-100/10 h-1 w-full mb-15"/>

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

            <div className="mt-10">
                <div className="w-full text-xl mb-10">
                    The iDP Students’ Club strives to nurture and develop a vibrant community of aspiring engineers, 
                    innovators and entrepreneurs in the iDP. We aim to play a vital role in the university experience 
                    of iDP students through organising events and programmes such as social networking events, professional 
                    development workshops, internship placements, and publicity campaigns.
                </div>
                <div className="w-full text-xl">
                    IDEATE is iDPSC's annual flagship hackathon. Following the success of IDEATE 2024, we are honoured to have 
                    the support of the {" "} 
                        <a href="https://cde.nus.edu.sg" className="underline font-semibold hover:text-gray-200">College of Design and Engineering (CDE)</a> 
                    {" "} as well as{" "}  
                        <a href="https://enterprise.nus.edu.sg" className="underline font-semibold hover:text-gray-200">NUS Enterprise</a> 
                    {" "} in organising IDEATE 2025, bringing began as a homegrown ideathon to a faculty level makerthon. 
                </div>
            </div>
        </div>
    )
}

export default Intro