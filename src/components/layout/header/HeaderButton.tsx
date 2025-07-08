import React from 'react';
// import { Link } from 'react-scroll';

type ButtonProps = {
  buttonName: string;
  route: string;
  onClick: () => void;
};

const HeaderButton: React.FC<ButtonProps> = ({ buttonName, route, onClick}) => {
  return (
    <div className="rounded-md px-2 text-sm md:text-base 2xl:text-2xl text-center uppercase
    cursor-pointer px-1 py-1 hover:bg-zinc-700/75 transition" onClick={onClick}>
      <a href= {route}>
        {buttonName}
      </a>
    </div>
  );
};

export default HeaderButton;
