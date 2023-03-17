import './header.styles.scss'
import { ReactComponent as Logo } from '@/assets/icons/logo.svg'
import { useNavigate } from 'react-router-dom'

import Menu from '../Menu/menu.component'
import Navigation from '../Navigation/navigation.component'
import SearchBar from '../SearchBar/searchbar.component'

import { useUserStore } from '@/store'

const Header = () => {
  const [userInfo, setUserInfo] = useUserStore((state) => [state.userInfo, state.setUserInfo])
  const navigate = useNavigate()

  const handleClickLogin = () => {
    navigate('/login')
  }

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
          <button className="login-btn btn-style" onClick={handleClickLogin}>
            Đăng Nhập
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
