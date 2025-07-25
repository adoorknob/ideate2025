import React from "react"

const Sponsor: React.FC = () => {
    return (
        <div className="bg-inherit items-center text-white w-full text-base">
            <div className="uppercase font-bold m-10 sm:m-20">
                <div className="flex relative text-3xl md:text-5xl lg:text-7xl text-left w-full h-15 md:h-20 lg:h-35 my-5">
                    <div>
                        co-
                    </div>
                    <div className="absolute text-nowrap top-6 left-6 md:left-9 md:top-10 lg:left-14 lg:top-15">
                        organised by:
                    </div>
                </div>

                <div className="w-full normal-text text-right italic">
                    CDE Innovation and Design Programme Students' Club
                    <br />
                    CDE Research and Technology Office
                    <br />
                    NUS Enterprise
                </div>

                {/* <div className="w-full flex flex-col md:grid md:grid-cols-2 content-center items-center justify-between bg-white rounded-3xl">
                    <img 
                        src="../sponsors/cde_logo.png"
                        className="w-[50vw] sm:w-[40vw] md:w-[25vw] m-10 self-center justify-self-center"
                    />
                    <img 
                        src="../sponsors/enterprise.png"
                        className="w-[60vw] sm:w-[48vw] md:w-[30vw] m-5 self-center justify-self-center"
                    />
                    <img 
                        src="../sponsors/idpsc.avif"
                        className="w-[25vw] sm:w-[20vw] md:w-[15vw] m-5 self-center justify-self-center col-span-2"
                    />
                </div> */}
            </div>
            {/* supported by */}
            {/* <div className="uppercase font-bold m-10 sm:m-20">
                <div className="flex relative text-3xl md:text-5xl lg:text-7xl text-left w-full h-15 md:h-20 lg:h-35 my-5">
                    <div>
                        supported
                    </div>
                    <div className="absolute text-nowrap top-6 left-39 md:top-10 md:left-62 lg:left-92 lg:top-15">
                        by:
                    </div>
                </div>
                <div className="w-full flex flex-col md:grid md:grid-cols-2 content-center items-center justify-between bg-white rounded-3xl">
                    <img 
                        src="../sponsors/astar.png"
                        className="w-[40vw] md:w-[25vw] m-10 self-center justify-self-center"
                    />
                    <img 
                        src="../sponsors/medtronic.webp"
                        className="w-[35vw] md:w-[20vw] m-10 justify-self-center"
                    />
                </div>
            </div> */}
        </div>
    )
}

export default Sponsor