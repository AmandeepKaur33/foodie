import React, { useState } from 'react'
import Signup from './Components/Signup'
import LoginFoodie from './Components/Login'
import { useAuth } from '../../../Context/Authentication Context/Signup';
// import { useAuth } from '../../../Context/Authentication Context/Signup'

const Form = () => {
  const {state} = useAuth();
  return (
    <div className='w-full h-[80vh] flex items-center justify-center'>
      {state?.isSignUp ? <LoginFoodie  /> : <Signup />}
    </div>
  )
}

export default Form