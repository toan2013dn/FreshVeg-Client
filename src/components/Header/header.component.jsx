import './header.styles.scss'
import { ReactComponent as Logo } from '@/assets/icons/logo.svg'
import { useNavigate } from 'react-router-dom'

import Menu from '../Menu/menu.component'
import Navigation from '../Navigation/navigation.component'
import SearchBar from '../SearchBar/searchbar.component'
import Login from '@/pages/Login/login.page'
import Modal from '@mui/material/Modal'

import { useUserStore } from '@/store'
import { useState } from 'react'

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const [userInfo, setUserInfo] = useUserStore((state) => [state.userInfo, state.setUserInfo])
  const navigate = useNavigate()

  const handleClickSignUp = () => {
    navigate('/signup')
  }

  return (
    <header className="header">
      <Logo to="/" className="logo" />

      <Menu />

      <SearchBar />

      {userInfo ? (
        <Navigation />
      ) : (
        <div className="button">
          <button className="register-btn btn-style" onClick={handleClickSignUp}>
            Đăng Ký
          </button>
          <button className="login-btn btn-style" onClick={() => setIsOpenModal(true)}>
            Đăng Nhập
          </button>
        </div>
      )}
      <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <div>
          <Login onClose={() => setIsOpenModal(false)} />
        </div>
      </Modal>
    </header>
  )
}

export default Header
