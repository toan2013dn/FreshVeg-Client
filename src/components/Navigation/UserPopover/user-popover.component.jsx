import './user-popover.styles.scss'

import * as React from 'react'
import Popover from '@mui/material/Popover'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import { useNavigate } from 'react-router-dom'

import { useUserStore } from '@/store'
import { ReactComponent as User } from '@/assets/icons/User.svg'

function UserPopover() {
  const [userInfo, setUserInfo] = useUserStore((state) => [state.userInfo, state.setUserInfo])
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <div className="user-popover--img" aria-describedby={id} variant="contained" onClick={handleClick}>
        {userInfo.avatar ? <img src={userInfo.avatar} alt="avatar" /> : <User className="navigation-item--icon" />}
      </div>

      {/* <User className="navigation-item--icon" aria-describedby={id} variant="contained" onClick={handleClick} /> */}
      <Popover
        className="user-popover"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          style: { width: '200px', marginTop: '15px' },
        }}
      >
        <div className="user-popover--content">
          <div className="user-popover--content-info">
            <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '150px' }}>
              {userInfo.name}
            </p>
            <p>{userInfo.email}</p>
          </div>
          <div className="option-btn">
            <button onClick={handleProfile}>
              <BadgeOutlinedIcon />
              <p>Trang cá nhân</p>
            </button>
            <button>
              <LocalMallOutlinedIcon />
              <p>Lịch sử đơn hàng</p>
            </button>
            <button onClick={handleLogout}>
              <LogoutOutlinedIcon />
              <p>Đăng xuất</p>
            </button>
          </div>
        </div>
      </Popover>
    </div>
  )
}

export default UserPopover
