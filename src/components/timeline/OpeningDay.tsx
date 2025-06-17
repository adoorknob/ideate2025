import React from "react";
import WhiteTimeline from './WhiteTimeline.tsx'
import data from './OpeningDayInfo.json';

const OpeningDay: React.FC = () => {

    return (
        <WhiteTimeline name = "Opening Day" activities={data}/>
    );
};

export default OpeningDay;