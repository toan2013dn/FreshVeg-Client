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
      </Popover>
    </div>
  )
}

export default UserPopover
