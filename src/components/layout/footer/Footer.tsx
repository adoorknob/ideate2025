import React from "react";
import ContactUs from "../contactUs/ContactUs";

const Footer: React.FC = () => {
    return (
        <footer className="bg-inherit flex items-center justify-center text-black text-base">
            <ContactUs/>
        </footer>
    )
}

export default Footer