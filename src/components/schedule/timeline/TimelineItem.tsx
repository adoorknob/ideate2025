import React from "react";
import { Link } from "react-scroll";

type TimelineItemProps = {
  title: React.ReactNode;
  date: React.ReactNode;
  link?: string | null;
  shape: "circle" | "triangle" | "square";
  position: "left" | "right";
};

const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, shape, link, position }) => {
  const markerSource = `../timeline/timeline_${shape}.png`;
  const markerName = `Timeline ${shape}`;
  const isLeft = position === 'left';

  const content = (
    <div className="group grid grid-cols-3 w-full h-32 lg:h-56 rounded transition duration-300 hover:bg-gray-800 overflow-hidden">
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
        <h4 className="text-sm font-semibold">Detailed Description</h4>
        <p className="text-sm text-muted-foreground mt-1">
          This is the additional information shown when hovering.
        </p>
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
