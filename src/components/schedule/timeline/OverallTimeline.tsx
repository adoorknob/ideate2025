import React from "react";
import TimelineItem from "./TimelineItem";

//vertical relationship

const getShape = (id: number): string => {
  const mod = id % 3;
  if (mod === 1) return 'circle';
  if (mod === 2) return 'triangle';
  return 'square';
};


const timelineData = [
  {
    title: 'Opening Day',
    date: '17 Aug 2024',
    color: true,
    link: 'opening-day',
  },
  {
    title: 'Workshops',
    date: 'Week 1 - Week 2',
    color: true,
    link: 'workshops',
  },
  {
    title: 'Preliminary Design Review',
    date: '30 Aug 2024',
    color: true,
  },
  {
    title: (
      <span className="text-sm xs:text-xl sm:text-3xl lg:text-5xl">
        <span className="whitespace-nowrap">Semi-Finals </span> 
        <span className="text-xs lg:text-3xl">and </span> 
        Finals
      </span>
    ),
    date: '21 Sep 2024',
    color: true,
    link: 'semis-and-finals',
  },
];



const OverallTimeline: React.FC = () => {
  
  return (
    <div className="flex flex-col items-center text-2xl pt-16 px-4 lg:px-16 leading-tight text-white font-extrabold">
      <p className="lg:text-7xl lg:pt-24 uppercase pb-8 lg:pb-16 align-middle mx-auto">
        What to Expect
      </p>
      <div className="relative flex items-center justify-center">
          <div className="absolute h-full left-1/2 transform -translate-x-1/2 w-1 bg-white rounded-md z-10" />  
          <div className="font-poppins w-3/4">
          {timelineData.map((item, index) => (
            <div key={index}>
              {
                <TimelineItem 
                  title={item.title}
                  date={item.date}
                  shape= {getShape(index)}
                  link={item.link}
                  position={index % 2 == 1 ? 'left': 'right'}
                />
              }
            </div>
        ))}
        </div>
      </div>
    </div>
  )
};

export default OverallTimeline;
