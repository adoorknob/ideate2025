import React from "react";
import EventTimeline from './EventTimeline.tsx'
import data from './OpeningDayInfo.json';

const OpeningDay: React.FC = () => {

    return (
        <EventTimeline name = "Opening Day" activities={data}/>
    );
};

export default OpeningDay;