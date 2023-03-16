import './order-management-table.styles.scss'

import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
import Alert from '@mui/joy/Alert'
import Box from '@mui/joy/Box'

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'

function StatusRender(props) {
  // const [isVerified, setIsVerified] = useState('pending')
  const [status, setStatus] = useState('pending')
  const { value } = props

  const handleConfirm = () => {
    setStatus('success')
  }

  const handleCancel = () => {
    setStatus('cancel')
  }

  return (
    <div className="status-render">
      {status === 'pending' && (
        <div className="pending">
          <div className="success" onClick={handleConfirm}>
            <CheckCircleOutlineOutlinedIcon />
            <span>Xác Nhận</span>
          </div>
          <div className="cancel" onClick={handleCancel}>
            <CancelOutlinedIcon />
            <span>Hủy Đơn</span>
          </div>
        </div>
      )}
      {status === 'success' && (
        <div className="status-success">
          <CheckCircleIcon />
          <span style={{ color: 'black', fontSize: '16px' }}>Xác Nhận</span>
        </div>
      )}
      {status === 'cancel' && (
        <div className="status-cancel">
          <CancelIcon />
          <span style={{ color: 'black', fontSize: '16px' }}>Đã Hủy</span>
        </div>
      )}
    </div>
  )
}

// Detail Render
function DetailRender() {
  return (
    <div
      className="detail-render"
      style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', width: '100%' }}
    >
      <InfoOutlinedIcon />
    </div>
  )
}

const object = {
  pending: (
    <div className="pending">
      <div className="success">
        <CheckCircleOutlineOutlinedIcon />
        <span>Xác Nhận</span>
      </div>
      <div className="cancel">
        <CancelOutlinedIcon />
        <span>Hủy Đơn</span>
      </div>
    </div>
  ),
  success: (
    <>
      <div className="status-success">
        <CheckCircleIcon />
        <span style={{ color: 'black', fontSize: '16px' }}>Xác Nhận</span>
      </div>
    </>
  ),
  cancel: (
    <>
      <div className="status-cancel">
        <CancelIcon />
        <span style={{ color: 'black', fontSize: '16px' }}>Đã Hủy</span>
      </div>
    </>
  ),
}

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'name', headerName: 'Tên Khách Hàng', width: 140 },
  { field: 'phone', headerName: 'Số Điện Thoại', width: 140 },
  {
    field: 'date',
    headerName: 'Ngày Đặt Hàng',
    width: 140,
  },
  {
    field: 'address',
    headerName: 'Địa Chỉ',
    width: 310,
  },
  { field: 'total', headerName: 'Tổng Tiền', width: 130 },
  { field: 'details', headerName: 'Chi Tiết', width: 70, renderCell: DetailRender, sortable: false },
  { field: 'status', headerName: 'Trạng Thái', width: 130, renderCell: StatusRender },
]

const rows = [
  {
    id: 1,
    name: 'Trần Ngọc Toàn',
    phone: '0934795670',
    date: '21/06/2021',
    address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
    total: '1000000đ',
    status: object.pending,
  },
  {
    id: 2,
    name: 'Trần Ngọc Toàn',
    phone: '0934795670',
    date: '21/06/2021',
    address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
    total: '1000000đ',
    status: object.success,
  },
  {
    id: 3,
    name: 'Trần Ngọc Toàn',
    phone: '0934795670',
    date: '21/06/2021',
    address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
    total: '1000000đ',
    status: object.cancel,
  },
  {
    id: 4,
    name: 'Trần Ngọc Toàn',
    phone: '0934795670',
    date: '21/06/2021',
    address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
    total: '1000000đ',
    status: object.pending,
  },
  {
    id: 5,
    name: 'Trần Ngọc Toàn',
    phone: '0934795670',
    date: '21/06/2021',
    address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
    total: '1000000đ',
    status: object.pending,
  },
  {
    id: 6,
    name: 'Trần Ngọc Toàn',
    phone: '0934795670',
    date: '21/06/2021',
    address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
    total: '1000000đ',
    status: object.pending,
  },
  {
    id: 7,
    name: 'Trần Ngọc Toàn',
    phone: '0934795670',
    date: '21/06/2021',
    address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
    total: '1000000đ',
    status: object.pending,
  },
  {
    id: 8,
    name: 'Trần Ngọc Toàn',
    phone: '0934795670',
    date: '21/06/2021',
    address: '120 Bùi hữu Nghĩa, phường Phước Mỹ, Quaannj Sơn Trà, thành phố Đà nẵng',
    total: '1000000đ',
    status: object.pending,
  },
]

function OrderManagementTable() {
  return (
    <div className="order-management">
      <div
        className="user-order"
        style={{
          width: '100%',
          height: '100%',
        }}
      >
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
    </div>
  )
}

export default OrderManagementTable
