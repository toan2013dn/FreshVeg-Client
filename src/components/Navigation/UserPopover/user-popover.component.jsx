import './user-popover.styles.scss'

import * as React from 'react'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import Popper from '@mui/material/Popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '@/store'
import { ReactComponent as User } from '@/assets/icons/User.svg'
import axios from '@/api/axios'
import TextOverflow from '@/components/TextOverflow/text-overflow.component'

function UserPopover() {
  const [userInfo, setUserInfo] = useUserStore((state) => [state.userInfo, state.setUserInfo])
  const [anchorEl, setAnchorEl] = React.useState(null)

  const navigate = useNavigate()

  const handleProfile = () => {
    navigate('/user-page')
  }

  //handleLOGOUT
  const handleLogout = () => {
    axios
      .post('/auth/logout')
      .then((res) => {
        if (res.status === 200) {
          setUserInfo(null)
          navigate('/')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleOrderHistory = () => {
    navigate('')
  }

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  const handleClickAway = () => {
    setAnchorEl(null)
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
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className="user-popover--content">
            <div className="user-popover--content-info">
              <TextOverflow width={150} fontWeight={700} content={userInfo.name} />
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
        </ClickAwayListener>
      </Popper>
    </div>
  )
}

export default UserPopover
