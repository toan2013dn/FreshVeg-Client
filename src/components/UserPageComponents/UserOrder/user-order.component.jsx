import './user-order.styles.scss'
import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'

import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'date', headerName: 'Ngày Đặt', width: 130 },
  { field: 'phone', headerName: 'Số Điện Thoại', width: 130 },
  {
    field: 'address',
    headerName: 'Địa Chỉ',
    width: 250,
  },
  {
    field: 'total',
    headerName: 'Tổng Số Tiền',
    width: 150,
  },
  { field: 'status', headerName: 'Trạng Thái', width: 130 },
  { field: 'action', headerName: '', width: 130 },
]

const rows = [
  {
    id: 1,
    date: '21/06/2021',
    phone: '0934795670',
    address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
    total: '1000000đ',
    status: 'Huy',
  },
  {
    id: 2,
    date: '21/06/2021',
    phone: '0934795670',
    address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
    total: '1000000đ',
    status: 'Huy',
  },
  {
    id: 3,
    date: '21/06/2021',
    phone: '0934795670',
    address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
    total: '1000000đ',
    status: <PendingOutlinedIcon />,
  },
  {
    id: 4,
    date: '21/06/2021',
    phone: '0934795670',
    address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
    total: '1000000đ',
    status: 'Huy',
  },
  {
    id: 5,
    date: '21/06/2021',
    phone: '0934795670',
    address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
    total: '1000000đ',
    status: 'Huy',
  },
]

function UserOrder() {
  return (
    <div className="user-order">
      <DataGrid
        style={{ fontSize: '16px', backgroundColor: 'var(--profile-color)' }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}

export default UserOrder
