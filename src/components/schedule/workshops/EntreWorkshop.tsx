import React from "react"

const EntreWorkshop: React.FC = () => {
    return (
        <div className="flex flex-col items-center text-white font-extrabold px-4 lg:px-16 pt-8 pb-12 px-10 sm:px-20 xl:px-30">
            
            {/* Heading */}
            <p className="uppercase pb-4 lg:pb-8 text-center text-2xl md:text-5xl lg:text-7xl 2xl:text-8xl">
                Building an Innovation Mindset Workshop
            </p>

            {/* Image + text container */}
            <div className="flex flex-col md:flex-row w-full font-normal items-center gap-6">
                
                {/* Image */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                    <img    
                        src="../timeline/entre_workshop.jpg"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text */}
                <div className="flex-1 p-4 lg:p-8 flex flex-col justify-center text-[12px] md:text-xl lg:text-xl 2xl:text-3xl space-y-6">
                    <p className='font-bold'>*All iDEATE participants will be registered automatically</p>
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
        </div>
    )
}

export default EntreWorkshop
