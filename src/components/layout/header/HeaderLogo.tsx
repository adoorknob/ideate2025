import React from "react";

const HeaderLogo: React.FC = () => {
    return (
        <button className="flex text-left font-extrabold uppercase text-white 2xl:text-2xl leading-none w-96">
            <a href="/">
                <p>NUS IDP IDEATE</p>
                <p>2025</p>
            </a>
        </button>
    )
}

export default HeaderLogo