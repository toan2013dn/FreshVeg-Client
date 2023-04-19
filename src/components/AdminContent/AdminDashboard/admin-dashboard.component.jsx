import './admin-dashboard.styles.scss'

import React, { useRef, useEffect } from 'react'

import CardStatistic from './CardStatistic/card-statistic.component'
import SideStatistic from './SideStatistic/side-statistic.component'
import TableStatistic from './TableStatistic/table-statistic.component'

function AdminDashboard() {
  return (
    <>
      <div className="admin-dashboard">
        <CardStatistic />
        <TableStatistic />
        <SideStatistic />
      </div>
    </>
  )
}

export default AdminDashboard
