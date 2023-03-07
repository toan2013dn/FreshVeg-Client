import './address-confirm.styles.scss'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Tick from '@mui/icons-material/TaskAlt'

function AddressConfirm() {
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

  return (
    <div className="address-confirm">
      {addresses.map((address) => {
        return (
          <div
            className={`address-confirm--item ${isThumbnailActive(address.id)}`}
            key={address.id}
            onClick={() => handleAddressClick(address.id)}
          >
            <div className="flex">
              <Tick />
              <h4>{address.name}</h4>
              <h4 className="phone">{address.phone}</h4>
            </div>
            <div className="address">
              <h4>{address.address}</h4>
            </div>
            <div className="edit">
              <NavLink to={''} style={{ fontSize: '22px' }}>
                Edit
              </NavLink>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AddressConfirm
