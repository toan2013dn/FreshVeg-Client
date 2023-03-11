import './user-page.styles.scss'

import Header from '@/components/Header/header.component'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Next } from '@/assets/icons/Next.svg'
import UserFilter from '@/components/UserPageComponents/UserFilter/user-filter.component'
import UserPagePart from '@/components/UserPageComponents/user-page-part.component'

function UserPage() {
  return (
    <div className="user-page">
      <Header />

      <div className="container">
        <div className="user-page--links">
          <NavLink to="/">Trang chủ</NavLink>
          <Next />
          <a to="/">Tài khoản của tôi</a>
          <Next />
          <NavLink to="/user-page">Hồ sơ</NavLink>
        </div>
    <UserPagePart/>
      </div>
    </div>
  )
}

export default UserPage
