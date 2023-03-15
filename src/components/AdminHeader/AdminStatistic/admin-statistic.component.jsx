import './admin-statistic.styles.scss'

import { useState } from 'react'

import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'

function AdminStatistic() {
  const managements = [
    {
      id: 1,
      title: 'Thống Kê Khách Hàng',
      icon: <ArrowRightOutlinedIcon />,
    },
    {
      id: 2,
      title: 'Thống Kê Sản Phẩm',
      icon: <ArrowRightOutlinedIcon />,
    },
    {
      id: 3,
      title: 'Thống Kê Theo Năm',
      icon: <ArrowRightOutlinedIcon />,
    },
    {
      id: 4,
      title: ' Thống Kê Theo Tháng',
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
        <BarChartOutlinedIcon />
        <h4>Thống Kê Doanh Số</h4>
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

export default AdminStatistic
