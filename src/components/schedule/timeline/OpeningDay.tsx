import React from "react";
import EventTimeline from './EventTimeline.tsx'
import data from './OpeningDayInfo.json';

const OpeningDay: React.FC = () => {

    return (
        <div>
            <div className="flex flex-col items-start justify-start text-2xl md:text-5xl lg:text-7xl 2xl:text-8xl 
                pt-20 px-4 mt-10 lg:px-16 font-extrabold text-white">
                
                <p className="uppercase">
                    Launch Day - 16th Aug 2025
                </p>
                <p className="font-bold text-[12px] md:text-xl lg:text-xl 2xl:text-3xl">
                    @LT7A, NUS Engineering
                </p>
            </div>

            <EventTimeline activities={data}/>
        </div>

    );
};

export default OpeningDay;