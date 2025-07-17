import React from 'react'
import FormRegister from '../../features/form/register'

const Register = () => {
  return (
    <div className='bg-gray-500 text-white h-screen grid grid-cols-2 items-center font-quickSand'>
      <h1 className='text-4xl text-center font-bold'>
        Welcome to ZigTask
      </h1>

      <FormRegister/>
    </div>
  )
}

export default Register
