import './user-order.styles.scss'

import { useOrderStore } from '@/store'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from '@/api/axios'
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined'
import InfoDetailIcon from '@mui/icons-material/PriorityHighOutlined'
import Alert from '@mui/joy/Alert'
import Tooltip from '@mui/material/Tooltip'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import UserOrderInfo from './UserOrderInfo/user-order-info.component'

const object = {
  onWaitingConfirm: (
    <>
      <Alert color="primary" style={{ maxWidth: '100%', maxHeight: '100%' }}>
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
    </>
  ),
  Confirmed: (
    <>
      <Alert color="info" style={{ maxWidth: '100%', maxHeight: '100%' }}>
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
    </>
  ),
  Success: (
    <>
      <Alert color="success" style={{ maxWidth: '100%', maxHeight: '100%' }}>
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
    </>
  ),
  Failed: (
    <>
      <Alert color="warning" style={{ maxWidth: '100%', maxHeight: '100%' }}>
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
    </>
  ),
  Cancel: (
    <>
      <Alert color="warning" style={{ maxWidth: '100%', maxHeight: '100%' }}>
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
    </>
  ),
}

function StatusRender(props) {
  const { value } = props

  return <div className="status-render">{object[value]}</div>
}

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
        axios
          .patch(`/order/${props.row.orderId}/cancel`)
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
        <button className="action-render__btn delete" onClick={handleCancelOrder}>
          <DeleteIcon className="delete-btn" />
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
      const date = new Date(params.value * 1000)
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

  useEffect(() => {
    axios
      .get('/order/all')
      .then((res) => {
        setOrders(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log('get order', err)
      })
  }, [])

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
