import React, { useState } from "react";
import HeaderButton from "./HeaderButton"; // Correct import for HeaderButton
import { twMerge } from "tailwind-merge";
import HeaderLogo from "./HeaderLogo";

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
    <header className={twMerge("fixed top-0 left-0 w-full bg-zinc-800 text-white font-extrabold p-4 flex justify-between items-center z-50 transition-all")}>
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
        <div className={twMerge("invisible lg:visible")}>
          <HeaderLogo />
        </div>
        <nav
          className={twMerge(
            "overflow hidden lg:flex gap-4 mt-4 md:mt-0 content-center justify-end w-full md:mx-auto",
            isSidebarOpen && "flex-col flex"
          )}
        >
          {/* Routing done by putting url in route */}
          <HeaderButton buttonName="Home" route="/" onClick={turnOffSidebar}/>
          <HeaderButton buttonName="About" route="/about" onClick={turnOffSidebar}/>
          <HeaderButton buttonName="Schedule" route="/schedule" onClick={turnOffSidebar}/>
          <HeaderButton buttonName="FAQ" route="/faq" onClick={turnOffSidebar}/>        
          <HeaderButton buttonName="Submissions" route="/submissions" onClick={turnOffSidebar}/>  
          <HeaderButton buttonName="Resources" route="/resources" onClick={turnOffSidebar}/>  
        </nav>
      </div>
    </header>
  );
};

export default Header;
