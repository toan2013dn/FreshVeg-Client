import './add-new-address.styles.scss'

import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'
import Modal from '@mui/material/Modal'

import { useState } from 'react'

function AddNewAddress({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    validateForm()
  }

  const validateForm = () => {
    let formIsValid = true

    if (!name) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, name: 'Vui lòng nhập tên người dùng!' }))
    } else {
      const nameRegex = /^[a-zA-Z0-9]+$/
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
      const phoneRegex = /^[0-9]+$/
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
      const addressRegex = /^[A-Za-z0-9'\.\-\s\,]+$/
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
                {errors.name && <p className="error">{errors.name}</p>}
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
                {errors.phone && <p className="error">{errors.phone}</p>}
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
              {errors.address && <p className="error">{errors.address}</p>}
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
