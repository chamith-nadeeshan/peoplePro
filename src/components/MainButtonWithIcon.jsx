import React from "react";

const MainButtonWithIcon = ({
  children,
  onClick,
  type,
  disabled = false,
  IconURL,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="bg-mainColor hover:bg-[#3A5DF3] py-4 flex items-center rounded-2xl text-white font-poppins font-light items-center justify-center h-12 w-48 transition-colors duration-300"
    >
      <div className="flex gap-3 items-center text-[14px]">
        <img src={IconURL} className="h-4 w-4"/>
        {children}
      </div>
    </button>
  );
};

export default MainButtonWithIcon;
