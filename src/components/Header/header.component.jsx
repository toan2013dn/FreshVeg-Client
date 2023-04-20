import './header.styles.scss'
import { ReactComponent as Logo } from '@/assets/icons/logo.svg'
import { useUserStore } from '@/store'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Navigation from '../Navigation/navigation.component'
import SearchBar from '../SearchBar/searchbar.component'
import Login from '@/pages/Login/login.page'
import Modal from '@mui/material/Modal'
import MenuHeader from '../Menu/menu.component'

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [userInfo, setUserInfo] = useUserStore((state) => [state.userInfo, state.setUserInfo])
  const navigate = useNavigate()

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClickSignUp = () => {
    navigate('/signup')
  }

  const handleClickHomePage = () => {
    navigate('/')
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Logo onClick={handleClickHomePage} className="logo" />

      <MenuHeader />

      <SearchBar />

      {userInfo !== null ? (
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
