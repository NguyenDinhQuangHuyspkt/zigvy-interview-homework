import React from 'react'
import FormLogin from '../../features/form/login/FormLogin'

const Home = () => {
  return (
    <div className='bg-gray-500 text-white h-screen grid grid-cols-2 items-center font-quickSand'>
      <h1 className='text-4xl text-center font-bold'>Welcome to ZigTask</h1>

      <FormLogin/>
    </div>
  )
}

export default Home
