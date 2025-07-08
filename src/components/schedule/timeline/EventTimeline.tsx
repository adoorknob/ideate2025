import React from "react";

export interface Activity {
    id: number;
    timeStart: string;
    timeEnd: string;
    description: string;
    color?:boolean;
};


type timelineProps = {
  name: string;
  activities: Activity[];
};

const getShape = (id: number): string => {
  const mod = id % 3;
  if (mod === 1) return 'circle';
  if (mod === 2) return 'triangle';
  return 'square';
};

const pickShape = (item: Activity) => {
    const shape = getShape(item.id);
    const color = item.color?'color':'white'; // 'red', 'blue', etc.
    return `../timeline/${color}_${shape}.png`
}



const EventTimeline = ({ name, activities }: timelineProps) => {


    return (
        <div className="flex flex-col items-center justify-center gap-x-4 text-2xl md:text-5xl lg:text-7xl 2xl:text-8xl lg:pt-16 pt-8 pb-12 min-h-[50vh] gap-y-8 px-4
        lg:px-16 text-white font-extrabold">
            <p className="uppercase pt-20 pb-4 lg:pb-8">
                {name}
            </p>
            <div className="relative flex flex-col items-center justify-center">
                <div className="absolute h-full left-1/2 transform -translate-x-1/2 w-1 2xl:w-2 bg-white rounded-md z-20" />
                <div className="font-normal w-3/4 z-30">
                    {activities.map(item => (
                        <div key={item.id} className="h-16 grid grid-cols-5 m-5 sm:m-20">
                            <div className="col-span-2 flex flex-col justify-center items-center w-full text-base xs:text-sm md:text-xl lg:text-2xl 2xl:text-4xl whitespace-nowrap">
                                {item.timeStart} - {item.timeEnd}
                            </div>

                            <div className="col-span-1 flex items-center justify-center">
                            {
                                <img
                                    src={pickShape(item)}
                                    alt='Timeline Shape'
                                    className='w-3 h-3 lg:w-6 lg:h-6 2xl:h-10 2xl:w-10 object-contain'
                                />
                            }
                            </div>
                            <p className="col-span-2 text-base xs:text-sm md:text-2xl lg:text-3xl 2xl:text-5xl flex items-center">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventTimeline;