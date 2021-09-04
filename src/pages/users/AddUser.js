import React from 'react'
import MainLayout from '../../layouts/MainLayout'

const AddUser = () => {
  return (
    <MainLayout>
      <form>
        <section className='panel mb-1'>
          <div className='mb-1'>
            <label htmlFor='fullName'>Full Name:</label>
            <input
              type='text'
              className='form-control'
              name='fullName'
              placeholder='Enter Full Name'
            />
          </div>

          <div className='mb-1'>
            <label htmlFor='fullName'>Email:</label>
            <input
              type='text'
              className='form-control'
              name='email'
              placeholder='Email'
            />
          </div>

          <div className='mb-1'>
            <label htmlFor='fullName'>Password:</label>
            <input
              type='password'
              className='form-control'
              name='fullName'
              placeholder='Enter password'
            />
          </div>

          <div className='mb-1'>
            <label htmlFor='fullName'>Mobile:</label>
            <input
              type='text'
              className='form-control'
              name='fullName'
              placeholder='Enter Mobile'
            />
          </div>
        </section>

        <section className='panel'>
          <div className='mb-2'>
            <label htmlFor='gender'>Gender:</label>
            <div className='mt-1'>
              <input type='radio' name='gender' value='male' /> Male
              <input type='radio' name='gender' value='female' /> Female
            </div>
          </div>

          <div className='mb-2'>
            <label htmlFor='language'>Language:</label>
            <div className='mt-1'>
              <input type='checkbox' /> Hindi
              <input type='checkbox' /> English
            </div>
          </div>

          <div className='mb-1'>
            <label htmlFor='country'>Country:</label>
            <select name='country' className='form-control'>
              <option>-Select Country-</option>
            </select>
          </div>

          <div className='mb-1'>
            <label htmlFor='state'>State:</label>
            <select name='state' className='form-control'>
              <option>-Select State-</option>
            </select>
          </div>

          <div className='mb-2'>
            <label htmlFor='city'>City:</label>
            <select name='city' className='form-control'>
              <option>-Select City-</option>
            </select>
          </div>

          <input type='submit' value='Submit' className='btn-primary' />
        </section>
      </form>
    </MainLayout>
  )
}

export default AddUser
