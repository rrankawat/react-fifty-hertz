import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainLayout from '../../layouts/MainLayout'
import { listUsers } from '../../actions/userActions'
import { formatDate } from '../../utils/functions'

const UserList = () => {
  const dispatch = useDispatch()

  const { users } = useSelector(state => state.userList)

  useEffect(() => {
    dispatch(listUsers())
  }, [dispatch])

  if (!users) {
    return 'Loading...'
  }

  return (
    <MainLayout>
      <section className='panel'>
        <h2>User Table</h2>

        <table className='table'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>ID</th>
              <th>Created Date (dd-mm-yyyy)</th>
              <th>Name</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => (
                <tr key={user.createdAt}>
                  <td>{index + 1}</td>
                  <td>{user.id}</td>
                  <td>{formatDate(user.createdAt)}</td>
                  <td>{user.name}</td>
                  <td>
                    <a href={user.avatar} target='_blank'>
                      IMG
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </MainLayout>
  )
}

export default UserList
