import './product-management.styles.scss'

import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'

import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import AddProduct from '../AddProduct/add-product.component'
import { useEffect } from 'react'
import axios from '@/api/axios'
import Loading from 'react-loading'

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

//Image Render
function ImageRender() {
  return (
    <div className="image-render">
      <img
        src="data:image/jpeg;base64,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"
        alt="product"
      />
    </div>
  )
}

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'image', headerName: 'Ảnh Sản Phẩm', width: 130, renderCell: ImageRender, sortable: false },
  { field: 'name', headerName: 'Tên Sản Phẩm', width: 130 },
  { field: 'categories', headerName: 'Thể Loại', width: 130 },
  { field: 'price', headerName: 'Giá', width: 130 },
  { field: 'describe', headerName: 'Mô Tả Sản Phẩm', width: 370 },
  { field: 'action', headerName: '', width: 130, renderCell: ActionRender, sortable: false },
]

const rows = [
  {
    id: 1,
    name: 'Sữa chua',
    categories: 'Rau',
    price: '10000đ',
    describe:
      'Sữa chua là một loại thực phẩm chế biến từ sữa, có mùi vị chua, thơm ngon, dễ ăn, dễ tiêu hóa, có lợi cho sức khỏe.',
  },
  {
    id: 2,
    name: 'Sữa chua',
    categories: 'Rau',
    price: '10000đ',
    describe:
      'Sữa chua là một loại thực phẩm chế biến từ sữa, có mùi vị chua, thơm ngon, dễ ăn, dễ tiêu hóa, có lợi cho sức khỏe.',
  },
  {
    id: 3,
    name: 'Sữa chua',
    categories: 'Rau',
    price: '10000đ',
    describe:
      'Sữa chua là một loại thực phẩm chế biến từ sữa, có mùi vị chua, thơm ngon, dễ ăn, dễ tiêu hóa, có lợi cho sức khỏe.',
  },
  {
    id: 4,
    name: 'Sữa chua',
    categories: 'Rau',
    price: '10000đ',
    describe:
      'Sữa chua là một loại thực phẩm chế biến từ sữa, có mùi vị chua, thơm ngon, dễ ăn, dễ tiêu hóa, có lợi cho sức khỏe.',
  },
  {
    id: 5,
    name: 'Sữa chua',
    categories: 'Rau',
    price: '10000đ',
    describe:
      'Sữa chua là một loại thực phẩm chế biến từ sữa, có mùi vị chua, thơm ngon, dễ ăn, dễ tiêu hóa, có lợi cho sức khỏe.',
  },
  {
    id: 6,
    name: 'Sữa chua',
    categories: 'Rau',
    price: '10000đ',
    describe:
      'Sữa chua là một loại thực phẩm chế biến từ sữa, có mùi vị chua, thơm ngon, dễ ăn, dễ tiêu hóa, có lợi cho sức khỏe.',
  },
  {
    id: 7,
    name: 'Sữa chua',
    categories: 'Rau',
    price: '10000đ',
    describe:
      'Sữa chua là một loại thực phẩm chế biến từ sữa, có mùi vị chua, thơm ngon, dễ ăn, dễ tiêu hóa, có lợi cho sức khỏe.',
  },
  {
    id: 8,
    name: 'Sữa chua',
    categories: 'Rau',
    price: '10000đ',
    describe:
      'Sữa chua là một loại thực phẩm chế biến từ sữa, có mùi vị chua, thơm ngon, dễ ăn, dễ tiêu hóa, có lợi cho sức khỏe.',
  },
]

function ProductManagement() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [products, setProducts] = useState()

  useEffect(() => {
    axios.get('/product/all').then(({ data }) => setProducts(data))
  }, [])

  const rows = products?.map((item) => ({
    id: item.productId,
    name: item.productName,
    categories: item.categoryId,
    price: item.price,
    describe: item.description,
  }))

  if (!products) return <Loading />

  return (
    <div className="product-management">
      <div className="user-order">
        <button className="add-btn mb-2" onClick={() => setIsOpenModal(true)}>
          Thêm Mới
        </button>
        <input type="text" placeholder="Tìm kiếm..." />
        <DataGrid
          style={{ fontSize: '16px' }}
          rowHeight={100}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
        <AddProduct isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
      </div>
    </div>
  )
}

export default ProductManagement

