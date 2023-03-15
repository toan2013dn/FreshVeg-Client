import './admin-management.styles.scss'

import { useState } from 'react'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined'

function AdminManagement() {
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
    {
      id: 4,
      title: 'Quản Lý Khách Hàng',
      icon: <ArrowRightOutlinedIcon />,
    },
  ]

  const [activeId, setActiveId] = useState(null)

  const handleClick = (id) => {
    setActiveId(id)
  }

  return (
    <div className="admin-management">
      <div className="admin-management--title">
        <GridOnOutlinedIcon />
        <h4>Hệ Thống Quản Lý</h4>
      </div>
      {managements.map((management) => (
        <div
          className={`admin-management--item ${activeId === management.id ? 'active' : ''}`}
          key={management.id}
          onClick={() => handleClick(management.id)}
        >
          {management.icon}
          <p>{management.title}</p>
        </div>
      ))}
    </div>
  )
}

export default AdminManagement
