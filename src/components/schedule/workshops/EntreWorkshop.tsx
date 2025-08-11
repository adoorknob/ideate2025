import React from "react"


const EntreWorkshop: React.FC = () => {
    return (
         <div className="flex flex-col items-center justify-center gap-x-4 text-2xl md:text-5xl lg:text-7xl 2xl:text-8xl lg:pt-16 pt-8 pb-12 min-h-[50vh] gap-y-8 px-4
        lg:px-16 text-white font-extrabold">
            <p className="uppercase pt-20 pb-4 lg:pb-8">
                Building an Innovation Mindset Workshop
            </p>
            

            <div className="flex min-h-screen font-normal">
                <div className="overflow-hidden flex">
                    <div className="w-1/3">
                        <img    
                        src="../timeline/entre_workshop.jpg"
                        className={`w-full`}
                         />
                    </div>

                    <div className="flex-1 w-1/2 p-8 flex flex-col justify-center
                    text-[12px] md:text-xl lg:text-xl 2xl:text-3xl">
                    
                    <div className="uppercase pt-20 pb-4 lg:pb-8">
                        <p> Date: 20 August 2025 (Wed) </p>
                        <p> Time: 3pm – 6pm</p>
                        <p> Venue: Auditorium (Level 1), i3 Building</p>
                    </div>
                    <div>
                        <p>
                            💡 Ideas to Innovation – Learn what it takes to think and act like an entrepreneur.
                        </p>
                        <p>
                            🔥 Passion in Action – Hear from VC leaders and founders on how to bring ideas to life.
                        </p>    
                        <p>
                            🧩 Creative Problem-Solving – Interactive puzzle challenges that spark innovation.
                        </p>
                    </div>
                            
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default EntreWorkshop