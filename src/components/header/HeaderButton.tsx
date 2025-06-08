import React from 'react';
// import { Link } from 'react-scroll';

type ButtonProps = {
  buttonName: string;
  route: string;
  onClick: () => void;
};

const HeaderButton: React.FC<ButtonProps> = ({ buttonName, route, onClick}) => {
  return (
    <div className="rounded-md text-xs md:text-sm lg:text-base xl:text-lg text-center uppercase
    cursor-pointer px-1 py-1 hover:bg-gray-700 transition" onClick={onClick}>
      <a href= {route}>
        {buttonName}
      </a>
    </div>
  );
};

export default HeaderButton;
