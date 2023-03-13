import './user-info-table.styles.scss'

import * as React from 'react'
import { useState } from 'react'
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import ShowPassword from '@mui/icons-material/Visibility';
import HiddenPassword from '@mui/icons-material/VisibilityOff';
import { fontSize } from '@mui/system'

function UserInfoTable({ userAvatar, username, password }) {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="user-table">
      <div className="user-table--text">
        <h3>Hồ Sơ Của Tôi</h3>
        <span style={{ fontWeight: '400', fontSize: '18px' }}>
          Quản lí thông tin hồ sơ để bảo mật tài khoản của bạn
        </span>
        <div className="line"></div>
      </div>

      <div className="line1"></div>

      <div className="flex-content">
        <div className="user-table--content">
          <div className="user-table--content-email flex">
            <div className="text">
              <h4>Email</h4>
            </div>
            <div className="content">
              <h4>toantnde150316@gmail.com</h4>
              <button className="button">Thay đổi</button>
            </div>
          </div>

          <div className="user-table--content-phone flex">
            <div className="text">
              <h4>Số điện thoại</h4>
            </div>
            <div className="content">
              <h4>0934795670</h4>
              <button className="button">Thay đổi</button>
            </div>
          </div>

          <div className="user-table--content-password flex">
            <div className="text">
              <h4>Mật khẩu</h4>
            </div>
            <div className="content">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                style={{fontSize:'18px', color:'#344d67'}}
              />
              <button className='button-toggle' onClick={toggleShowPassword}>{showPassword ? <ShowPassword/> : <HiddenPassword/>}</button>
              <button className="button">Thay đổi</button>
            </div>
          </div>

          <div className="user-table---content-birthday flex">
            <div className="text">
              <h4>Ngày sinh</h4>
            </div>
            <div className="content">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="MM/DD/YY" defaultValue={dayjs('')} />
              </LocalizationProvider>
            </div>
          </div>

          <div className="text">
            <button className="button-save" style={{ padding: '15px 40px', fontSize: '20px' }}>
              Lưu
            </button>
          </div>
        </div>

        <div className="user-table--image">
          <div className="image">
            <img src={userAvatar} alt="" />
          </div>
          <button className="button">Thay đổi</button>
        </div>
      </div>
    </div>
  )
}
export default UserInfoTable
