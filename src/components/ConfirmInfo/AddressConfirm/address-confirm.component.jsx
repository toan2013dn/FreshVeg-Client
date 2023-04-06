import './address-confirm.styles.scss'

import { useState, useEffect } from 'react'
import { useUserAddressesStore } from '@/store'
import { useUserStore } from '@/store'
import { NavLink } from 'react-router-dom'

import UpdateAddress from '@/components/UpdateAddress/update-address.component'
import Tick from '@mui/icons-material/TaskAlt'
import axios from '@/api/axios'

function AddressConfirm({ forceUser }) {
  const [userAddresses, setUserAddresses] = useUserAddressesStore((state) => [
    state.userAddresses,
    state.setUserAddresses,
  ])
  const [userInfo, setUserInfo] = useUserStore((state) => [state.userInfo, state.setUserInfo])
  const addresses = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      phone: '0123456789',
      address: 'Số 1, Đường 1, Phường 1, Quận 1, Thành Phố 1',
      isDefault: true,
    },
    {
      id: 2,
      name: 'Nguyễn Văn B',
      phone: '0123456789',
      address: 'Số 2, Đường 2, Phường 2, Quận 2, Thành Phố Da Nang',
      isDefault: false,
    },
  ]
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState({})

  //call address api
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

  const defaultAddress = addresses.find((address) => address.isDefault)

  const [selectedAddress, setSelectedAddress] = useState(defaultAddress.id)

  const isThumbnailActive = (id) => {
    if (selectedAddress === id || (id === addresses[0].id && !selectedAddress)) {
      return 'active'
    }
    return ''
  }

  const handleAddressClick = (id) => {
    setSelectedAddress(id)
  }

  const handleUpdateUser = (id) => {
    setIsOpenModalUpdate((prev) => {
      return { ...prev, [id]: true }
    })
  }

  const onUpdate = (userAddress) => {
    const updatedUsers = userAddresses.map((address) => {
      if (address.addressId === userAddress.addressId) {
        return userAddress
      }
      return address
    })
    setUserAddresses(updatedUsers)
  }

  return (
    <div className="address-confirm">
      {userAddresses.map((userAddress) => {
        return (
          <div
            className={`address-confirm--item ${isThumbnailActive(userAddress.addressId)}`}
            key={userAddress.addressId}
            onClick={() => handleAddressClick(userAddress.addressId)}
          >
            <div className="flex">
              <Tick />
              <h4>{userAddress.receiverName}</h4>
              <h4 className="phone">{userAddress.receiverPhone}</h4>
            </div>
            <div className="address">
              <h4>{userAddress.address}</h4>
            </div>
            <div className="edit" onClick={() => handleUpdateUser(userAddress.addressId)}>
              Sửa
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
        )
      })}
    </div>
  )
}

export default AddressConfirm
