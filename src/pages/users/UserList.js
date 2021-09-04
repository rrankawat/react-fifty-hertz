import React from 'react'
import MainLayout from '../../layouts/MainLayout'

const UserList = () => {
  return (
    <MainLayout>
      <section className='panel'>
        <h2>User Table</h2>

        <table className='table'>
          <tr>
            <th>S.No</th>
            <th>ID</th>
            <th>Created Date (dd-mm-yyyy)</th>
            <th>Name</th>
            <th>Image</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
            <td>Germany</td>
          </tr>
        </table>
      </section>
    </MainLayout>
  )
}

export default UserList
