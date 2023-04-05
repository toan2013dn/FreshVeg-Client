import './user-order.styles.scss'
import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
import { useOrderStore } from '@/store'

import Swal from 'sweetalert2/dist/sweetalert2.js'
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined'
import InfoDetailIcon from '@mui/icons-material/PriorityHighOutlined'
import Alert from '@mui/joy/Alert'
import UserOrderInfo from './UserOrderInfo/user-order-info.component'

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

function StatusRender(props) {
  const { value } = props

  return <div className="status-render">{object[value]}</div>
}

// a function that renders the action buttons
function ActionRender(props) {
  const [orders, setOrders] = useOrderStore((state) => [state.orders, state.setOrders])
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleDelete = () => {
    Swal.fire({
      text: 'Bạn có chắc chắn muốn huỷ đơn hàng này?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF2400',
      cancelButtonColor: '#e5e5e5',
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({ text: 'Đơn hàng đã huỷ!', confirmButtonColor: '#3e8e41', icon: 'success' })
        const updatedRows = orders.filter((row) => row.id !== props.id)
        setOrders(updatedRows)
      }
      ;('')
    })
  }

  return (
    <div className="action-render">
      <button className="action-render__btn info" onClick={() => setIsOpenModal(true)}>
        <InfoDetailIcon className="info-btn" />
      </button>
      <UserOrderInfo isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
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

function UserOrder() {
  const [orders] = useOrderStore((state) => [state.orders])

  React.useEffect(() => {}, [orders])

  return (
    <div className="user-order">
      <input type="text" placeholder="Tìm kiếm đơn hàng..." />
      <DataGrid
        style={{ fontSize: '16px' }}
        rowHeight={100}
        rows={orders}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}

export default UserOrder
