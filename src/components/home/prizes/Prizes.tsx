import React from "react"

const Prizes: React.FC = () => {
    return (
        <div className="bg-inherit flex flex-col items-center justify-center text-white uppercase text-base">
            <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold">
                prizes:
            </div>
            {/* consolation */}
            <div className="flex flex-col md:grid md:grid-cols-3 place-content-center items-center md:m-10">
                <img 
                    src="../prizes/amongsemis_label_text.png"
                    className="w-[60vw] md:w-[50vw] m-5 justify-self-center"
                />
                <div className="md:col-span-2 w-full grid grid-cols-2 p-5">
                    <div className="w-full grid md:justify-end justify-start">
                        <img 
                            src="../prizes/best_exhibition.png"
                            className="w-[30vw] md:w-[20vw] justify-self-center"
                        />
                    </div>
                    <div className="w-full grid md:justify-start justify-end">
                        <div className="min-h-[8vw]" />
                        <img 
                            src="../prizes/most_sustainable.png"
                            className="w-[30vw] md:w-[20vw] justify-self-center"
                        />
                    </div>
                </div>
            </div>

            {/* all semis */}
            <div className="flex flex-col md:grid md:grid-cols-2 m-10">
                <img 
                    src="../prizes/all_semis_icon.png"
                    className="hidden md:block w-[40vw]"
                />
                <img 
                    src="../prizes/all_semis_text_label.png"
                    className="w-[50vw] md:w-[40vw] self-center"
                />
                <img 
                    src="../prizes/all_semis_icon.png"
                    className="block md:hidden w-[60vw] mt-10"
                />
            </div>

            {/* top3 */}
            <div className="m-10">
                <img
                    src="../prizes/top3.png"
                    className="w-[80vw] md:w-[50vw]"
                />
            </div>
        </div>
    )
}

export default Prizes