import './categories-management.styles.scss'

import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
import Alert from '@mui/joy/Alert'

import AddCategory from '../AddCategoryModal/add-category.component'

import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'

// a function that renders the action buttons
function ActionRender(props) {
  const { value } = props

  return (
    <div className="action-render">
      <button className="action-render__btn info">
        <EditOutlinedIcon className="info-btn" />
      </button>
      <button className="action-render__btn delete">
        <DeleteIcon className="delete-btn" />
      </button>
    </div>
  )
}

const columns = [
  { field: 'id', headerName: 'ID', width: 250 },
  { field: 'categories', headerName: 'Tên Thể Loại', width: 700 },
  { field: 'action', headerName: 'Hành động', width: 130, renderCell: ActionRender, sortable: false },
]

const rows = [
  {
    id: 1,
    categories: 'Rau',
  },
  {
    id: 2,
    categories: 'Củ',
  },
  {
    id: 3,
    categories: 'Quả ',
  },
  {
    id: 4,
    categories: 'Quả',
  },
  {
    id: 5,
    categories: 'Quả',
  },
  {
    id: 6,
    categories: 'Quả',
  },
  {
    id: 7,
    categories: 'Quả',
  },
  {
    id: 8,
    categories: 'Quả',
  },
]

function CategoriesManagement() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <div className="categories-management">
      <div className="user-order">
        <button className="add-btn" onClick={() => setIsOpenModal(true)}>Thêm Mới</button>
        <input type="text" placeholder="Tìm kiếm..." />
        <DataGrid
          style={{ fontSize: '16px' }}
          rowHeight={100}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
      <AddCategory isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </div>
  )
}

export default CategoriesManagement
