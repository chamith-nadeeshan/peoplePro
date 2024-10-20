import React from 'react'

const NumberCard = ({ title, number, icon, onClick }) => {
  return (
    <div className='border-gray-300 rounded-lg w-60 p-2 bg-[#CACAF8]' onClick={onClick} >
        <div className='flex gap-2 items-center'>
            <div className={`bg-[#1B1D36] flex rounded-full h-8 w-8 items-center justify-center`}>
                <img src={icon} className="w-4 h-4"/>
            </div>
            <p className='text-[14px] font-normal'>{title}</p>
        </div>
        <p className='text-[24px] pt-4 font-medium'>{number}</p>
    </div>
  )
}

export default NumberCard