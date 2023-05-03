import './product-management.styles.scss'

import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Button, Image } from 'antd'
import { ToastContainer, toast } from 'react-toastify'
import { useState, useEffect } from 'react'
import { useTokenStore } from '@/store'

import Tooltip from '@mui/material/Tooltip'
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import AddProduct from '../AddProduct/add-product.component'
import axios from '@/api/axios'
import Loading from 'react-loading'

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  {
    field: 'image',
    headerName: 'Ảnh Sản Phẩm',
    width: 130,
    renderCell: ({ value }) => <Image src={value} />,
    sortable: false,
  },
  { field: 'name', headerName: 'Tên Sản Phẩm', width: 180 },
  { field: 'categories', headerName: 'Thể Loại', width: 100 },
  { field: 'price', headerName: 'Giá', width: 110 },
  { field: 'describe', headerName: 'Mô Tả Sản Phẩm', width: 470 },
  {
    field: 'action',
    headerName: '',
    width: 130,
    renderCell: ({ id, row }) => {
      const { onDelete, onEdit } = row || {}

      return (
        <div className="flex gap-3">
          <Tooltip title="Chỉnh sửa">
            <Button className="border-none edit" icon={<EditOutlinedIcon />} onClick={onEdit} />
          </Tooltip>
          <Tooltip title="Xoá sản phẩm">
            <Button className="border-none delete" icon={<DeleteIcon className="text-red-600" />} onClick={onDelete} />
          </Tooltip>
        </div>
      )
    },
    sortable: false,
  },
]

function ProductManagement() {
  const [productId, setProductId] = useState()
  const [updateValues, setUpdateValues] = useState()
  const [token] = useTokenStore((state) => [state.token])
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
    categories: item.category?.categoryName,
    price: item.price,
    describe: item.description,
    onDelete: async () => {
      const isDelete = await Swal.fire({
        text: 'Bạn có muốn xoá sản phẩm này không?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Xoá',
        cancelButtonText: 'Không',
      })

      if (isDelete.isConfirmed) {
        await axios.delete(
          '/product/delete',
          { data: { productId: item.productId } },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          },
        )
        fetchProducts()
        toast.success('Xóa sản phẩm thành công!')
      }
    },
    onEdit: () => {
      const [featuredImage, ...restImage] = item.productImages || []

      setProductId(item.productId)
      setUpdateValues({
        featuredImage: featuredImage?.imageLink,
        listImage: restImage?.map((e) => ({
          uid: e.productImageId,
          imageLink: e.imageLink,
        })),
        ...item,
      })
      setIsOpenModal(true)
    },
  }))

  if (!products) return <Loading />

  return (
    <div className="product-management">
      <div className="user-order">
        <button
          className="add-btn mb-2"
          onClick={() => {
            setProductId(undefined)
            setIsOpenModal(true)
            setUpdateValues(undefined)
          }}
        >
          Thêm Mới
        </button>
        <DataGrid
          style={{ fontSize: '16px' }}
          rowHeight={100}
          rows={rows}
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
        <AddProduct
          key={productId}
          isOpen={isOpenModal}
          initialValue={updateValues}
          productId={productId}
          onClose={() => setIsOpenModal(false)}
          onFinish={() => {
            fetchProducts()
            setIsOpenModal(false)
            setUpdateValues(undefined)
            setProductId(undefined)
          }}
        />
      </div>
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

export default ProductManagement
