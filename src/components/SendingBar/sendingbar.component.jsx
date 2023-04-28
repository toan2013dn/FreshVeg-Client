import './sendingbar.component.scss'

import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { ReactComponent as Sending } from '@/assets/icons/Sending.svg'

function SendingBar() {
  const [email, setEmail] = useState('')
  const handleOnchange = (e) => {
    setEmail(e.target.value)
  }

  const handleSendEmail = () => {
    if (validateEmail()) {
      toast.success('Đăng kí thành công!')
      setEmail('')
    }
  }

  const validateEmail = () => {
    let formIsValid = true

    if (!email) {
      formIsValid = false
      toast.error('Vui lòng nhập gmail của bạn!')
    } else {
      formIsValid = true
    }
    return formIsValid
  }

  return (
    <div className="sending">
      <input
        value={email}
        type="email"
        className="search--input"
        placeholder="Nhập gmail của bạn"
        onChange={handleOnchange}
      />
      <div className="icon" onClick={handleSendEmail}>
        <Sending className="icon--search" />
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
    </div>
  )
}

export default SendingBar
