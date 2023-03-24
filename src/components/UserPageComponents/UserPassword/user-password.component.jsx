import './user-password.styles.scss'

import { useUserStore } from '@/store'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import ShowPassword from '@mui/icons-material/Visibility'
import HiddenPassword from '@mui/icons-material/VisibilityOff'
import Modal from '@mui/material/Modal'

function UserPassword() {
  const [userInfo, setUserInfo] = useUserStore((state) => [state.userInfo, state.setUserInfo])
  const [currentPassword, setCurrentPassword] = useState(userInfo.password)
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      const updatedUserInfo = {
        ...userInfo,
        password: newPassword,
      }
      setUserInfo(updatedUserInfo)

      Swal.fire({
        icon: 'success',
        text: 'Đổi mật khẩu thành công!',
        showConfirmButton: false,
        timer: 1500,
      })
      onClose()
    }
  }

  const validateForm = () => {
    let formIsValid = true

    if (!currentPassword) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, currentPassword: 'Vui lòng nhập mật khẩu!' }))
    } else {
      if (currentPassword !== userInfo.password) {
        formIsValid = false
        setErrors((errors) => ({ ...errors, currentPassword: 'Mật khẩu không khớp!' }))
      } else {
        setErrors((errors) => ({ ...errors, currentPassword: '' }))
      }
    }

    if (!newPassword) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, newPassword: 'Vui lòng nhập mật khẩu mới!' }))
    } else {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
      if (!passwordRegex.test(newPassword)) {
        formIsValid = false
        setErrors((errors) => ({
          ...errors,
          newPassword: 'Nhập mật khẩu có tối thiểu: 6 ký tự bao gồm số, chữ cái thường và hoa.',
        }))
      } else {
        setErrors((errors) => ({ ...errors, newPassword: '' }))
      }
      if (newPassword === currentPassword) {
        formIsValid = false
        setErrors((errors) => ({ ...errors, newPassword: 'Mật khẩu mới không được trùng mật khẩu cũ!' }))
      }
    }
    if (!confirmNewPassword) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, confirmNewPassword: 'Vui lòng nhập lại mật khẩu mới!' }))
    } else if (newPassword !== confirmNewPassword) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, confirmNewPassword: 'Mật khẩu mới không khớp!' }))
    } else {
      setErrors((errors) => ({ ...errors, confirmNewPassword: '' }))
    }
    return formIsValid
  }
  return (
    <div className="change-password">
      <form onSubmit={handleSubmit}>
        <div className="change-password--title">
          <h3>Đổi mật khẩu</h3>
          <h4>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</h4>
        </div>
        <div className="flex-content">
          <div className="change-password--currentPassword grid">
            <h4>Mật khẩu hiện tại</h4>
            <div>
              <input
                type={showCurrentPassword ? 'text' : 'password'}
                name="currentPassword"
                id="currentPassword"
                onChange={(event) => setCurrentPassword(event.target.value)}
              />
              <ShowPassword onClick={() => setShowCurrentPassword(!showCurrentPassword)} />
              <p className="error" style={{ opacity: errors.currentPassword ? 1 : 0 }}>
                {errors.currentPassword}
              </p>
            </div>
            <Link>Quên mật khẩu?</Link>
          </div>
          <div className="change-password--newPassword grid">
            <h4>Mật khẩu mới</h4>
            <div>
              <input
                type={showNewPassword ? 'text' : 'password'}
                name="newPassword"
                id="newPassword"
                onChange={(event) => setNewPassword(event.target.value)}
              />
              <ShowPassword onClick={() => setShowNewPassword(!showNewPassword)} />
              <p className="error" style={{ opacity: errors.newPassword ? 1 : 0 }}>
                {errors.newPassword}
              </p>
            </div>
          </div>
          <div className="change-password--confirmNewPassword grid">
            <h4>Nhập lại mật khẩu mới</h4>
            <div>
              <input
                type={showConfirmNewPassword ? 'text' : 'password'}
                name="confirmNewPassword"
                id="confirmNewPassword"
                onChange={(event) => setConfirmNewPassword(event.target.value)}
              />
              <ShowPassword onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)} />
              <p className="error" style={{ opacity: errors.confirmNewPassword ? 1 : 0 }}>
                {errors.confirmNewPassword}
              </p>
            </div>
          </div>
          <div className="change-password--button">
            <button type="submit">Xác Nhận</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserPassword
