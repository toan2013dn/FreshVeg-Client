import './product-management.styles.scss'

import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'

import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import AddProduct from '../AddProduct/add-product.component'
import { useEffect } from 'react'
import axios from '@/api/axios'
import Loading from 'react-loading'
import { Button, Image } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  {
    field: 'image',
    headerName: 'Ảnh Sản Phẩm',
    width: 130,
    renderCell: ({ value }) => <Image src={value} />,
    sortable: false,
  },
  { field: 'name', headerName: 'Tên Sản Phẩm', width: 130 },
  { field: 'categories', headerName: 'Thể Loại', width: 130 },
  { field: 'price', headerName: 'Giá', width: 130 },
  { field: 'describe', headerName: 'Mô Tả Sản Phẩm', width: 370 },
  {
    field: 'action',
    headerName: '',
    width: 130,
    renderCell: ({ id, row }) => {
      const { onDelete } = row || {}

      return (
        <div className="flex gap-3">
          <Button className="border-none" icon={<EditOutlined />} />
          <Button className="border-none" icon={<DeleteOutlined className="text-red-600" />} onClick={onDelete} />
        </div>
      )
    },
    sortable: false,
  },
]

function ProductManagement() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [products, setProducts] = useState()

  const fetchProducts = () => axios.get('/product/all').then(({ data }) => setProducts(data))

  useEffect(() => {
    fetchProducts()
  }, [])

  const rows = products?.map((item) => ({
    image:
      item.productImages?.[0]?.imageLink ||
      'https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg',
    id: item.productId,
    name: item.productName,
    categories: item.categoryId,
    price: item.price,
    describe: item.description,
    onDelete: async () => {
      await axios.delete('/product', { data: { productId: item.productId } })
      fetchProducts()
    },
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
        <AddProduct
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          onFinish={() => {
            fetchProducts()
            setIsOpenModal(false)
          }}
        />
      </div>
    </div>
  )
}

export default ProductManagement

