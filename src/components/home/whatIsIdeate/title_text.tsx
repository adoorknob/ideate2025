import React from "react"

const TitleText: React.FC = () => {
    return (
        <div className="font-extrabold uppercase text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
            <p className="absolute md:top-10 h-auto">
                What is
            </p>
            <p className="absolute top-6 left-35 sm:top-10 sm:left-60 md:top-22 lg:top-25 md:left-70 lg:left-81 xl:top-35 xl:left-128 h-auto">
                IDEATE?
            </p>
        </div>
    )
}

export default TitleText