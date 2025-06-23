import React from "react";
import TimelineItem from "./TimelineItem";
import Venue from "../venue/Venue"

//vertical relationship

type Shape = "triangle" | "circle" | "square";

const getShape = (id: number): Shape => {
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
    descriptionHeader:'',
    descriptionContent:(
      <div className="grid text-xs sm:text-sm md:text-xl lg:text-2xl m-2 gap-2">
        <div className="flex items-center space-x-2 md:py-1 lg:py-2">
          <img src="../timeline/locationIcon.png"
          className="w-5 h-5 lg:w-10 lg:h-10 object-contain z-20">
          </img>
          <span className="fit-content leading-4 md:leading-normal md:whitespace-nowrap">NUS Engineering LT7A</span>
        </div>
        <div className="flex items-center space-x-2 md:py-1 lg:py-2">
          <img src="../timeline/schedule.png"
          className="w-5 h-5 lg:w-10 lg:h-10 object-contain z-20">
          </img>
          <span>0945-500</span>
        </div>
      </div>
    )
  },
  {
    title: 'Workshops',
    date: 'Week 1 - Week 2',
    color: true,
    // link: 'workshops',
    descriptionHeader:null,
    descriptionContent:(
      <div>
        <p className="hidden md:block md:text-sm lg:text-xl xl:text-2xl overflow-hidden text-ellipses">
          A series of Entrepreneurship, Design Thinking, and Technical Workshops designed to equip you with the skills bring your ideas to life.
        </p>
      </div>
    )
  },
  {
    title: (
      <div className="md:leading-7 lg:leading-12">
        Preliminary Design Review
      </div>
    ),
    date: '30 Aug 2024',
    color: true,
    link: null,
    descriptionHeader:null,
    descriptionContent:null
  },
  {
    title: (
      <div>
        <span className="whitespace-nowrap">Semi-Finals </span> 
        <span className="text-xs sm:text-lg">and </span> 
        Finals
      </div>
    ),
    date: '21 Sep 2024',
    color: true,
    // link: 'semis-and-finals',
    descriptionHeader:null,
    descriptionContent:null
  },
];



const OverallTimeline: React.FC = () => {
  
  return (
    <div className="flex flex-col items-center text-2xl pt-16 px-4 lg:px-16 text-white font-extrabold">
      <p className="lg:text-7xl md:text-6xl text-4xl lg:pt-24 uppercase pb-8 lg:pb-16 align-middle mx-auto">
        What to Expect
      </p>
      <div className="relative flex items-center justify-center">
          <div className="absolute h-full left-1/2 transform -translate-x-1/2 w-1 bg-white rounded-md z-10" />  
          <div className="font-poppins w-4/5">
          {timelineData.map((item, index) => (
            <div key={index}>
              {
                <TimelineItem 
                  title={item.title}
                  date={item.date}
                  shape= {getShape(index)}
                  link={item.link}
                  position={index % 2 == 1 ? 'left': 'right'}
                  descriptionHeader={item.descriptionHeader}
                  descriptionContent={item.descriptionContent}
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
