import './admin-statistic.styles.scss'

import { useAdminStore } from '@/store'
import { useState } from 'react'

import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'

function AdminStatistic({ activeHomePage, setActiveHomePage, activeId, setActiveId }) {
  const managements = [
    {
      id: 5,
      title: 'Thống Kê Khách Hàng',
      icon: <ArrowRightOutlinedIcon />,
    },
    {
      id: 6,
      title: 'Thống Kê Sản Phẩm',
      icon: <ArrowRightOutlinedIcon />,
    },
    {
      id: 7,
      title: 'Thống Kê Theo Năm',
      icon: <ArrowRightOutlinedIcon />,
    },
    {
      id: 8,
      title: ' Thống Kê Theo Tháng',
      icon: <ArrowRightOutlinedIcon />,
    },
  ]

  const [setTabId] = useAdminStore((state) => [state.setTabId])

  const handleClick = (id) => {
    if (activeHomePage) {
      setActiveHomePage(false)
    }
    setActiveId(id)
    setTabId(id)
  }

  return (
    <div className="admin-management">
      <div className="admin-management--title">
        <BarChartOutlinedIcon />
        <h4>Thống Kê Doanh Số</h4>
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

export default AdminStatistic
