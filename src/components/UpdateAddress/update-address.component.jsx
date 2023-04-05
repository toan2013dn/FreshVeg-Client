import { useState } from 'react'
import { useUserStore } from '@/store'

import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import TextField from '@mui/material/TextField'
import axios from '@/api/axios'

function UpdateAddress({ addressId, name, phone, address, isOpen, onClose, onUpdate }) {
  const [userInfo, setUserInfo] = useUserStore((state) => [state.userInfo, state.setUserInfo])
  const [updatedName, setUpdatedName] = useState(name)
  const [updatedPhone, setUpdatedPhone] = useState(phone)
  const [updatedAddress, setUpdatedAddress] = useState(address)
  const [errors, setErrors] = useState({})
  const handleSubmit = (event) => {
    event.preventDefault()
    const updatedUser = {
      id: userInfo.userId,
      addressId,
      receiverName: updatedName,
      receiverPhone: updatedPhone,
      address: updatedAddress,
    }
    if (validateForm()) {
      axios
        .put(`/address/${userInfo.userId}/${addressId}`, {
          receiverName: updatedName,
          receiverPhone: updatedPhone,
          address: updatedAddress,
        })
        .then((res) => {
          onUpdate(updatedUser)
        })
        .catch((err) => {
          console.log(err)
        })
      Swal.fire({
        title: 'Cập nhật thành công!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      })
      onClose()
    }
  }

  const validateForm = () => {
    let formIsValid = true

    if (!updatedName) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, updatedName: 'Vui lòng nhập tên người dùng!' }))
    } else {
      const nameRegex = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u
      if (!nameRegex.test(updatedName)) {
        formIsValid = false
        setErrors((errors) => ({ ...errors, updatedName: 'Vui lòng nhập tên người dùng hợp lệ!' }))
      } else {
        setErrors((errors) => ({ ...errors, updatedName: '' }))
      }
    }

    if (!updatedPhone) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, updatedPhone: 'Vui lòng nhập số điện thoại!' }))
    } else {
      const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
      if (!phoneRegex.test(updatedPhone)) {
        formIsValid = false
        setErrors((errors) => ({ ...errors, updatedPhone: 'Vui lòng nhập số điện thoại hợp lệ!' }))
      } else {
        setErrors((errors) => ({ ...errors, updatedPhone: '' }))
      }
    }

    if (!updatedAddress) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, updatedAddress: 'Vui lòng nhập địa chỉ người nhận!' }))
    } else {
      const addressRegex =
        /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u
      if (!addressRegex.test(updatedAddress)) {
        formIsValid = false
        setErrors((errors) => ({ ...errors, updatedAddress: 'Vui lòng nhập địa chỉ người nhận hợp lệ!' }))
      } else {
        setErrors((errors) => ({ ...errors, updatedAddress: '' }))
      }
    }

    return formIsValid
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="add-new-address">
        <form onSubmit={handleSubmit}>
          <h3>Cập Nhật Địa Chỉ</h3>
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
                  value={updatedName}
                  variant="standard"
                  onChange={(event) => setUpdatedName(event.target.value)}
                />
                {errors.updatedName && <p className="error">{errors.updatedName}</p>}
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
                  value={updatedPhone}
                  variant="standard"
                  onChange={(event) => setUpdatedPhone(event.target.value)}
                />
                {errors.updatedPhone && <p className="error">{errors.updatedPhone}</p>}
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
                value={updatedAddress}
                placeholder="Ví dụ: 123 Nguyễn Văn Cừ, Phường 4, Quận 5, TP. Hồ Chí Minh"
                variant="standard"
                onChange={(event) => setUpdatedAddress(event.target.value)}
              />
              {errors.updatedAddress && <p className="error">{errors.updatedAddress}</p>}
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Cập Nhật
          </button>
          <CloseIcon onClick={onClose} />
        </form>
      </div>
    </Modal>
  )
}

export default UpdateAddress
