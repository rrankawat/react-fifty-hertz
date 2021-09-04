import React from 'react'
import { useHistory } from 'react-router'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import AuthLayout from '../../layouts/AuthLayout'

const LoginScreen = () => {
  const history = useHistory()

  const onSubmit = e => {
    e.preventDefault()

    // Validation Logic

    // Redirect
    history.push('/users')
  }

  return (
    <AuthLayout>
      <div className='auth-container'>
        <form onSubmit={onSubmit}>
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
