import './forgot-password.styles.scss'

import Modal from '@mui/material/Modal'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useNavigate } from 'react-router-dom'
import MailLockOutlinedIcon from '@mui/icons-material/MailLockOutlined'

import { useState } from 'react'
import { useUserStore } from '@/store'

function ForgotPassword({ isOpen, onClose }) {
  const [userInfo, setUserInfo] = useUserStore((state) => [state.userInfo, state.setUserInfo])
  const [errors, setErrors] = useState({})
  const [code, setCode] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
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
  }

  const validateForm = () => {
    let formIsValid = true
    const OTPCode = '1234'

    if (!code) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, code: 'Vui lòng nhập mã xác minh!' }))
    } else {
      if (code !== OTPCode) {
        formIsValid = false
        setErrors((errors) => ({ ...errors, code: 'Mã xác minh không khớp!' }))
      } else {
        setErrors((errors) => ({ ...errors, code: '' }))
      }
    }
    return formIsValid
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
              maxlength="4"
              onChange={(e) => setCode(e.target.value)}
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
