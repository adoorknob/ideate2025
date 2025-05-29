import React, { useState } from "react";
import HeaderButton from "./HeaderButton"; // Correct import for HeaderButton
import { twMerge } from "tailwind-merge";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const turnOffSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    } 
  }

  return (
    <header className={twMerge("fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center z-50 transition-all")}>
      <div className={twMerge("flex items-center w-full",isSidebarOpen && 'flex-col')}>
        <button
          className={twMerge("text-white focus:outline-none w-full lg:hidden")}
          onClick={toggleSidebar}
        >
          <svg
            className={twMerge("w-6 h-6", isSidebarOpen && "mx-auto")}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <nav
          className={twMerge(
            "overflow hidden lg:flex gap-4 mt-4 md:mt-0 content-center md:mx-auto",
            isSidebarOpen && "flex-col flex w-full"
          )}
        >
          <HeaderButton buttonName="Home" buttonId="hero" onClick={turnOffSidebar}/>
          <HeaderButton buttonName="About" buttonId="what-is-ideate" onClick={turnOffSidebar}/>
          <HeaderButton buttonName="Sponsors" buttonId="sponsor" onClick={turnOffSidebar}/>
          <HeaderButton buttonName="Theme" buttonId="theme" onClick={turnOffSidebar}/>
          <HeaderButton buttonName="Judges" buttonId="judges" onClick={turnOffSidebar}/>
          <HeaderButton buttonName="Mentors" buttonId="mentors" onClick={turnOffSidebar}/>
          <HeaderButton buttonName="Prizes" buttonId="prizes" onClick={turnOffSidebar}/>
          <HeaderButton buttonName="Timeline" buttonId="timeline2" onClick={turnOffSidebar}/>
          <HeaderButton buttonName="Workshops" buttonId="workshops" onClick={turnOffSidebar}/>
          <HeaderButton buttonName="Venue" buttonId="venue" onClick={turnOffSidebar}/>
          <HeaderButton buttonName="FAQ" buttonId="faq" onClick={turnOffSidebar}/>
          <HeaderButton buttonName="Register" buttonId="register-now" onClick={turnOffSidebar}/>
          <HeaderButton buttonName="Contact Us" buttonId="contact-us" onClick={turnOffSidebar}/>
        </nav>
      </div>
    </header>
  );
};

export default Header;
