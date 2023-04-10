import './user-order.styles.scss'

import { useOrderStore } from '@/store'
import { DataGrid } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'

import axios from '@/api/axios'
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined'
import InfoDetailIcon from '@mui/icons-material/PriorityHighOutlined'
import Alert from '@mui/joy/Alert'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import UserOrderInfo from './UserOrderInfo/user-order-info.component'

const object = {
  onWaitingConfirm: (
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
  Confirmed: (
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
          Đang giao hàng
        </span>
      </Alert>
    </>
  ),
  Success: (
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
          Thành công
        </span>
      </Alert>
    </>
  ),
  Failed: (
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
          Thất bại
        </span>
      </Alert>
    </>
  ),
}

function StatusRender(props) {
  const { value } = props

  return <div className="status-render">{object[value]}</div>
  // return <div className="status-render">{value}</div>
}

// a function that renders the action buttons
function ActionRender(props) {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleCancelOrder = () => {
    Swal.fire({
      text: 'Bạn có chắc chắn muốn huỷ đơn hàng này?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF2400',
      cancelButtonColor: '#e5e5e5',
      confirmButtonText: 'Xác nhận',
      cancelButtonText: 'Đóng',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({ text: 'Đơn hàng đã huỷ!', confirmButtonColor: '#3e8e41', icon: 'success' })
      }
    })
  }

  return (
    <div className="action-render">
      <button className="action-render__btn info" onClick={() => setIsOpenModal(true)}>
        <InfoDetailIcon className="info-btn" />
      </button>
      <UserOrderInfo isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
      <button className="action-render__btn delete" onClick={handleCancelOrder}>
        <DeleteIcon className="delete-btn" />
      </button>
    </div>
  )
}

const columns = [
  { field: 'orderId', headerName: 'ID', width: 80 },
  { field: 'orderDate', headerName: 'Ngày Đặt', width: 130 },
  { field: 'phone', headerName: 'Số Điện Thoại', width: 130 },
  // {
  //   field: 'address',
  //   headerName: 'Địa Chỉ',
  //   width: 250,
  // },
  {
    field: 'amount',
    headerName: 'Tổng Số Tiền',
    width: 150,
  },
  { field: 'status', headerName: 'Trạng Thái', width: 130, renderCell: StatusRender, className: 'status-column' },
  { field: 'action', headerName: '', width: 130, sortable: false, renderCell: ActionRender },
]

function UserOrder() {
  const [orders, setOrders] = useOrderStore((state) => [state.orders, state.setOrders])

  useEffect(() => {
    axios
      .get('/order/all')
      .then((res) => {
        setOrders(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(orders)
  // React.useEffect(() => {}, [orders])

  return (
    <div className="user-order">
      <input type="text" placeholder="Tìm kiếm đơn hàng..." />
      <DataGrid
        style={{ fontSize: '16px' }}
        rowHeight={100}
        rows={orders}
        getRowId={(row) => row.orderId}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}

export default UserOrder
