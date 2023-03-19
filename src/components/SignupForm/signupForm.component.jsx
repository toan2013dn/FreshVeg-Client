import './signupForm.component.scss'
import React, { useState } from 'react'
import { ReactComponent as UserSignup } from '@/assets/icons/UserSignup.svg'
import { ReactComponent as Gmail } from '@/assets/icons/Gmail.svg'
import { ReactComponent as Password } from '@/assets/icons/Password.svg'

import { ToastContainer, toast } from 'react-toastify'
// import Swal from 'sweetalert2'
import Swal from 'sweetalert2/dist/sweetalert2.js'

import ShowPassword from '@mui/icons-material/Visibility'
import HiddenPassword from '@mui/icons-material/VisibilityOff'

function SignupForm() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target

    if (id === 'userName') {
      setUserName(value)
    }
    if (id === 'email') {
      setEmail(value)
    }
    if (id === 'password') {
      setPassword(value)
    }
    if (id === 'confirmPassword') {
      setConfirmPassword(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      const code = '12345'
      Swal.fire({
        html: `<h4>Hãy nhập mã xác nhận được gửi đến ${email}</h4>`,
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Xác nhận',
        cancelButtonText: 'Hủy',
        inputValidator: (value) => {
          if (!value) {
            return 'Vui lòng nhập mã xác nhận!'
          } else if (value !== code) {
            return 'Mã xác nhận không đúng!'
          }
        },
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/'
        }
      })
    }
  }

  const validateForm = () => {
    let formIsValid = true

    if (!userName) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, userName: 'Vui lòng nhập tên người dùng!' }))
    } else {
      const userNameRegex = /^[a-zA-Z0-9]+$/
      if (!userNameRegex.test(userName)) {
        formIsValid = false
        setErrors((errors) => ({ ...errors, userName: 'Vui lòng nhập tên người dùng hợp lệ!' }))
      } else {
        setErrors((errors) => ({ ...errors, userName: '' }))
      }
    }

    if (!email) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, email: 'Vui lòng nhập email!' }))
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        formIsValid = false
        setErrors((errors) => ({ ...errors, email: 'Vui lòng nhập email hợp lệ!' }))
      } else {
        setErrors((errors) => ({ ...errors, email: '' }))
      }
    }

    if (!password) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, password: 'Vui lòng nhập mật khẩu!' }))
    } else {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
      if (!passwordRegex.test(password)) {
        formIsValid = false
        setErrors((errors) => ({
          ...errors,
          password: 'Nhập mật khẩu có tối thiểu: 6 ký tự bao gồm số, chữ cái thường và hoa.',
        }))
      } else {
        setErrors((errors) => ({ ...errors, password: '' }))
      }
    }

    if (!confirmPassword) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, confirmPassword: 'Vui lòng nhập lại mật khẩu!' }))
    } else if (password !== confirmPassword) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, confirmPassword: 'Mật khẩu không khớp!' }))
    } else {
      setErrors((errors) => ({ ...errors, confirmPassword: '' }))
    }

    return formIsValid
  }

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <div className="userName form-input">
          <label className="form-label" htmlFor="userName">
            Tên người dùng
          </label>
          <UserSignup />
          <input
            type="userName"
            id="userName"
            value={userName}
            onChange={(e) => handleInputChange(e)}
            placeholder="VD: Nguyen Van A"
          />
          {errors['userName'] !== '' && <span className="error">{errors['userName']}</span>}
        </div>
        <div className="email form-input">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <Gmail />
          <input type="email" id="email" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
          {errors['email'] !== '' && <span className="error">{errors['email']}</span>}
        </div>
        <div className="password form-input">
          <label className="form-label" htmlFor="password">
            Mật khẩu
          </label>
          <Password />
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Nhập mật khẩu của bạn"
          />
          {errors['password'] && <span className="error">{errors['password']}</span>}
          <button type="button" className="button-toggle" onClick={toggleShowPassword}>
            {showPassword ? <ShowPassword /> : <HiddenPassword />}
          </button>
        </div>
        <div className="confirm-password form-input password">
          <label className="form-label" htmlFor="confirmPassword">
            Xác nhận mật khẩu
          </label>
          <Password />
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
            placeholder="Nhập lại mật khẩu của bạn"
          />
          {errors['confirmPassword'] && <span className="error">{errors['confirmPassword']}</span>}
          <button type="button" className="button-toggle" onClick={toggleShowConfirmPassword}>
            {showConfirmPassword ? <ShowPassword /> : <HiddenPassword />}
          </button>
        </div>
        <button className="register-btn" onClick={(e) => handleSubmit(e)} type="submit">
          Đăng Ký
        </button>
      </form>
    </div>
  )
}

export default SignupForm
