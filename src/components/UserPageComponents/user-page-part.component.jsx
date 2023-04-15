import './user-page-part.styles.scss'

import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Next } from '@/assets/icons/Next.svg'

import UserFilter from './UserFilter/user-filter.component'
import UserInfoTable from './UserInfoTable/user-info-table.component'
import UserOrder from './UserOrder/user-order.component'
import UserAddress from './UserAddress/user-address.component'
import UserPassword from './UserPassword/user-password.component'

function UserPagePart() {
  // const [tab, setTab] = useState('profile')
  const [tab, setTab] = useState(localStorage.getItem('activeTab') || 'profile')

  const tabs = {
    profile: { name: 'Hồ sơ', component: <UserInfoTable /> },
    bill: { name: 'Đơn hàng', component: <UserOrder /> },
    address: { name: 'Địa chỉ', component: <UserAddress /> },
    password: { name: 'Đổi mật khẩu', component: <UserPassword /> },
  }

  const Breadcrumbs = () => {
    return (
      <div className="breadcrumbs">
        <div className="user-page--links">
          <NavLink to="/">Trang chủ</NavLink>
          <Next />
          <a to="/">Tài khoản của tôi</a>
          <Next />
          <NavLink to="/user-page">{tabs[tab].name}</NavLink>
        </div>
      </div>
    )
  }

  useEffect(() => {
    localStorage.setItem('activeTab', tab)
  }, [tab])

  return (
    <>
      <Breadcrumbs />
      <div className="user-page-part">
        <UserFilter
          userAvatar="https://www.8newsnow.com/wp-content/uploads/sites/59/2022/08/husky_eyes.jpg?w=1988&h=1440&crop=1"
          username={'Le Anh DUc'}
          setTab={setTab}
        />
        {tabs[tab].component}
      </div>
    </>
  )
}

export default UserPagePart
