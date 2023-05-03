import './new-password.styles.scss'

import Footer from '@/components/Footer/footer.component'
import ShowPassword from '@mui/icons-material/Visibility'
import HiddenPassword from '@mui/icons-material/VisibilityOff'
import ReactLoading from 'react-loading'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from '@/api/axios'

import { useNavigate } from 'react-router-dom'
import { useUserStore } from '@/store'
import { ReactComponent as Logo } from '@/assets/icons/logo.svg'

function NewPassword() {
  const [userInfo, setUserInfo] = useUserStore((state) => [state.userInfo, state.setUserInfo])
  const [newPassword, setNewPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setLoading(true)
      axios
        .post('auth/rspassword-otp', {
          email: userInfo.email,
          password: newPassword,
        })

        .then((res) => {
          setUserInfo(null)
          Swal.fire({
            icon: 'success',
            text: 'Thiết lập mật khẩu thành công!',
            showConfirmButton: false,
            timer: 1200,
          })
          setTimeout(() => {
            navigate('/')
          }, 1400)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const validateForm = () => {
    let formIsValid = true

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
    }
    return formIsValid
  }

  return (
    <>
      {loading ? (
        <ReactLoading className="loading" type={'spin'} color={'#4caf50'} height={'6%'} width={'6%'} />
      ) : (
        <div className="new-password">
          <div className="new-password--header">
            <Logo />
          </div>

          <div className="new-password--form">
            <form onSubmit={handleSubmit}>
              <h3>Thiết lập mật khẩu</h3>
              <div>
                <h4>Tạo mật khẩu mới cho</h4>
                <h4 style={{ marginTop: '5px', color: 'green' }}>{userInfo.email}</h4>
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="new-password"
                  name="new-password"
                  maxLength={20}
                  placeholder="Nhập mật khẩu mới"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button type="button" className="button-toggle" onClick={toggleShowPassword}>
                  {showPassword ? <ShowPassword /> : <HiddenPassword />}
                </button>
                <p className="error" style={{ opacity: errors.newPassword ? 1 : 0 }}>
                  {errors.newPassword}
                </p>
              </div>
              <button className="confirm-btn">Xác Nhận</button>
            </form>
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}

export default NewPassword
