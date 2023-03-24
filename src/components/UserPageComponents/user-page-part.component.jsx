import './user-page-part.styles.scss'
import UserFilter from './UserFilter/user-filter.component'
import UserInfoTable from './UserInfoTable/user-info-table.component'
import UserOrder from './UserOrder/user-order.component'
import UserAddress from './UserAddress/user-address.component'
import UserPassword from './UserPassword/user-password.component'
import { useState } from 'react'

function UserPagePart() {
  const [tab, setTab] = useState('profile')

  const tabs = {
    profile: <UserInfoTable />,
    bill: <UserOrder />,
    address: <UserAddress />,
    password: <UserPassword />,
  }
  return (
    <div className="user-page-part">
      <UserFilter
        userAvatar="https://www.8newsnow.com/wp-content/uploads/sites/59/2022/08/husky_eyes.jpg?w=1988&h=1440&crop=1"
        username={'Le Anh DUc'}
        setTab={setTab}
      />
      {tabs[tab]}
    </div>
  )
}

export default UserPagePart
