import React from 'react'

const MainButtonWithOutline = ({ children, onClick, type, disabled=false }) => {
  return (
    <button
        type = {type}
        onClick = {onClick}
        disabled = {disabled}
        className="border border-mainColor py-4 px-14 rounded-2xl text-mainColor font-poppins font-light hover:bg-gray-100 transition-colors duration-300"
    >
        {children}
    </button>
  )
}

export default MainButtonWithOutline