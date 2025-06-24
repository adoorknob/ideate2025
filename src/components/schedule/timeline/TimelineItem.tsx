import React from "react";
import { Link } from "react-scroll";

type TimelineItemProps = {
  title: React.ReactNode;
  date: React.ReactNode;
  link?: string | null;
  shape: "circle" | "triangle" | "square";
  position: "left" | "right";
  descriptionHeader?:React.ReactNode;
  descriptionContent?:React.ReactNode;
  hasLink?: boolean | false;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, shape, link, position, descriptionHeader, descriptionContent, hasLink }) => {
  const markerSource = `../timeline/timeline_${shape}.png`;
  const markerName = `Timeline ${shape}`;
  const isLeft = position === 'left';

  const content = (
    <div className="group grid grid-cols-[minmax(0,1fr)_15%_minmax(0,1fr)] w-full h-32 lg:h-56 transition duration-300 hover:bg-gray-800/30
    rounded-xl text-sm sm:text-xl md:text-3xl lg:text-5xl leading-tight">
      <div className={`${isLeft ? 'order-1' : 'order-3 text-right'} mx-5 col-span-1 grid content-center justify-center px-4`}>
        <p className="outlined-text text-sm sm:text-base md:text-2xl lg:text-4xl">{date}</p>
        <p>{title}</p>
      </div>
      <div className="relative order-2 col-span-1 grid justify-center items-center">
        {/* <img
          src={markerSource}
          alt={markerName}
          className={`${!hasLink ? 'hidden' : ''} md:hidden absolute justify-self-center w-15 h-15 lg:w-20 lg:h-20 object-contain z-20 animate-ping opacity-75`}
        /> */}
        <img
          src={markerSource}
          alt={markerName}
          className={`${hasLink ? 'animate-pulse' : 'animate-none'} relative w-15 h-15 lg:w-20 lg:h-20 object-contain z-20`}
        />
      </div>

      {/* Description revealed on hover */}
      <div className={`${isLeft ? 'order-3' : 'order-1'} 
      col-span-1 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0`}>
        <div className="grid font-normal p-4 content-center justify-center">
          {descriptionContent}
        </div>
      </div>
    </div>
  );
  

  return link ? (
    <Link
      to={link}
      smooth={true}
      duration={1000}
      className="block w-full cursor-pointer"
    >
      {content}
    </Link>
  ) : (
    content
  );
};

export default TimelineItem;
