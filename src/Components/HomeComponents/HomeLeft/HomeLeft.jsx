import React from 'react'
import HomeProfile from '../../../assets/HomeAssets/HomeAssetsLeft/HomeProfile.gif'
import HomeHome from '../../../assets/HomeAssets/HomeAssetsLeft/HomeHome.gif'
import HomeChat from '../../../assets/HomeAssets/HomeAssetsLeft/HomeChat.gif'
import HomeNotification from '../../../assets/HomeAssets/HomeAssetsLeft/HomeNotification.gif'
import HomeSetting from '../../../assets/HomeAssets/HomeAssetsLeft/HomeSetting.gif'
import HomeLogout from '../../../assets/HomeAssets/HomeAssetsLeft/HomeSignout.png'

const HomeLeft = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-red-200 to-purple-500 w-[186px] h-full flex flex-col items-center justify-center rounded-2xl'>
      <div>
        <picture>
          <img src={HomeProfile} alt={HomeProfile} />
        </picture>
      </div>
      <div className='justify-center items-center flex flex-col gap-y-[60px]'>
      <div className='w-full bg-white px-14 rounded-l-xl py-5 iconShodos'>
        <picture>
          <img src={HomeHome} alt={HomeHome} className=' mix-blend-multiply' />
        </picture>
      </div>
      <div>
        <picture>
          <img src={HomeChat} alt={HomeChat} className='mix-blend-multiply' />
        </picture>
      </div>
      <div>
        <picture>
          <img src={HomeNotification} alt={HomeNotification} className='mix-blend-multiply' />
        </picture>
      </div>
      <div>
        <picture>
          <img src={HomeSetting} alt={HomeSetting} className='mix-blend-multiply' />
        </picture>
      </div>
      <div>
        <picture>
          <img src={HomeLogout} className='text-4xl' alt={HomeLogout} />
        </picture>
      </div>
      </div>
    </div>
    </>
  )
}

export default HomeLeft