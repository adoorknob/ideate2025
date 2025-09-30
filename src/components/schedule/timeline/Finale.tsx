import React from "react";
import EventTimeline from './EventTimeline.tsx'
import data from './FinaleInfo.json';

const Finale: React.FC = () => {

    return (
        <div>
            <div className="flex flex-col items-start justify-start text-2xl md:text-5xl lg:text-7xl 2xl:text-8xl 
                pt-20 px-4 mt-10 lg:px-16 font-extrabold text-white">
                
                <p className="uppercase">
                    Finale - 15th Oct 2025
                </p>
                <p className="font-bold text-[12px] md:text-xl lg:text-xl 2xl:text-3xl">
                    @EA Foyer & LT7A, NUS Engineering
                </p>
            </div>
           <div className="flex flex-col lg:flex-row w-full px-4 lg:p-8 text-white">
            
                {/* Left side: event details */}
                <div className="basis-2/5">
                    <div className="flex-1 p-4 lg:p-8 flex flex-col justify-center text-[12px] md:text-xl lg:text-xl 2xl:text-3xl space-y-6">
                    <p className='font-bold'>Vote for your favourite projects & stand to win an iPhone 17 & more from our exciting lucky draw!</p>
                    <div className="uppercase space-y-2">
                        <p>Date: 20 August 2025 (Wed)</p>
                        <p>Time: 3pm – 6pm</p>
                        <p>Venue: Auditorium (Level 1), i3 Building</p>
                    </div>

                    <div className="space-y-4">
                        <p>💡 Ideas to Innovation – Learn what it takes to think and act like an entrepreneur.</p>
                        <p>🔥 Passion in Action – Hear from VC leaders and founders on how to bring ideas to life.</p>    
                        <p>🧩 Creative Problem-Solving – Interactive puzzle challenges that spark innovation.</p>
                    </div>
                    </div>
                </div>

                {/* Right side: EventTimeline */}
                <div className="flex-1">
                    <EventTimeline activities={data}/>
                </div>
            </div>


        </div>

    );
};

export default Finale;