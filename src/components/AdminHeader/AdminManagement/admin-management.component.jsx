import './admin-management.styles.scss'

import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined'

import { useAdminStore } from '@/store'

function AdminManagement({ activeHomePage, setActiveHomePage, activeId, setActiveId }) {
  const managements = [
    {
      id: 1,
      title: 'Quản Lý Thể Loại',
      icon: <ArrowRightOutlinedIcon />,
    },
    {
      id: 2,
      title: 'Quản Lý Sản Phẩm',
      icon: <ArrowRightOutlinedIcon />,
    },
    {
      id: 3,
      title: 'Quản Lý Đơn Hàng',
      icon: <ArrowRightOutlinedIcon />,
    },
  ]

  const [setTabId] = useAdminStore((state) => [state.setTabId])

  const handleClick = (id) => {
    if (activeHomePage) {
      setActiveHomePage(false)
    }
    setActiveId(id)
    // setTab(id)
    setTabId(id)
  }

  return (
    <div className="admin-management">
      <div className="admin-management--title">
        <GridOnOutlinedIcon />
        <h4>Hệ Thống Quản Lý</h4>
      </div>
      {managements.map((management) => (
        <div
          className={`admin-management--item ${activeId === management.id && !activeHomePage ? 'active' : ''}`}
          key={management.id}
          onClick={() => handleClick(management.id)}
        >
          {management.icon}
          <p style={{ marginBottom: '0' }}>{management.title}</p>
        </div>
      ))}
    </div>
  )
}

export default AdminManagement
