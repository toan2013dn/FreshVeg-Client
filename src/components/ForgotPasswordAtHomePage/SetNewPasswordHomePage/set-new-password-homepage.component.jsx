import './set-new-password-homepage.styles.scss'

import { useEmailStore } from '@/store'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import ReactLoading from 'react-loading'
import axios from '@/api/axios'
import Footer from '@/components/Footer/footer.component'
import Header from '@/components/Header/header.component'
import ShowPassword from '@mui/icons-material/Visibility'
import HiddenPassword from '@mui/icons-material/VisibilityOff'
import Swal from 'sweetalert2/dist/sweetalert2.js'

function NewPasswordHomepage() {
  const [email] = useEmailStore((state) => [state.email])
  const [newPassword, setNewPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsLoading(true)
      axios
        .post('auth/rspassword', {
          email: email,
          password: newPassword,
        })

        .then((res) => {
          Swal.fire({
            icon: 'success',
            text: 'Thiết lập mật khẩu thành công!',
            showConfirmButton: false,
            timer: 1500,
          })
          setTimeout(() => {
            navigate('/')
          }, 1700)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
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

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      {isLoading && (
        <>
          <ReactLoading className="loading" type={'spin'} color={'#4caf50'} height={'6%'} width={'6%'} />{' '}
        </>
      )}
      <Header />
      <div className="set-new-password--form">
        <form onSubmit={handleSubmit}>
          <h3>Thiết lập mật khẩu</h3>
          <div>
            <h4>Tạo mật khẩu mới cho</h4>
            <h4 style={{ marginTop: '5px', color: '#4caf50' }}>{email}</h4>
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
    </>
  )
}

export default NewPasswordHomepage
