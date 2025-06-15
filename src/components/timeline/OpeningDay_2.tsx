import React from "react";
import data from './OpeningDayInfo.json';

interface DataItem {
    id: number;
    time?: string | null;
    timeStart: string;
    timeEnd: string;
    description: string;
};

const typedData: DataItem[] = data;

const OpeningDay: React.FC = () => {

    return (
        <div className="flex flex-col items-center justify-center gap-x-4 text-2xl lg:text-7xl lg:pt-16 pt-8 pb-12 min-h-[50vh] gap-y-8 px-4 lg:px-8">
            <p className="uppercase pt-20 pb-4 lg:pb-8">
                Opening Day
            </p>
            <div className="relative flex flex-col items-center justify-center">
                <div className="absolute h-full left-1/2 transform -translate-x-1/2 w-1 bg-white rounded-md z-20" />
                <div className="font-poppins w-3/4 z-30">
                    {typedData.map(item => (
                        <div key={item.id} className="h-16 grid grid-cols-5 m-20">

                            {/* <div className="col-span-1" />
                            <div className="col-span-1 flex items-center w-full grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 text-base xs:text-sm lg:text-2xl">
                                <h2 className="text-center lg:text-right">{item.timeStart}</h2>
                                <h2 className="text-center">
                                    <span className="block lg:hidden">|</span>
                                    <span className="hidden lg:block">-</span>
                                </h2>
                                <h2 className="text-center lg:text-left">{item.timeEnd}</h2>
                            </div> */}

                            <div className="col-span-2 flex flex-col justify-center items-center w-full text-base xs:text-sm lg:text-2xl">
                                {item.time}
                            </div>


                            <div className="col-span-1 flex items-center justify-center col-span-1">
                                {(item.id % 3 == 1) && 
                                    <img
                                        src='../timeline/white_circle.png'
                                        alt='Timeline Circle'
                                        className='w-3 h-3 lg:w-6 lg:h-6 object-contain'
                                    />
                                }
                                {(item.id % 3 == 2) && 
                                    <img
                                        src='../timeline/white_triangle.png'
                                        alt='Timeline Triangle'
                                        className='w-3 h-3 lg:w-6 lg:h-6 object-contain'
                                    />
                                }
                                {(item.id % 3 == 0) && 
                                    <img
                                        src='../timeline/white_square.png'
                                        alt='Timeline Square'
                                        className='w-3 h-3 lg:w-6 lg:h-6 object-contain'
                                    />
                                }
                            </div>
                            <p className="col-span-2 text-base xs:text-sm lg:text-3xl flex items-center">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OpeningDay;