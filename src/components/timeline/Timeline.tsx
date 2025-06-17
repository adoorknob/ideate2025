import React from "react"
import OpeningDay from "./OpeningDay_2"
import OverallTimeline from "./OverallTimeline"

const Timeline: React.FC = () => {
    return (
        <div className="bg-inherit flex flex-col items-center justify-center text-white text-base">
            <OverallTimeline />
            <section id='opening-day'>
                <OpeningDay />
            </section>
        </div>
    )
}

export default Timeline