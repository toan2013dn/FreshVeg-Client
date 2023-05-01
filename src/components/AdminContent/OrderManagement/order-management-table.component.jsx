import './order-management-table.styles.scss'

import { useOrderStore, useTokenStore } from '@/store'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useState } from 'react'
import { useEffect } from 'react'

import axios from '@/api/axios'
import CancelIcon from '@mui/icons-material/Cancel'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import InfoDetailIcon from '@mui/icons-material/PriorityHighOutlined'
import Tooltip from '@mui/material/Tooltip'
import UserOrderInfo from '@/components/UserPageComponents/UserOrder/UserOrderInfo/user-order-info.component'

function StatusRender(props) {
  // const [isVerified, setIsVerified] = useState('pending')
  const [token] = useTokenStore((state) => [state.token])
  const [status, setStatus] = useState(props.row.status)
  console.log(token)
  const handleConfirm = () => {
    setStatus('Confirmed')
    axios
      .patch(
        `/orderAdmin/${props.row.orderId}/confirmed`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      )
      .catch((err) => {
        console.log('cancel order', err)
      })
  }

  const handleCancel = () => {
    setStatus('Cancel')
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
      .catch((err) => {
        console.log('cancel order', err)
      })
  }

  return (
    <div className="status-render">
      {status === 'onWaitingConfirm' && (
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
      {status === 'Confirmed' && (
        <div className="status-success">
          <CheckCircleIcon />
          <span style={{ color: 'black', fontSize: '16px' }}>Xác Nhận</span>
        </div>
      )}
      {status === 'Cancel' && (
        <div className="status-cancel">
          <CancelIcon />
          <span style={{ color: 'black', fontSize: '16px' }}>Đã Hủy</span>
        </div>
      )}
    </div>
  )
}

// Detail Render
function DetailRender(props) {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <div className="detail-render">
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
  { field: 'orderId', headerName: 'ID', width: 60 },
  {
    field: 'receiverName',
    headerName: 'Tên Người Nhận',
    width: 140,
    valueGetter: (params) => `${params.row.address.receiverName}`,
  },

  { field: 'phone', headerName: 'Số Điện Thoại', width: 140 },
  {
    field: 'orderDate',
    headerName: 'Ngày Đặt Hàng',
    width: 140,
    valueGetter: (params) => {
      const date = new Date(params.value)
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    },
  },
  {
    field: 'address',
    headerName: 'Địa Chỉ',
    width: 300,
    valueGetter: (params) => `${params.value.address}`,
  },
  {
    field: 'amount',
    headerName: 'Tổng Tiền',
    width: 130,
    valueGetter: (params) => `${(params.value * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ`,
  },
  { field: 'details', headerName: 'Chi Tiết', width: 100, renderCell: DetailRender, sortable: false },
  { field: 'status', headerName: 'Trạng Thái', width: 130, renderCell: StatusRender },
]

function OrderManagementTable() {
  const [orders, setOrders] = useOrderStore((state) => [state.orders, state.setOrders])
  const [token] = useTokenStore((state) => [state.token])

  useEffect(() => {
    axios
      .get('/orderAdmin/all', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setOrders(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div className="order-management">
      <div
        className="user-order"
        style={{
          height: '100%',
        }}
      >
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
    </div>
  )
}

export default OrderManagementTable
