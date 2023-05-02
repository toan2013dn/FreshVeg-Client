import './table-statistic.styles.scss'

import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

function TableStatistic() {
  const data = {
    labels: [
      'Tháng 1',
      'Tháng 2',
      'Tháng 3',
      'Tháng 4',
      'Tháng 5',
      'Tháng 6',
      'Tháng 7',
      'Tháng 8',
      'Tháng 9',
      'Tháng 10',
      'Tháng 11',
      'Tháng 12',
    ],
    datasets: [
      {
        label: 'Đơn hàng bán được',
        backgroundColor: ['#4caf50'],
        data: [4235, 8917, 654, 2901, 5000, 1000, 2400, 9374, 2487, 5719, 8156, 3621],
      },
    ],
  }

  return (
    <div className="table-statistic">
      <Bar data={data} />
    </div>
  )
}

export default TableStatistic
