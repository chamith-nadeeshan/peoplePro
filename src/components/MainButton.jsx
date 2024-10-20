import React from "react";

const MainButton = ({ children, onClick, type, disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="bg-mainColor hover:bg-[#3A5DF3] py-4 px-14 rounded-2xl text-white font-poppins font-light transition-colors duration-300"
    >
      {children}
    </button>
  );
};

export default MainButton;
