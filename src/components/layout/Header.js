import React from 'react'
import { BiMenu } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'
import { FaRegBell, FaUserCircle } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='header'>
      <BiMenu />

      <span className='header-right-icons'>
        <FiMail />
        <FaRegBell />
        <span>
          <FaUserCircle /> User
        </span>
      </span>
    </header>
  )
}

export default Header
