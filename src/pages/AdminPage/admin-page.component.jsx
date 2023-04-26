import './admin-page.styles.scss'

import { useEffect, useState } from 'react'

import AdminNavbar from '@/components/AdminHeader/AdminNavbar/admin-navbar.component'
import AdminSideBar from '@/components/AdminHeader/AdminSidebar/admin-sidebar.component'
import ReactLoading from 'react-loading'
import AdminContent from '../../components/AdminContent/admin-content.component'

function AdminPage() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2300)
  }, [])

  return (
    <>
      {loading ? (
        <ReactLoading className="loading" type={'spin'} color={'#4caf50'} height={'6%'} width={'6%'} />
      ) : (
        <div className="admin-page">
          <AdminNavbar />
          <AdminSideBar />
          <AdminContent />
        </div>
      )}
    </>
  )
}

export default AdminPage
