import React from "react";
import { Link } from "react-scroll";

type timelineItemProps = {
    title: string,
    date: string,
    description: string,
    link?: string | null,
    index: number,
}


type Shape = "triangle" | "square" | "circle";

const getShape = (index : number) : Shape => {
    switch (index % 3) {
        case 1: return "circle"
        case 2: return "triangle"
        default: return "square"
    }
}

const TimelineListItem : React.FC<timelineItemProps> = ({ title, date, description, link, index }) => {
    const content = (
        <li key={title} className="relative z-10 grid grid-cols-12 gap-6 md:gap-8 mt-10 ">
            <div className="relative col-span-3 lg:col-span-1 justify-center items-center">
                <img
                    src={`../timeline/white_${getShape(index)}.png`}
                    alt='Timeline Shape'
                    className='absolute h-4 2xl:h-8 mt-[1rem] md:mt-[2.5rem] left-[8.5px] md:left-0.25 2xl:left-4'
                />
            </div>
            <div className={`col-span-9 lg:col-span-10 ${ link ? `hover:text-blue-200 hover:translate-x-10 transition duration-300 ease-in-out`: ``}`}>
                <div className="grid grid-cols-9 group">
                    <div className="col-span-8">
                        <p className="outlined-text uppercase text-base lg:text-2xl 2xl:text-4xl">{date}</p>
                        <h5 className="uppercase font-semibold text-xl lg:text-4xl 2xl:text-6xl mb-2 leading-tight -mt-2">{title}</h5>
                        <p className="2xl:text-4xl">{description}</p>
                    </div>
                    <div className={`col-span-1 grid items-center justify-end ${ link ? `visible` : `hidden` }`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5 md:w-20 md:h-20 text-white group-hover:text-blue-200"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </li>
    )

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
        
    
}

export default TimelineListItem