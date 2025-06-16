import React from "react"

const Prizes: React.FC = () => {
    return (
        <div className="bg-inherit flex flex-col items-center justify-center text-white uppercase text-base h-screen">
            <div className="text-7xl font-extrabold">
                prizes:
            </div>
            <div className="grid grid-cols-3 place-content-center h-100">
                <img 
                    src="../prizes/amongsemis_label_text.png"
                    className="w-[50vw] justify-self-center self-center"
                />
                <img 
                    src="../prizes/best_exhibition.png"
                    className="w-[20vw] justify-self-center self-start"
                />
                <img 
                    src="../prizes/most_sustainable.png"
                    className="w-[20vw] justify-self-center self-end"
                />
            </div>
        </div>
    )
}

export default Prizes