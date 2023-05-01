import './categories-management.styles.scss'

import { useCategoriesStore, useTokenStore } from '@/store'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import axios from '@/api/axios'
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import Tooltip from '@mui/material/Tooltip'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import AddCategory from '../AddCategoryModal/add-category.component'
import EditCategory from './EditCategory/edit-category.component'

function ActionRender(props) {
  const [categories, setCategories] = useCategoriesStore((state) => [state.categories, state.setCategories])
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [token] = useTokenStore((state) => [state.token])

  const handleDelete = () => {
    Swal.fire({
      text: 'Bạn có chắc chắn muốn xoá thể loại này?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xoá',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/category/${props.row.categoryId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })
          .then((res) => {
            const newCategories = categories.filter((category) => category.categoryId !== props.row.categoryId)
            setCategories(newCategories)
            toast.success('Xoá thể loại thành công!')
          })
          .catch((err) => {
            console.log(err)
          })
      }
    })
  }

  const handleUpdate = () => {
    setIsOpenModal(true)
  }
  return (
    <div className="action-render">
      <Tooltip title="Chỉnh sửa">
        <button className="action-render__btn info" onClick={handleUpdate}>
          <EditOutlinedIcon className="info-btn" />
        </button>
      </Tooltip>
      <EditCategory
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        categoryName={props.row.categoryName}
        categoryId={props.row.categoryId}
      />
      <Tooltip title="Xoá thể loại">
        <button className="action-render__btn delete" onClick={handleDelete}>
          <DeleteIcon className="delete-btn" />
        </button>
      </Tooltip>
    </div>
  )
}

const columns = [
  { field: 'categoryId', headerName: 'ID', width: 250 },
  { field: 'categoryName', headerName: 'Tên Thể Loại', width: 700 },
  { field: 'action', headerName: 'Hành động', width: 130, renderCell: ActionRender, sortable: false },
]
function CategoriesManagement() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [categories, setCategories] = useCategoriesStore((state) => [state.categories, state.setCategories])
  useEffect(() => {
    axios
      .get('/category/all')
      .then((res) => {
        setCategories(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [setCategories])

  return (
    <div className="categories-management">
      <div className="user-order">
        <button className="add-btn" onClick={() => setIsOpenModal(true)}>
          Thêm Mới
        </button>
        <DataGrid
          style={{ fontSize: '16px' }}
          rowHeight={100}
          rows={categories}
          getRowId={(row) => row.categoryId}
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
      <AddCategory isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default CategoriesManagement
