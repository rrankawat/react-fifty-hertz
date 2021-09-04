import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { FaUserAlt, FaLock } from 'react-icons/fa'

const LoginScreen = () => {
  return (
    <AuthLayout>
      <div className='auth-container'>
        <form>
          <div className='auth-form-group'>
            <FaUserAlt size={10} />
            <input
              type='text'
              className='auth-form-control bg-light-blue mb-1'
              placeholder='Username'
            />
          </div>

          <div className='auth-form-group'>
            <FaLock size={10} />
            <input
              type='text'
              className='auth-form-control bg-light-blue mb-2'
              placeholder='Password'
            />
          </div>

          <input
            type='submit'
            value='LOGIN'
            className='auth-form-control bg-pink'
          />
        </form>
      </div>
    </AuthLayout>
  )
}

export default LoginScreen
