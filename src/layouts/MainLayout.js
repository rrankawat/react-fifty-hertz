import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const MainLayout = ({ children }) => {
  return (
    <div className='main-wrapper'>
      <Sidebar />

      <div className='main-container'>
        <Header />
        <main className='container'>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
