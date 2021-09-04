import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <Link to='/' className='logo'>
        Logo
      </Link>

      <ul>
        <li>
          <Link to='/users/add'>Employee Form</Link>
        </li>
        <li>
          <Link to='/users'>Table View</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
