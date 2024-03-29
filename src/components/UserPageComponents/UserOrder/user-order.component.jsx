import './user-order.styles.scss'

import { useOrderStore, useTokenStore, useUserStore } from '@/store'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'

import axios from '@/api/axios'
import ClearIcon from '@mui/icons-material/Clear'
import InfoDetailIcon from '@mui/icons-material/PriorityHighOutlined'
import { Alert } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import UserOrderInfo from './UserOrderInfo/user-order-info.component'

const object = {
  onWaitingConfirm: (
    <Alert icon={false} color="primary" style={{ maxWidth: '100%', maxHeight: '100%' }}>
      <span
        style={{
          width: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Chờ xác nhận
      </span>
    </Alert>
  ),
  Confirmed: (
    <Alert icon={false} color="info" style={{ maxWidth: '100%', maxHeight: '100%' }}>
      <span
        style={{
          width: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Đang giao hàng
      </span>
    </Alert>
  ),
  Success: (
    <Alert icon={false} color="success" style={{ maxWidth: '100%', maxHeight: '100%' }}>
      <span
        style={{
          width: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Thành công
      </span>
    </Alert>
  ),
  Failed: (
    <Alert icon={false} color="warning" style={{ maxWidth: '100%', maxHeight: '100%' }}>
      <span
        style={{
          width: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Thất bại
      </span>
    </Alert>
  ),
  Cancel: (
    <Alert icon={false} color="warning" style={{ maxWidth: '100%', maxHeight: '100%' }}>
      <span
        style={{
          width: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Đã huỷ
      </span>
    </Alert>
  ),
}

function StatusRender(props) {
  const { value } = props
  return <div className="status-render">{object[value]}</div>
}

function ActionRender(props) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [token] = useTokenStore((state) => [state.token])

  const isCancelDisabled = props.row.status === 'Cancel' || props.row.status === 'Confirmed' ? true : false

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
        axios
          .patch(
            `/order/${props.row.orderId}/cancel`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            },
          )
          .then((res) => {
            Swal.fire({ text: 'Đơn hàng đã huỷ!', showConfirmButton: false, icon: 'success', timer: 1300 })
            setTimeout(() => {
              window.location.reload()
            }, 1000)
          })
          .catch((err) => {
            console.log('cancel order', err)
          })
      }
    })
  }

  return (
    <div className="action-render">
      <Tooltip title="Xem chi tiết">
        <button className="action-render__btn info" onClick={() => setIsOpenModal(true)}>
          <InfoDetailIcon className="info-btn" />
        </button>
      </Tooltip>
      <UserOrderInfo
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        orderId={props.row.orderId}
        orderDate={props.row.orderDate}
        orderNote={props.row.note}
        orderTotal={props.row.amount}
        orderStatusPayment={props.row.statusPayment}
      />
      <Tooltip title="Huỷ đơn hàng">
        <button
          className={`action-render__btn delete ${isCancelDisabled ? 'disabled-button' : ''}`}
          onClick={handleCancelOrder}
          disabled={isCancelDisabled}
        >
          <ClearIcon className="delete-btn" />
        </button>
      </Tooltip>
    </div>
  )
}

const columns = [
  { field: 'orderId', headerName: 'ID', width: 80 },
  {
    field: 'orderDate',
    headerName: 'Ngày Đặt',
    width: 130,
    valueGetter: (params) => {
      const date = new Date(params.value)
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    },
  },
  { field: 'phone', headerName: 'Số Điện Thoại', width: 130 },
  {
    field: 'address',
    headerName: 'Địa Chỉ',
    width: 230,
    valueGetter: (params) => `${params.value.address}`,
  },
  {
    field: 'amount',
    headerName: 'Tổng Số Tiền',
    width: 150,
    valueGetter: (params) => `${params.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ`,
  },
  { field: 'status', headerName: 'Trạng Thái', width: 160, renderCell: StatusRender, className: 'status-column' },
  { field: 'action', headerName: '', width: 130, sortable: false, renderCell: ActionRender },
]

function UserOrder() {
  const [orders, setOrders] = useOrderStore((state) => [state.orders, state.setOrders])
  const [user] = useUserStore((state) => [state.userInfo])
  const [token] = useTokenStore((state) => [state.token])

  useEffect(() => {
    axios
      .get(`/orderUser/user/${user.userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setOrders(res.data)
      })
      .catch((err) => {
        console.log('get order', err)
      })
  }, [])

  return (
    <div className="user-order">
      <DataGrid
        style={{ fontSize: '16px' }}
        rowHeight={100}
        rows={orders}
        getRowId={(row) => row.orderId}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </div>
  )
}

export default UserOrder
