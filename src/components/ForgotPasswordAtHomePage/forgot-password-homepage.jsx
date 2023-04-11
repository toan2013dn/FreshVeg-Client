import './forgot-password-homepage.styles.scss'

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEmailStore, useUserStore } from '@/store'

import ReactLoading from 'react-loading'
import Footer from '../Footer/footer.component'
import Header from '../Header/header.component'
import axios from '@/api/axios'
import Swal from 'sweetalert2/dist/sweetalert2.js'

function ForgotPasswordHomePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useEmailStore((state) => [state.email, state.setEmail])
  const handleInputChange = (e) => {
    setEmail(e.target.value)
  }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email) {
      Swal.fire({
        icon: 'error',
        text: 'Vui lòng nhập email!',
        showConfirmButton: false,
        timer: 1500,
      })
    } else {
      setIsLoading(true)

      axios
        .post('auth/rspassword', {
          email: email,
        })
        .then((res) => {
          if (res.data == 'Email is not exist') {
            Swal.fire({
              icon: 'error',
              text: 'Email không tồn tại!',
              showConfirmButton: false,
              timer: 1500,
            })
          } else {
            navigate('/check-otp')
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

  return (
    <>
      {isLoading ? (
        <ReactLoading className="loading" type={'spin'} color={'#4caf50'} height={'6%'} width={'6%'} />
      ) : (
        <>
          <Header />
          <div className="forgot-password--homepage">
            <form onSubmit={handleSubmit}>
              <h3>Tìm tài khoản của bạn</h3>
              <div className="forgot-password--content">
                <h4>Vui lòng nhập email để tìm kiếm tài khoản của bạn!</h4>
              </div>
              <div className="forgot-password--input">
                <input
                  type="email"
                  id="code-input"
                  name="code"
                  placeholder="Nhập email"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <button type="submit" className="submit-btn">
                Xác Nhận
              </button>
            </form>
          </div>
          <Footer />
        </>
      )}
    </>
  )
}

export default ForgotPasswordHomePage
