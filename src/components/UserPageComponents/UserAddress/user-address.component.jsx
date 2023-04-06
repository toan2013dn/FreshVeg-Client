import './user-address.styles.scss'

import { useEffect, useState } from 'react'
import { useUserStore } from '@/store'
import { useUserAddressesStore } from '@/store'

import * as React from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import Tooltip from '@mui/material/Tooltip'
import axios from '@/api/axios'
import AddNewAddress from '@/components/AddNewAddress/add-new-address.component'
import UpdateAddress from '@/components/UpdateAddress/update-address.component'
import Swal from 'sweetalert2/dist/sweetalert2.js'

function UserAddress() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState({})
  const [userAddresses, setUserAddresses] = useUserAddressesStore((state) => [
    state.userAddresses,
    state.setUserAddresses,
  ])
  const [forceUser, setForceUser] = useState(0)
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
        setUserAddresses(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [forceUser])

  // Function to update a user
  const onUpdate = (userAddress) => {
    const updatedUsers = userAddresses.map((address) => {
      if (address.addressId === userAddress.addressId) {
        return userAddress
      }
      return address
    })
    setUserAddresses(updatedUsers)
  }

  // Function to delete a user
  const handleDeleteAddress = (id) => {
    Swal.fire({
      text: 'Bạn có chắc chắn muốn xoá địa chỉ này?',
      icon: 'warning',
      showCancelButton: false,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/address/${userInfo.userId}/${id}`)
          .then((res) => {
            const updatedUsers = userAddresses.filter((userAddress) => userAddress.addressId !== id)
            setUserAddresses(updatedUsers)
            Swal.fire({ text: 'Địa chỉ đã được xoá!', icon: 'success', timer: 1300, showConfirmButton: false })
          })
          .catch((err) => {
            console.log(err)
          })
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
          <AddNewAddress
            setUserAddresses={setUserAddresses}
            isOpen={isOpenModal}
            onClose={() => setIsOpenModal(false)}
            setForceUser={setForceUser}
          />
        </div>
        <div className="line"></div>
      </div>

      {userAddresses.map((userAddress) => (
        <div className="user-address--content" key={userAddress.addressId}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="user-address--content-left">
              <h4>{userAddress.receiverName}</h4>
              <h4>{userAddress.receiverPhone}</h4>
              <h4>{userAddress.address}</h4>
            </div>
            <div className="user-address--content-right">
              <Tooltip title="Cập Nhật">
                <button className="btn update-btn" onClick={() => handleUpdateUser(userAddress.addressId)}>
                  <CreateOutlinedIcon />
                </button>
              </Tooltip>

              <Tooltip title="Xoá">
                <button className="btn delete-btn" onClick={() => handleDeleteAddress(userAddress.addressId)}>
                  <DeleteForeverOutlinedIcon />
                </button>
              </Tooltip>
            </div>
            <UpdateAddress
              isOpen={isOpenModalUpdate[userAddress.addressId]}
              onClose={() =>
                setIsOpenModalUpdate((prev) => {
                  return { ...prev, [userAddress.addressId]: false }
                })
              }
              onUpdate={onUpdate}
              addressId={userAddress.addressId}
              name={userAddress.receiverName}
              phone={userAddress.receiverPhone}
              address={userAddress.address}
              setUserAddresses={setUserAddresses}
            />
          </div>
          <div className="line"></div>
        </div>
      ))}
    </div>
  )
}

export default UserAddress
