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
};

const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, shape, link, position, descriptionHeader, descriptionContent }) => {
  const markerSource = `../timeline/timeline_${shape}.png`;
  const markerName = `Timeline ${shape}`;
  const isLeft = position === 'left';

  const content = (
    // <div className="flex justify-center">
    <div className="group grid grid-cols-[minmax(0,1fr)_15%_minmax(0,1fr)] w-full h-32 lg:h-56 rounded transition duration-300 hover:bg-gray-800 
    xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
      <div className={`${isLeft ? 'order-1' : 'order-3'} col-span-1 flex flex-col justify-center px-4`}>
        <p className="outlined-text">{date}</p>
        <p>{title}</p>
      </div>
      <div className="order-2 col-span-1 flex justify-center items-center">
        <img
          src={markerSource}
          alt={markerName}
          className="w-15 h-15 lg:w-20 lg:h-20 object-contain z-20"
        />
      </div>

      {/* Description revealed on hover */}
      <div className={`${isLeft ? 'order-3' : 'order-1'} 
      col-span-1 px-4 py-2 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0`}>
        {/* <div className="xs:text-sm  md:text-2xl lg:text-3xl text-sm font-medium">{descriptionHeader}</div> */}
        <div className="font-normal mt-1">
          {descriptionContent}
        </div>
      </div>
    </div>
    // </div>
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
