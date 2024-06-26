import React from 'react'
import registrationRightImg from '../../assets/RegistrationAssets/Loging.png'

const RegistrationRight = () => {
  return (
    <>
    <div className='w-[40%]'>
    <picture>
        <img src={registrationRightImg} alt={registrationRightImg} className='h-screen w-full'/>
    </picture>
    </div>
    </>
  )
}

export default RegistrationRight