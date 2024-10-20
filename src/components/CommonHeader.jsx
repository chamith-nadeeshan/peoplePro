import React from 'react'
import MainButtonWithIcon from './MainButtonWithIcon'

import addIcon from "../assets/add.png"
import wavingIcon from "../assets/waving-handIcon.png"
import kingIcon from "../assets/KingImg.png"

const CommonHeader = ({loggedUserFirstName}) => {
  return (
    <div className='bg-[#A7CCE8] flex justify-between h-24 rounded-xl items-center px-4'>
        <div>
            <div className='flex items-center gap-3'>
                <img src={wavingIcon} className="h-6 w-6"  />
                <p className='font-medium text-[20px]'>Hello, {loggedUserFirstName}</p>
            </div>
            <div className='flex items-center gap-3'>
                <p className='font-light'>You're Amazing. You Doing Great !</p>
                <img src={kingIcon} className="h-6 w-6"/>
            </div>
            
        </div>
        <div className='self-end mb-4'>
        <MainButtonWithIcon
            disabled={false}
            IconURL={addIcon}
        >
            Create Request
        </MainButtonWithIcon>
        </div>
    </div>
  )
}

export default CommonHeader