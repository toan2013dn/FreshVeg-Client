import { useState } from 'react'
import './admin-sidebar.styles.scss'

import { ReactComponent as Logo } from '@/assets/icons/logo.svg'
import { Link } from 'react-router-dom'

import AdminManagement from '../AdminManagement/admin-management.component'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import AdminStatistic from '../AdminStatistic/admin-statistic.component'

function AdminSideBar() {
  const [activeHomePage, setActiveHomePage] = useState(true)

  return (
    <div className="admin-sidebar">
      <Link className="logo">
        <Logo />
      </Link>
      <div className="admin-sidebar--categories">
        <div className={`dashboard ${activeHomePage ? 'active' : ''}`}>
          <HomeOutlinedIcon />
          <h4>Trang Chủ</h4>
        </div>
        <AdminManagement activeHomePage={activeHomePage} setActiveHomePage={setActiveHomePage} />
        <AdminStatistic />
      </div>
    </div>
  )
}

export default AdminSideBar
