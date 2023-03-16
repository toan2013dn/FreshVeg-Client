import './admin-page.styles.scss'
import AdminHeader from '@/components/AdminHeader/admin-header.component'
import AdminContent from '../../components/AdminContent/admin-content.component'
import AdminSideBar from '@/components/AdminHeader/AdminSidebar/admin-sidebar.component'
import AdminNavbar from '@/components/AdminHeader/AdminNavbar/admin-navbar.component'

function AdminPage() {
  return (
    <div className="admin-page">
      {/* <AdminHeader /> */}
      <AdminNavbar />
      <AdminSideBar />
      <AdminContent />
    </div>
  )
}

export default AdminPage
