import './loginform.component.scss'
import { ReactComponent as Gmail } from '@/assets/icons/Gmail.svg'
import { ReactComponent as Password } from '@/assets/icons/Password.svg'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUserStore, useTokenStore } from '@/store'
import { useNavigate } from 'react-router-dom'
import { useProductCartStore } from '@/store'

import axios from '@/api/axios'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import ShowPassword from '@mui/icons-material/Visibility'
import HiddenPassword from '@mui/icons-material/VisibilityOff'

function LoginForm({ onClose }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [setUserInfo] = useUserStore((state) => [state.setUserInfo])
  const [setToken] = useTokenStore((state) => [state.setToken])
  const [setProductCart] = useProductCartStore((state) => [state.setProductCart])

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const validateForm = () => {
    let formIsValid = true

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
      setErrors((errors) => ({ ...errors, password: 'Vui lòng nhập password!' }))
    } else {
      setErrors((errors) => ({ ...errors, password: '' }))
    }

    return formIsValid
  }

  const navigate = useNavigate()

  const handleToForgotPassword = () => {
    navigate('/forgot-password')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (validateForm()) {
      axios
        .post('/auth/login', {
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.status === 200 || response.data.userId !== null) {
            Swal.fire({
              html: `<h4>Đăng nhập thành công!</h4>`,
              icon: 'success',
              showConfirmButton: false,
              timer: 1100,
            })

            setProductCart([])

            setTimeout(() => {
              onClose()
            }, 1500)
            const { user, accessToken } = response.data
            const admin = user.roles[0].id
            if (admin === 1) {
              setUserInfo(user)
              setToken(accessToken)
              navigate('/admin-page')
            } else {
              setUserInfo(user)
              setToken(accessToken)
              navigate('/')
            }
          }
        })
        .catch((err) => {
          Swal.fire({
            html: `<h4>Tài khoản email hoặc mật khẩu không đúng!</h4>`,
            icon: 'error',
            showConfirmButton: true,
          })
          console.log('error', err)
        })
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <Gmail />

          <input
            type="email"
            id="email"
            placeholder="Nhập email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors['email'] !== '' && <span className="error">{errors['email']}</span>}
        </div>

        <div className="form-input">
          <label htmlFor="password">Mật Khẩu</label>
          <Password />

          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors['password'] !== '' && <span className="error">{errors['password']}</span>}
          <button type="button" className="button-toggle" onClick={toggleShowPassword}>
            {showPassword ? <ShowPassword /> : <HiddenPassword />}
          </button>
        </div>

        <div className="form-option">
          <div className="form-option--remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" style={{ fontSize: '14px' }}>
              Nhớ mật khẩu
            </label>
          </div>
          <div className="form-option--forgot" onClick={handleToForgotPassword}>
            <Link to={''}>Quên mật khẩu?</Link>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Đăng Nhập
        </button>
      </form>
    </div>
  )
}

export default LoginForm
