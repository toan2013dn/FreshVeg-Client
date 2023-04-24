import './add-new-address.styles.scss'

import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Modal from '@mui/material/Modal'
import axios from '@/api/axios'

import { useUserStore, useTokenStore } from '@/store'
import { useState } from 'react'
import { useEffect } from 'react'
import { useUserAddressesStore } from '@/store'

function AddNewAddress({ isOpen, onClose, setForceUser }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [errors, setErrors] = useState({})
  const [userAddresses, setUserAddresses] = useUserAddressesStore((state) => [
    state.userAddresses,
    state.setUserAddresses,
  ])
  const [userInfo, setUserInfo] = useUserStore((state) => [state.userInfo, state.setUserInfo])
  const [token, setToken] = useTokenStore((state) => [state.token, state.setToken])
  const resetForm = () => {
    setName('')
    setPhone('')
    setAddress('')
    setErrors({})
  }

  console.log(token);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      axios
        .post(
          `/address/${userInfo.userId}`,
          {
            receiverName: name,
            receiverPhone: phone,
            address,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          },
        )
        .then((res) => {
          const newAddress = { receiverName: name, receiverPhone: phone, address }
          setUserAddresses([...userAddresses, newAddress])
          setForceUser((prev) => prev + 1)
          Swal.fire({ text: 'Thêm địa chỉ thành công!', icon: 'success', timer: 1300, showConfirmButton: false })
          resetForm()
          onClose()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const validateForm = () => {
    let formIsValid = true

    if (!name) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, name: 'Vui lòng nhập tên người dùng!' }))
    } else {
      const nameRegex = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u
      if (!nameRegex.test(name)) {
        formIsValid = false
        setErrors((errors) => ({ ...errors, name: 'Vui lòng nhập tên người dùng hợp lệ!' }))
      } else {
        setErrors((errors) => ({ ...errors, name: '' }))
      }
    }

    if (!phone) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, phone: 'Vui lòng nhập số điện thoại!' }))
    } else {
      const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
      if (!phoneRegex.test(phone)) {
        formIsValid = false
        setErrors((errors) => ({ ...errors, phone: 'Vui lòng nhập số điện thoại hợp lệ!' }))
      } else {
        setErrors((errors) => ({ ...errors, phone: '' }))
      }
    }

    if (!address) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, address: 'Vui lòng nhập địa chỉ người nhận!' }))
    } else {
      const addressRegex =
        /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u
      if (!addressRegex.test(address)) {
        formIsValid = false
        setErrors((errors) => ({ ...errors, address: 'Vui lòng nhập địa chỉ người nhận hợp lệ!' }))
      } else {
        setErrors((errors) => ({ ...errors, address: '' }))
      }
    }

    return formIsValid
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="add-new-address">
        <form onSubmit={handleSubmit}>
          <h3>Thêm Địa Chỉ Mới</h3>
          <div className="add-new-address--input">
            <div className="flex-content">
              <div className="name-input">
                <TextField
                  id="standard-multiline-flexible "
                  label="Nhập tên người nhận"
                  style={{ width: '259px' }}
                  multiline
                  maxRows={4}
                  autoFocus={true}
                  placeholder="Ví dụ: Nguyễn Văn A"
                  value={name}
                  variant="standard"
                  onChange={(event) => setName(event.target.value)}
                />
                {
                  <p className="error" style={{ opacity: errors.name ? 1 : 0 }}>
                    {errors.name}
                  </p>
                }
              </div>
              <div className="phone-input">
                <TextField
                  id="standard-multiline-flexible"
                  label="Nhập số điện thoại"
                  multiline
                  style={{ width: '259px' }}
                  maxRows={4}
                  autoFocus={true}
                  placeholder="Ví dụ: 0123456789"
                  value={phone}
                  variant="standard"
                  onChange={(event) => setPhone(event.target.value)}
                />
                {
                  <p className="error" style={{ opacity: errors.phone ? 1 : 0 }}>
                    {errors.phone}
                  </p>
                }
              </div>
            </div>
            <div className="address-input">
              <TextField
                id="standard-multiline-flexible "
                label="Nhập địa chỉ người nhận"
                multiline
                style={{ width: '559px' }}
                maxRows={4}
                autoFocus={true}
                value={address}
                placeholder="Ví dụ: 123 Nguyễn Văn Cừ, Phường 4, Quận 5, TP. Hồ Chí Minh"
                variant="standard"
                onChange={(event) => setAddress(event.target.value)}
              />
              {
                <p className="error" style={{ opacity: errors.address ? 1 : 0 }}>
                  {errors.address}
                </p>
              }
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Thêm Địa Chỉ Mới
          </button>
          <CloseIcon onClick={onClose} />
        </form>
      </div>
    </Modal>
  )
}

export default AddNewAddress
