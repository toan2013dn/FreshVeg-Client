import './admin-header.styles.scss'

import { ReactComponent as Logo } from '@/assets/icons/logo.svg'
import SearchBar from '../SearchBar/searchbar.component'
import Avatar from './Avatar/avatar.component'
import Notification from './Notification/notification.component'
import AdminNavbar from './AdminNavbar/admin-navbar.component'
import AdminSideBar from './AdminSidebar/admin-sidebar.component'

function AdminHeader() {
  return (
    <div className=" wrapper">
      <div className="admin-header">
        <AdminSideBar />
        <AdminNavbar />
      </div>
    </div>
  )
}

export default AdminHeader
