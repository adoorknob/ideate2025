import React from "react"

const Prizes: React.FC = () => {
    return (
        <div className="bg-inherit flex flex-col items-center justify-center text-white uppercase text-base">
            <div className="text-7xl font-extrabold">
                prizes:
            </div>
            {/* consolation */}
            <div className="grid grid-cols-3 place-content-center m-10">
                <img 
                    src="../prizes/amongsemis_label_text.png"
                    className="w-[50vw] justify-self-center self-center"
                />
                <img 
                    src="../prizes/best_exhibition.png"
                    className="w-[20vw] justify-self-center self-start"
                />
                <div>
                    <div className="h-[8vw]" />
                    <img 
                        src="../prizes/most_sustainable.png"
                        className="w-[20vw] justify-self-center self-end"
                    />
                </div>
            </div>

            {/* all semis */}
            <div className="grid grid-cols-2 m-10">
                <img 
                    src="../prizes/all_semis_icon.png"
                    className="w-[40vw]"
                />
                <img 
                    src="../prizes/all_semis_text_label.png"
                    className="w-[40vw] self-center"
                />
            </div>

            {/* top3 */}
            <div className="m-10">
                <img
                    src="../prizes/top3.png"
                    className="w-[50vw]"
                />
            </div>
        </div>
    )
}

export default Prizes