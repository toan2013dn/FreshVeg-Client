import './user-order.styles.scss'
import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
import Alert from '@mui/joy/Alert'
import Box from '@mui/joy/Box'
import Swal from 'sweetalert2/dist/sweetalert2.js'

import PendingIcon from '@mui/icons-material/PendingOutlined'
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined'
import InfoDetailIcon from '@mui/icons-material/PriorityHighOutlined'
import TickIcon from '@mui/icons-material/DoneOutlined'
import CancelIcon from '@mui/icons-material/DoNotDisturbAltRounded'

function StatusRender(props) {
  const { value } = props

  return <div className="status-render">{value}</div>
}

const handleDelete = () => {
  Swal.fire({
    text: 'Bạn có chắc chắn muốn huỷ đơn hàng này?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#e5e5e5',
    confirmButtonText: 'Xóa',
    cancelButtonText: 'Hủy',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({ text: 'Đơn hàng đã được huỷ!', icon: 'success' })
    }
  })
}

// a function that renders the action buttons
function ActionRender(props) {
  const { value } = props

  return (
    <div className="action-render">
      <button className="action-render__btn info">
        <InfoDetailIcon className="info-btn" />
      </button>
      <button className="action-render__btn delete" onClick={handleDelete}>
        <DeleteIcon className="delete-btn" />
      </button>
    </div>
  )
}

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
  { field: 'status', headerName: 'Trạng Thái', width: 130, renderCell: StatusRender, className: 'status-column' },
  { width: 130, sortable: false, renderCell: ActionRender },
]

const object = {
  pending: (
    <>
      <Alert color="primary" style={{ maxWidth: '100%', maxHeight: '100%' }}>
        <span
          style={{
            width: 90,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Chờ xác nhận
        </span>
      </Alert>
    </>
  ),
  success: (
    <>
      <Alert color="success" style={{ maxWidth: '100%', maxHeight: '100%' }}>
        <span
          style={{
            width: 90,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Đã đặt hàng
        </span>
      </Alert>
    </>
  ),
  cancel: (
    <>
      <Alert color="warning" style={{ maxWidth: '100%', maxHeight: '100%' }}>
        <span
          style={{
            width: 90,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Đã hủy
        </span>
      </Alert>
    </>
  ),
}

const rows = [
  {
    id: 1,
    date: '21/06/2021',
    phone: '0934795670',
    address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
    total: '1000000đ',
    status: object.pending,
  },
  {
    id: 2,
    date: '21/06/2021',
    phone: '0934795670',
    address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
    total: '200đ',
    status: object.success,
  },
  {
    id: 3,
    date: '21/06/2021',
    phone: '0934795670',
    address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
    total: '1000000đ',
    status: object.cancel,
  },
  {
    id: 4,
    date: '21/06/2021',
    phone: '0934795670',
    address: '124124 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
    total: '1000000đ',
    status: object.success,
  },
  {
    id: 5,
    date: '21/06/2021',
    phone: '0934795670',
    address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
    total: '1000000đ',
    status: object.success,
  },
  {
    id: 6,
    date: '21/06/2021',
    phone: '01245',
    address: '22 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
    total: '1000000đ',
    status: object.success,
  },
]

function UserOrder() {
  return (
    <div className="user-order">
      <input type="text" placeholder="Tìm kiếm đơn hàng..." />
      <DataGrid
        style={{ fontSize: '16px' }}
        rowHeight={100}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}

export default UserOrder
