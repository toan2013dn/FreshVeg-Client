import './user-address.styles.scss'

import { useState } from 'react'
import AddNewAddress from '@/components/AddNewAddress/add-new-address.component'
import UpdateAddress from '@/components/UpdateAddress/update-address.component'
import Swal from 'sweetalert2/dist/sweetalert2.js'

function UserAddress() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState({
    1: false,
    2: false,
  })
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Trần Ngọc Thinh',
      phone: '0934795670',
      address: '120 Bùi Hữu Nghĩa, quận Sơn Trà, tp Đà Nẵng',
    },
    {
      id: 2,
      name: 'Trần Ngọc Toàn',
      phone: '0934795670',
      address: '120 Bùi Hữu Nghĩa, quận Sơn T20 Bùi Hữu Nghĩa, quận Sơn T20 Bùi Hữu Nghĩa, ',
    },
  ])

  const handleUpdateUser = (id) => {
    setIsOpenModalUpdate((prev) => {
      return { ...prev, [id]: true }
    })
  }

  // Function to update a user
  const onUpdate = (newUser) => {
    const updatedUsers = users.map((user) => {
      if (user.id === newUser.id) {
        return newUser
      }
      return user
    })
    setUsers(updatedUsers)
  }

  // Function to delete a user
  const handleDeleteUser = (id) => {
    Swal.fire({
      text: 'Bạn có chắc chắn muốn xoá địa chỉ này?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF2400',
      cancelButtonColor: '#e5e5e5',
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({ text: 'Địa chỉ đã được xoá!', icon: 'success' })
        const updatedUsers = users.filter((user) => user.id !== id)
        setUsers(updatedUsers)
      }
    })
  }

  return (
    <div className="user-address">
      <div className="user-address--header">
        <div className="flex">
          <div>
            <h3>Địa Chỉ Của Tôi</h3>
            <h4>Quản lí thông tin địa chỉ để việc giao hàng thuận lợi</h4>
          </div>
          <button className="button-save" onClick={() => setIsOpenModal(true)}>
            Thêm Địa Chỉ Mới{' '}
          </button>
          <AddNewAddress setUsers={setUsers} isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
        </div>
        <div className="line"></div>
      </div>

      {users.map((user) => (
        <div className="user-address--content" key={user.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="user-address--content-left">
              <h4>{user.name}</h4>
              <h4>{user.phone}</h4>
              <h4>{user.address}</h4>
            </div>
            <div className="user-address--content-right">
              <button onClick={() => handleUpdateUser(user.id)}>Cập nhật</button>
              <button onClick={() => handleDeleteUser(user.id)}>Xóa</button>
            </div>
            <UpdateAddress
              isOpen={isOpenModalUpdate[user.id]}
              onClose={() =>
                setIsOpenModalUpdate((prev) => {
                  return { ...prev, [user.id]: false }
                })
              }
              onUpdate={onUpdate}
              id={user.id}
              name={user.name}
              phone={user.phone}
              address={user.address}
            />
          </div>
          <div className="line"></div>
        </div>
      ))}
    </div>
  )
}

export default UserAddress
