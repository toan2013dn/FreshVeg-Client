import './user-management.styles.scss'

import { useTokenStore } from '@/store'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'

import axios from '@/api/axios'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import Tooltip from '@mui/material/Tooltip'
import UserOrderCount from './UserOrderCount/user-order-count.component'

function ActionRender(props) {
  const { value } = props
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <div className="action-render">
      <Tooltip title="Xem chi tiết">
        <button className="info" style={{ border: 'none' }} onClick={() => setIsOpenModal(true)}>
          <InfoOutlinedIcon className="info-btn" />
        </button>
      </Tooltip>
      <UserOrderCount isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} userId={props.row.userId} />
    </div>
  )
}

//Image Render
function ImageRender(props) {
  return (
    <div className="image-render">
      {props.row.avatar === null ? (
        <img
          src="https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png"
          alt="avatar"
        />
      ) : (
        <img src={props.row.avatar} alt="avatar" />
      )}
    </div>
  )
}

const columns = [
  { field: 'userId', headerName: 'ID', width: 80 },
  { field: 'image', headerName: 'Ảnh Đại Diện', width: 130, renderCell: ImageRender, sortable: false },
  { field: 'name', headerName: 'Tên Khách Hàng', width: 300 },
  { field: 'email', headerName: 'Email', width: 500 },
  { field: 'action', headerName: '', width: 150, renderCell: ActionRender, sortable: false },
]

function UserManagement() {
  const [users, setUsers] = useState([])
  const [token] = useTokenStore((state) => [state.token])

  useEffect(() => {
    axios
      .get('/statistic/user/all', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [setUsers])

  return (
    <div className="user-management">
      <div className="user-order">
        <DataGrid
          style={{ fontSize: '16px' }}
          rowHeight={100}
          rows={users}
          getRowId={(row) => row.userId}
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

export default UserManagement
