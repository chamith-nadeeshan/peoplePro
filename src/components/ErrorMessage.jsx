import React from 'react'

const ErrorMessage = ({ message }) => {
  return (
    <div className='bg-errorBoxBg h-10 rounded-lg items-center flex pl-5 mb-5'>
        <p className='text-errorTxtColor'>
            {message}
        </p>
    </div>
  )
}

export default ErrorMessage