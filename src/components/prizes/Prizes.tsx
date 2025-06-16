import React from "react"

const Prizes: React.FC = () => {
    return (
        <div className="bg-inherit flex flex-col items-center justify-center text-white uppercase text-base h-screen">
            <div className="text-7xl font-extrabold">
                prizes:
            </div>
            <div className="grid grid-cols-3 place-content-center">
                <img 
                    src="../prizes/amongsemis_label_text.png"
                    className="w-[50vw] justify-self-center"
                />
                <img 
                    src="../prizes/best_exhibition.png"
                    className="w-[25vw] justify-self-center"
                />
                <img 
                    src="../prizes/most_sustainable.png"
                    className="w-[25vw] justify-self-center"
                />
            </div>
        </div>
    )
}

export default Prizes