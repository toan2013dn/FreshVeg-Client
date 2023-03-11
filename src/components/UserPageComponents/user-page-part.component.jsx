import './user-page-part.styles.scss'
import UserFilter from './UserFilter/user-filter.component'
import UserInfoTable from './UserInfoTable/user-info-table.component'
import UserOrder from './UserOrder/user-order.component'
import UserAddress from './UserPassword/user-address.component'

function UserPagePart() {
  return (
    <div className="user-page-part">
      <UserFilter
        userAvatar="https://www.8newsnow.com/wp-content/uploads/sites/59/2022/08/husky_eyes.jpg?w=1988&h=1440&crop=1"
        username={'Le Anh DUc'}
      />
      {/* <UserInfoTable
        userAvatar="https://www.8newsnow.com/wp-content/uploads/sites/59/2022/08/husky_eyes.jpg?w=1988&h=1440&crop=1"
        password={'091023910230'}
      /> */}
      {/* <UserAddress /> */}
      <UserOrder />
    </div>
  )
}

export default UserPagePart
