import React from "react";
import { Link } from "react-scroll";

type TimelineItemProps = {
    title: React.ReactNode;
    date: React.ReactNode;
    shape: 'circle' | 'triangle' | 'square';
    textColor?: 'blue' | null;
    link?: string | null;
    time?: string | null;
  };
  
  const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, shape, textColor, link, time }) => {
    let markerSource = '../timeline/timeline_circle.png';
    let markerName = 'Timeline Circle';

    if (shape === 'triangle') {
        markerSource = '../timeline/timeline_triangle.png';
        markerName = 'Timeline Triangle';
    } else if (shape === 'square') {
        markerSource = '../timeline/timeline_square.png';
        markerName = 'Timeline Square'
    }
  
    return link? (
        <Link
        to={link}
        smooth={true}
        duration={1000}
        className="cursor-pointer hover:bg-gray-700 hover:bg-opacity-20 rounded transition duration-300 w-full h-32 lg:h-56 grid grid-cols-3"
      >
        <div className={`col-span-1 flex h-full uppercase items-center justify-end ${textColor === 'blue' ? 'text-[#1C34D4]' : ''}`}>
          <p className={`${textColor === 'blue' ? 'blue-text-outline text-white' : 'white-text-outline text-[#1C34D4]'} text-sm xs:text-lg sm:text-2xl lg:text-4xl whitespace-nowrap`}>
            {date}
            {time}
          </p>
        </div>
        <div className='flex col-span-1 justify-center items-center'>
          <img
            src={markerSource}
            alt={markerName}
            className='w-10 h-10 lg:w-20 lg:h-20 object-contain'
          />
        </div>
        <div className={`flex h-full items-center col-span-1 text-left uppercase ${textColor === 'blue' ? 'text-[#1C34D4]' : ''}`}>
          <p className="text-sm xs:text-xl sm:text-3xl lg:text-5xl">
            {title}
          </p>
        </div>
      </Link>
    ) : (
        <div className="w-full h-32 lg:h-56 grid grid-cols-3 ">
        
            <div className={ `col-span-1 flex h-full uppercase items-center justify-end` + (textColor === 'blue' ? ' text-[#1C34D4]' : '')}>
                <p className={(textColor === 'blue' ? 'blue-text-outline text-white ': 'white-text-outline text-[#1C34D4] ') + `text-sm xs:text-lg sm:text-2xl lg:text-4xl whitespace-nowrap`}>
                    {date}
                    {time}
                </p>
            </div>
            
            <div className='flex col-span-1 justify-center items-center'>
                <img
                src={markerSource}
                alt={markerName}
                className='w-10 h-10 lg:w-20 lg:h-20 object-contain'
                />
            </div>
            
            <div className={ `flex h-full items-center col-span-1 text-left uppercase` + (textColor === 'blue' ? ' text-[#1C34D4]' : '')}>
                <p className="text-sm xs:text-xl sm:text-3xl lg:text-5xl">
                    {title}
                </p>
            </div>
    </div>
    );
  };

export default TimelineItem;