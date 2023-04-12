import './forgot-password-otp.styles.scss'

import Footer from '@/components/Footer/footer.component'
import Header from '@/components/Header/header.component'
import MailLockOutlinedIcon from '@mui/icons-material/MailLockOutlined'
import ReactLoading from 'react-loading'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from '@/api/axios'

import { useEmailStore } from '@/store'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ForgotPasswordOTP() {
  const [code, setCode] = useState('')
  const [email] = useEmailStore((state) => [state.email])
  const [isLoading, setIsLoading] = useState(false)

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

    if (!code) {
      Swal.fire({
        icon: 'error',
        text: 'Vui lòng nhập mã xác minh!',
        showConfirmButton: false,
        timer: 1500,
      })
    } else {
      setIsLoading(true)

      axios
        .post('auth/check-rspassword-otp', {
          otpCode: code,
          email: email,
        })

        .then((res) => {
          if (res.data == 'OTP is not correct') {
            Swal.fire({
              icon: 'error',
              text: 'Mã xác minh không chính xác!',
              showConfirmButton: false,
              timer: 1500,
            })
          } else {
            navigate('/set-new-password')
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
          <div className="forgot-password-otp">
            <form onSubmit={handleSubmit}>
              <h3>Đặt lại mật khẩu</h3>
              <MailLockOutlinedIcon />
              <div className="forgot-password--content">
                <h4>Mã xác minh đã được gửi đến địa chỉ email</h4>
                <h4 style={{ color: '#4caf50' }}>{email}</h4>
                <h4>Vui lòng nhập mã gồm 4 chữ số!</h4>
              </div>
              <div className="forgot-password--input">
                <input
                  type="text"
                  id="code-input"
                  name="code"
                  placeholder="Nhập mã xác minh"
                  maxLength="4"
                  value={code}
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

export default ForgotPasswordOTP
