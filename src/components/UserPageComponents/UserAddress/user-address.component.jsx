import './user-address.styles.scss'

import { useEffect, useState } from 'react'
import { useUserStore } from '@/store'

import axios from '@/api/axios'
import AddNewAddress from '@/components/AddNewAddress/add-new-address.component'
import UpdateAddress from '@/components/UpdateAddress/update-address.component'
import Swal from 'sweetalert2/dist/sweetalert2.js'

function UserAddress() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState({})
  const [users, setUsers] = useState([])
  const [userInfo, setUserInfo] = useUserStore((state) => [state.userInfo, state.setUserInfo])

  const handleUpdateUser = (id) => {
    setIsOpenModalUpdate((prev) => {
      return { ...prev, [id]: true }
    })
  }

  useEffect(() => {
    axios
      .get(`/address/${userInfo.userId}`)
      .then((res) => {
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // Function to update a user
  const onUpdate = (userAddress) => {
    const updatedUsers = users.map((user) => {
      if (userAddress.addressId === user.addressId) {
        return userAddress
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
        <div className="user-address--content" key={user.addressId}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="user-address--content-left">
              <h4>{user.receiverName}</h4>
              <h4>{user.receiverPhone}</h4>
              <h4>{user.address}</h4>
            </div>
            <div className="user-address--content-right">
              <button onClick={() => handleUpdateUser(user.addressId)}>Cập nhật</button>
              <button onClick={() => handleDeleteUser(user.addressId)}>Xóa</button>
            </div>
            <UpdateAddress
              isOpen={isOpenModalUpdate[user.addressId]}
              onClose={() =>
                setIsOpenModalUpdate((prev) => {
                  return { ...prev, [user.addressId]: false }
                })
              }
              onUpdate={onUpdate}
              addressId={user.addressId}
              name={user.receiverName}
              phone={user.receiverPhone}
              address={user.address}
              setUsers={setUsers}
            />
          </div>
          <div className="line"></div>
        </div>
      ))}
    </div>
  )
}

export default UserAddress
