import React from "react"

const WhatIsIdeate: React.FC = () => {
    return (
        <div className="bg-inherit flex flex-col items-center text-white justify-center w-full text-base px-10 sm:px-20 xl:px-30">
            <div className="title-text">
                <p className="title-firsttext">
                    What is
                </p>
                <p className="title-subtext">
                    IDEATE?
                </p>
            </div>
            <div className="w-full  md:grid md:grid-cols-3 gap-4 gap-y-10">
                <div className="col-span-2 normal-text text-left">
                    <p className="text-justify">
                        IDEATE isn’t just a competition—it’s a launchpad for innovative solutions with real-world potential.
                        Open to <span className="font-bold">all NUS students</span>, this challenge brings together passionate 
                        teams who dare to imagine, build, and solve. 
                        You bring the idea—we provide the space to explore it, question it, build it, and bring it to life. 
                        <br />
                        <br />
                        With an <span className="font-bold">Open Theme</span>, IDEATE welcome bold ideas from all disciplines.
                        Sign up as <span className="font-bold">individuals</span> or <span className="font-bold">teams of 3-5</span> {" "}  
                        and pitch your ideas for a chance to be one of the <span className="font-bold">16 semi-finalist teams</span>.
                    </p>
                </div>
                <div className="hidden md:grid items-center">
                    <img
                        src="../whatIsIdeate/balancing.png"
                        className="w-[10vw] xl:w-[8vw] justify-self-center"
                    />
                </div>
                <div className="grid content-center p-5 justify-center h-auto">
                    <img
                        src="../whatIsIdeate/people.png"
                        className="w-[20vw]"
                    />
                </div>
                <div className="md:col-span-2 text-sm sm:text-base md:text-xl lg:text-2xl 2xl:text-3xl text-justify">
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