import React from "react";

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
    return (
        <li className="grid grid-cols-12 gap-6 md:gap-8 mt-10">
            <div className="relative col-span-1 justify-center items-center">
                <img
                    src={`../timeline/white_${getShape(index)}.png`}
                    alt='Timeline Shape'
                    className='absolute w-[1.1rem] h-4 mt-[2.5rem] left-0.25'
                />
            </div>
            <div className="col-span-11 lg:col-span-10">
                <p className="outlined-text uppercase text-2xl">{date}</p>
                <h5 className="uppercase font-semibold text-4xl mb-2 leading-tight -mt-2">{title}</h5>
                <p>{description}</p>
            </div>
        </li>
    )
}

export default TimelineListItem