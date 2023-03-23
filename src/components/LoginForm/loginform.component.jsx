import './loginform.component.scss'
import { ReactComponent as Gmail } from '@/assets/icons/Gmail.svg'
import { ReactComponent as Password } from '@/assets/icons/Password.svg'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import axios from '@/api/axios'
import { useUserStore } from '@/store'
import { useNavigate } from 'react-router-dom'

import ShowPassword from '@mui/icons-material/Visibility'
import HiddenPassword from '@mui/icons-material/VisibilityOff'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})

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
  }

  const navigate = useNavigate()

  // const [setUserInfo] = useUserStore((state) => [state.setUserInfo])

  const handleSubmit = (event) => {
    event.preventDefault()
    validateForm()

    axios
      .post('/login', {
        email,
        password,
      })
      .then(function (response) {
        if (response.status === 200 || response.data.userId !== null) {
          // setUserInfo(response.data)
          navigate('/')
        }
      })
      .catch(function (error) {
        console.log(error)
      })
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
          <div className="form-option--forgot">
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
