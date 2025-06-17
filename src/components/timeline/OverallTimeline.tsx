import React from "react";
import TimelineItem from "./TimelineItem";

const WhatIsIdeate: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-2xl lg:text-7xl lg:pt-24 pt-16 px-4 lg:px-16 leading-tight">
      <p className="uppercase pb-8 lg:pb-16 align-middle mx-auto">
        What to Expect
      </p>
      <div className="relative flex flex-col w-full items-center justify-center">
        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1 bg-white z-10"></div>
        <div className="z-20 p-2 lg:p-8">
          <TimelineItem 
            title='Opening Day'
            date='17 Aug 2024' 
            shape='circle' 
            link='opening-day'
          />
          <TimelineItem 
            title='Workshops'
            date='Week 1 - Week 2' 
            shape='triangle' 
            link='workshops'
          />
          <TimelineItem 
            title='Preliminary Design Review'
            date='30 Aug 2024' 
            shape='square' 
          />
          <TimelineItem 
            title={
              <span className="text-sm xs:text-xl sm:text-3xl lg:text-5xl">
                <span className="whitespace-nowrap">Semi-Finals </span> 
                <span className="text-xs lg:text-3xl">and </span> 
                Finals
              </span>
            } 
            date='21 Sep 2024' 
            shape='circle' 
            link='semis-and-finals'
          />
        </div>
      </div>
    </div>
  )
};

export default WhatIsIdeate;
