import React from "react"
import TitleText from "./title_text"

const WhatIsIdeate: React.FC = () => {
    return (
        <div className="bg-inherit flex flex-col items-center text-white justify-center w-full text-base h-screen">
            <div className="relative w-full px-20 h-48">
                <TitleText />
            </div>
            <div className="w-full px-20 grid grid-cols-3 gap-4 gap-y-10">
                <div className="col-span-2 text-3xl text-left">
                    blah blah blah history of ideate blah blah blah history of ideate blah blah blah history of ideate
                </div>
                <div className="bg-zinc-700 content-center">
                    insert some image
                </div>
                <div className="bg-zinc-700 content-center">
                    insert some image
                </div>
                <div className="col-span-2 text-3xl text-left">
                    blah blah blah history of ideate blah blah blah history of ideate blah blah blah history of ideate
                </div>
            </div>
        </div>
    )
}

export default WhatIsIdeate