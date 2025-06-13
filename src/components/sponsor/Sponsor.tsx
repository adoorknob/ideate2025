import React from "react"

const Sponsor: React.FC = () => {
    return (
        <div className="bg-inherit items-center text-white w-full text-base min-h-screen">
            <div className="uppercase font-bold m-20">
                <div className="flex relative text-7xl text-left w-full h-35 my-5">
                    <div>
                        co-
                    </div>
                    <div className="absolute text-nowrap left-14 top-15">
                        organised by:
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 content-center items-center justify-between bg-white rounded-3xl">
                    <img 
                        src="../sponsors/cde_logo.png"
                        className="w-[25vw] m-10 self-center justify-self-center"
                    />
                    <img 
                        src="../sponsors/enterprise.png"
                        className="w-[30vw] m-5 justify-self-center"
                    />
                    <img 
                        src="../sponsors/idpsc.avif"
                        className="w-[10vw] m-5 justify-self-center col-span-2"
                    />
                </div>
                <div className="flex relative text-7xl text-left w-full h-35 my-5">
                    <div>
                        supported
                    </div>
                    <div className="absolute text-nowrap left-92 top-15">
                        by:
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 content-center items-center justify-between bg-white rounded-3xl">
                    <img 
                        src="../sponsors/cde_logo.png"
                        className="w-[25vw] m-10 self-center justify-self-center"
                    />
                    <img 
                        src="../sponsors/enterprise.png"
                        className="w-[30vw] m-5 justify-self-center"
                    />
                </div>
            </div>
        </div>
    )
}

export default Sponsor