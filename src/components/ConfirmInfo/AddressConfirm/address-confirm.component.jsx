import './address-confirm.styles.scss'

import { useUserAddressesStore, useUserStore, useOrderInfoStore, useTokenStore } from '@/store'
import { useEffect, useState } from 'react'

import axios from '@/api/axios'
import UpdateAddress from '@/components/UpdateAddress/update-address.component'
import Tick from '@mui/icons-material/TaskAlt'

function AddressConfirm({ forceUser }) {
  const [userAddresses, setUserAddresses] = useUserAddressesStore((state) => [
    state.userAddresses,
    state.setUserAddresses,
  ])
  const [userInfo] = useUserStore((state) => [state.userInfo])
  const [token, setToken] = useTokenStore((state) => [state.token, state.setToken])
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState({})

  //call address api
  useEffect(() => {
    axios
      .get(`/address/user/${userInfo.userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setUserAddresses(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [forceUser])

  const [selectedAddress, setSelectedAddress] = useOrderInfoStore((state) => [
    state.selectedAddress,
    state.setSelectedAddress,
  ])
  useEffect(() => {
    if (userAddresses.length > 0) {
      setSelectedAddress(userAddresses[0])
    }
  }, [userAddresses])

  const isThumbnailActive = (userAddress) => {
    if (selectedAddress === userAddress || (userAddress === userAddresses[0] && !selectedAddress)) {
      return 'active'
    }
    return ''
  }

  const handleAddressClick = (userAddress) => {
    setSelectedAddress(userAddress)
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
            className={`address-confirm--item ${isThumbnailActive(userAddress)}`}
            key={userAddress.addressId}
            onClick={() => handleAddressClick(userAddress)}
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
