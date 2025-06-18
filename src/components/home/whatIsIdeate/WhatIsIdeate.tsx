import React from "react"
import TitleText from "./title_text"

const WhatIsIdeate: React.FC = () => {
    return (
        <div className="bg-inherit flex flex-col items-center text-white justify-center w-full text-base">
            <div className="relative w-full px-20 h-28 md:h-40 lg:h-48">
                <TitleText />
            </div>
            <div className="w-full px-20 md:grid md:grid-cols-3 gap-4 gap-y-10">
                <div className="col-span-2 text-base md:text-xl lg:text-2xl text-left">
                    <p className="text-justify">
                        IDEATE isn’t just a competition—it’s a launchpad for mechatronic solutions with real-world potential.
                        <br />
                        <br />
                        Open to all disciplines, this challenge brings together passionate teams who dare to imagine, build, and solve. 
                        IDEATE offers the freedom to innovate for practical applications. You bring the idea—we provide the space to explore it, 
                        question it, build it, and bring it to life.
                    </p>
                </div>
                <div className="relative grid invisible md:visible">
                    <img
                        src="../whatIsIdeate/balancing.png"
                        className="absolute w-[10vw] lg:-translate-y-1/5 justify-self-center"
                    />
                </div>
                <div className="grid content-center justify-center pt-5 md:p-5 h-auto">
                    <img
                        src="../whatIsIdeate/people.png"
                        className="w-[25vw]"
                    />
                </div>
                <div className="md:col-span-2 text-xl md:text-2xl lg:text-3xl text-left">
                    Expect brainstorming sessions, rapid prototyping, hands-on mentorship, and the thrill of seeing your concept evolve into 
                    something real. 
                    <br />
                    <br />
                    IDEATE is where raw ideas meet bold execution.
                </div>
            </div>
        </div>
    )
}

export default WhatIsIdeate