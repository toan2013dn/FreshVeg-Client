import './signupForm.component.scss'

import React, { useState } from 'react'
import { ReactComponent as UserSignup } from '@/assets/icons/UserSignup.svg'
import { ReactComponent as Gmail } from '@/assets/icons/Gmail.svg'
import { ReactComponent as Password } from '@/assets/icons/Password.svg'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import ReactLoading from 'react-loading'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from '@/api/axios'
import ShowPassword from '@mui/icons-material/Visibility'
import HiddenPassword from '@mui/icons-material/VisibilityOff'

function SignupForm() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsLoading(true)

      axios
        .post('/auth/generate-otp', {
          username: userName,
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data == 'Email is already existed') {
            setErrors((errors) => ({ ...errors, email: 'Email đã tồn tại!' }))
          } else {
            Swal.fire({
              html: `<h4>Hãy nhập mã xác nhận gồm 4 chữ số được gửi đến:</h4>
              <h4 style="color: #4caf50">${email}</h4>`,
              input: 'number',
              showCancelButton: true,
              confirmButtonText: 'Xác nhận',
              cancelButtonText: 'Đóng',
              showLoaderOnConfirm: true,
              confirmButtonColor: '#4caf50',
              cancelButtonColor: ' #D3D3D3',
              allowOutsideClick: false,
              preConfirm: (code) => {
                axios
                  .post('/auth/verify-otp', {
                    username: userName,
                    email,
                    otp: code,
                    password: password,
                  })
                  .then((res) => {
                    if (res.data === 'OTP is not correct') {
                      // toast.error('Mã OTP không đúng! Vui lòng thử lại!')
                      Swal.showValidationMessage('Mã OTP không đúng! Vui lòng thử lại!')
                    } else {
                      toast.success('Đăng kí thành công!')
                      setTimeout(() => {
                        navigate('/')
                      }, 2000)
                    }
                  })
                  .catch((err) => {
                    console.log(err)
                  })
              },
            })
          }
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

    if (!userName) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, userName: 'Vui lòng nhập tên người dùng!' }))
    } else {
      const userNameRegex = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u
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
    <>
      {isLoading && (
        <>
          <ReactLoading className="loading" type={'spin'} color={'#4caf50'} height={'6%'} width={'6%'} />{' '}
        </>
      )}
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default SignupForm
