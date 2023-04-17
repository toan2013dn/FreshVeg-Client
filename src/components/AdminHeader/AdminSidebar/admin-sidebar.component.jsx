import './admin-sidebar.styles.scss'

import { useState } from 'react'
import { ReactComponent as Logo } from '@/assets/icons/logo.svg'
import { Link } from 'react-router-dom'
import { useActiveAdminPageStore } from '@/store'

import AdminManagement from '../AdminManagement/admin-management.component'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import AdminStatistic from '../AdminStatistic/admin-statistic.component'

function AdminSideBar() {
  const [activeHomePage, setActiveHomePage] = useState(true)
  const [activeId, setActiveId] = useState(null)
  const [tab, setTab] = useActiveAdminPageStore((state) => [state.activeAdminPage, state.setActiveAdminPage])

  const handleClick = () => {
    setActiveHomePage(true)
  }

  return (
    <div className="admin-sidebar">
      <Link className="logo">
        <Logo />
      </Link>
      <div className="admin-sidebar--categories">
        <div className={`dashboard ${activeHomePage ? 'active' : ''}`} onClick={handleClick}>
          <HomeOutlinedIcon />
          <h4>Trang Chủ</h4>
        </div>
        <AdminManagement
          activeHomePage={activeHomePage}
          setActiveHomePage={setActiveHomePage}
          activeId={activeId}
          setActiveId={setActiveId}
          setTab={setTab}
        />
        <AdminStatistic
          activeHomePage={activeHomePage}
          setActiveHomePage={setActiveHomePage}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      </div>
    </div>
  )
}

export default AdminSideBar
