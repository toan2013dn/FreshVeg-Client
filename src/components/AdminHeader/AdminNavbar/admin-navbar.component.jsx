import './admin-navbar.styles.scss'

import SearchBar from '@/components/SearchBar/searchbar.component'
import Avatar from '../Avatar/avatar.component'
import Notification from '../Notification/notification.component'

function AdminNavbar() {
  return (
    <div className="admin-navbar">
      <SearchBar />
      <Avatar />
      <Notification />
    </div>
  )
}

export default AdminNavbar
