import React from 'react';
import { Link } from 'react-scroll';

type ButtonProps = {
  buttonName: string;
  buttonId: string;
  onClick: () => void;
};

const HeaderButton: React.FC<ButtonProps> = ({ buttonName, buttonId, onClick}) => {
  return (
    <div className="rounded-md text-xs md:text-sm lg:text-base xl:text-lg text-center uppercase" onClick={onClick}>
      <Link
        to={buttonId}
        smooth={true}
        duration={1000}
        className="cursor-pointer px-1 py-1 hover:bg-gray-700 rounded transition duration-300"
      >
        {buttonName}
      </Link>
    </div>
  );
};

export default HeaderButton;
