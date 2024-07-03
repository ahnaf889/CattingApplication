import React from 'react'
import HomeLeft from '../../Components/HomeComponents/HomeLeft/HomeLeft.jsx'
import HomeRight from '../../Components/HomeComponents/HomeRight/HomeRight'

const Home = () => {
  return (
    <>
    <div className='mt-96 flex h-screen p-9 items-center justify-between'>
        <HomeLeft/>
        <HomeRight/>
    </div>
    </>
  )
}

export default Home