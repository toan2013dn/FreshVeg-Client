import './user-popover.styles.scss'

import * as React from 'react'
import { useState } from 'react'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import Popper from '@mui/material/Popper'

import { useNavigate } from 'react-router-dom'
import { useUserStore } from '@/store'
import { ReactComponent as User } from '@/assets/icons/User.svg'

function UserPopover() {
  const [userInfo, setUserInfo] = useUserStore((state) => [state.userInfo, state.setUserInfo])
  const [anchorEl, setAnchorEl] = React.useState(null)

  const navigate = useNavigate()

  const handleProfile = () => {
    navigate('/user-page')
  }

  const handleOrderHistory = () => {
    navigate('')
  }

  const handleLogout = () => {
    // setUserInfo({})
    // localStorage.removeItem('userInfo')
    navigate('/')
  }

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined

  return (
    <div>
      <div className="user-popover--img" aria-describedby={id} variant="contained" onClick={handleClick}>
        {userInfo.avatar ? <img src={userInfo.avatar} alt="avatar" /> : <User className="navigation-item--icon" />}
      </div>

      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        arrow={true}
        disablePortal={false}
        modifiers={[
          {
            name: 'flip',
            enabled: false,
            options: {
              altBoundary: false,
              rootBoundary: 'document',
              padding: 8,
            },
          },
          {
            name: 'preventOverflow',
            enabled: true,
            options: {
              altAxis: true,
              altBoundary: false,
              tether: false,
              rootBoundary: 'viewport',
              padding: 8,
            },
          },
        ]}
      >
        <div className="user-popover--content">
          <div className="user-popover--content-info">
            <h4 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '150px' }}>
              {userInfo.name}
            </h4>
            <h4>{userInfo.email}</h4>
          </div>
          <div className="option-btn">
            <button onClick={handleProfile}>
              <BadgeOutlinedIcon />
              <h4>Trang cá nhân</h4>
            </button>
            <button>
              <LocalMallOutlinedIcon />
              <h4>Lịch sử đơn hàng</h4>
            </button>
            <button onClick={handleLogout}>
              <LogoutOutlinedIcon />
              <h4>Đăng xuất</h4>
            </button>
          </div>
        </div>
      </Popper>
    </div>
  )
}

export default UserPopover
