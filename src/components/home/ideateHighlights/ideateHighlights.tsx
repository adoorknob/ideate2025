import React from "react"

const Ideate2024: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white text-base px-10 sm:px-20">
            <div className="title-text">
                <div className="title-firsttext">highlights</div>
                <div className="title-subtext">from 2024</div>
            </div>
            <div className="mt-5 w-full content-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center content-center">
                    <img
                        src="../info/numbers_ideate.png"
                        className="m-5 w-[50vw] lg:w-[28vw] justify-self-center"
                    />
                    <img
                        src="../info/numbers_eureka.png"
                        className="m-5 w-[50vw] lg:w-[28vw] justify-self-center"
                    />
                </div>
            </div>
        </div>
    )
}

export default Ideate2024