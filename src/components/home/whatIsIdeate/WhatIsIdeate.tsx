import React from "react"
import TitleText from "./title_text"

const WhatIsIdeate: React.FC = () => {
    return (
        <div className="bg-inherit flex flex-col items-center text-white justify-center w-full text-base">
            <div className="relative w-full px-10 sm:px-20 h-20 sm:h-28 md:h-40 lg:h-48 2xl:h-80">
                <TitleText />
            </div>
            <div className="w-full px-10 sm:px-20 xl:px-30 md:grid md:grid-cols-3 gap-4 gap-y-10">
                <div className="col-span-2 text-sm sm:text-base md:text-xl lg:text-2xl 2xl:text-4xl text-left">
                    <p className="text-justify">
                        IDEATE isn’t just a competition—it’s a launchpad for mechatronic solutions with real-world potential.
                        Open to <span className="font-bold">all disciplines</span>, this challenge brings together passionate teams who dare to imagine, build, and solve. 
                        You bring the idea—we provide the space to explore it, question it, build it, and bring it to life. 
                        <br />
                        <br />
                        Sign up as <span className="font-bold">individuals</span> or <span className="font-bold">teams of 3-5</span> {" "}  
                        and pitch your ideas for a chance to be one of the <span className="font-bold">16 semi-finalist teams</span>.
                    </p>
                </div>
                <div className="relative grid invisible md:visible">
                    <img
                        src="../whatIsIdeate/balancing.png"
                        className="absolute w-[10vw] xl:w-[8vw] lg:-translate-y-1/5 xl:-translate-y-2/5 justify-self-center"
                    />
                </div>
                <div className="grid content-center justify-center pt-5 md:p-5 h-auto">
                    <img
                        src="../whatIsIdeate/people.png"
                        className="w-[25vw]"
                    />
                </div>
                <div className="md:col-span-2 text-sm sm:text-base md:text-xl lg:text-2xl 2xl:text-4xl text-justify">
                    Expect <span className="font-bold">10 weeks</span> of brainstorming sessions, rapid prototyping, hands-on mentorship, and the thrill of seeing your concept evolve into 
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