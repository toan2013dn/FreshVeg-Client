import './user-management.styles.scss'

import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'

import axios from '@/api/axios'
import Tooltip from '@mui/material/Tooltip'
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import AddProduct from '../AddProduct/add-product.component'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

function ActionRender(props) {
  const { value } = props

  return (
    <div className="action-render">
      <Tooltip title="Xem chi tiết">
        <button className="info" style={{ border: 'none' }}>
          <InfoOutlinedIcon className="info-btn" />
        </button>
      </Tooltip>
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
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios
      .get('/user/all')
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
        <AddProduct isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
      </div>
    </div>
  )
}

export default UserManagement
