import './forgot-password.styles.scss'

import Modal from '@mui/material/Modal'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import MailLockOutlinedIcon from '@mui/icons-material/MailLockOutlined'
import axios from '@/api/axios'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useUserStore } from '@/store'

function ForgotPassword({ isOpen, onClose }) {
  const [userInfo] = useUserStore((state) => [state.userInfo, state.setUserInfo])
  const [errors, setErrors] = useState({})
  const [code, setCode] = useState('')

  const navigate = useNavigate()

  const handleInputChange = (event) => {
    const value = event.target.value
    const regex = /^[0-9\b]{0,4}$/ // allow only numbers and limit length to 4
    if (regex.test(value)) {
      setCode(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post('auth/check-rspassword-otp', {
        otpCode: code,
        email: userInfo.email,
      })
      .then((res) => {
        if (res.data == 'Cannot Reset Password, Please check input again') {
          Swal.fire({
            icon: 'error',
            text: 'Mã xác minh không khớp!',
            showConfirmButton: false,
            timer: 1500,
          })
        } else {
          Swal.fire({
            icon: 'success',
            text: '',
            showConfirmButton: false,
            timer: 1200,
          })
          setTimeout(() => {
            navigate('/new-password')
          }, 1500)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="forgot-password">
        <form onSubmit={handleSubmit}>
          <h3>Đặt lại mật khẩu</h3>
          <MailLockOutlinedIcon />
          <div className="forgot-password--content">
            <h4>Mã xác minh đã được gửi đến địa chỉ email</h4>
            <h4 style={{ color: '#4caf50' }}>{userInfo.email}</h4>
            <h4>Vui lòng nhập mã gồm 4 chữ số!</h4>
          </div>
          <div className="forgot-password--input">
            <input
              type="text"
              id="code-input"
              name="code"
              placeholder="Nhập mã xác minh"
              value={code}
              maxLength="4"
              onChange={(e) => handleInputChange(e)}
            />
            <p className="error" style={{ opacity: errors.code ? 1 : 0 }}>
              {errors.code}
            </p>
          </div>
          <button type="submit" className="submit-btn">
            Xác Nhận
          </button>
        </form>
      </div>
    </Modal>
  )
}

export default ForgotPassword
