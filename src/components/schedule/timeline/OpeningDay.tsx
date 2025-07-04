import React from "react";
import EventTimeline from './EventTimeline.tsx'
import data from './OpeningDayInfo.json';

const OpeningDay: React.FC = () => {

    return (
        <EventTimeline name = "Launch Day - 16th Aug 2025" activities={data}/>
    );
};

export default OpeningDay;