import React from "react";

const TempPage: React.FC = () => {
    return (
        <div className="relative w-full h-full overflow-hidden"> 
            <img 
                src="/full_bg_1920.png"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-3xl font-bold"> IDEATE will be back. </h1>
            </div>
        </div>
    )
}

export default TempPage;