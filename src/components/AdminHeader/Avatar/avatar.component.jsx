import './avatar.styles.scss'

import { useUserStore } from '@/store'

import axios from '@/api/axios'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Popper from '@mui/material/Popper'
import AdminAvatar from '@/assets/images/admin-avatar.png'
import TextOverflow from '@/components/TextOverflow/text-overflow.component'
import { useNavigate } from 'react-router-dom'

import React from 'react'

function Avatar() {
  const [admin, setUserInfo] = useUserStore((state) => [state.userInfo, state.setUserInfo])
  const [anchorEl, setAnchorEl] = React.useState(null)

  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
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
  const handleClickAway = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined

  return (
    <div className="avatar" key={admin?.userId}>
      <div className="avatar-admin" onClick={handleClick}>
        <img src={AdminAvatar} alt="" />
      </div>
      <div className="avatar-content">
        <h4>{admin?.name}</h4>
        <span style={{ color: '#B3B3B3' }}>Admin</span>
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
              <TextOverflow width={150} fontWeight={700} content={admin?.name} />
              <h4>{admin?.email}</h4>
            </div>
            <div className="option-btn">
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

export default Avatar
