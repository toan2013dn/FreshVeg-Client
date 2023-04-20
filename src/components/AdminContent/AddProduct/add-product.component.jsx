import './add-product.styles.scss'

import TextField from '@mui/material/TextField'

import axios from '@/api/axios'
import { ListImageUploader } from '@/components/ListImageUploader/ListImageUploader'
import { MenuItem, Select } from '@mui/material'
import Modal from '@mui/material/Modal'
import { Form } from 'antd'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { ImageUploader } from '../ImageUploader/ImageUploader'

function AddProduct({ isOpen, onClose, onFinish, productId, initialValue }) {
  console.log({ initialValue })

  const [form] = Form.useForm()

  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('/category/all').then(({ data }) => {
      setCategories(data)
    })
  }, [])

  return (
    <Modal open={isOpen} onClose={onClose}>
      <span className="add-product-modal w-max">
        <Form
          className="h-max overflow-y-scroll p-10 w-max"
          form={form}
          initialValues={initialValue}
          onValuesChange={(changes, allValues) => {
            console.log({ changes, allValues })
          }}
        >
          <h3>Thêm Sản Phẩm Mới</h3>

          <div className="flex w-full items-start gap-6">
            <div className="grow w-72">
              <div className="w-72 h-72">
                <Form.Item noStyle name="featuredImage">
                  <ImageUploader />
                </Form.Item>
              </div>
              <div className="mt-4">
                <Form.Item noStyle name="listImage">
                  <ListImageUploader />
                </Form.Item>
              </div>
            </div>

            <div className="flex flex-col w-80 gap-4 p-2">
              <Form.Item name="productName" className="w-full">
                <TextField className="w-full" label="Nhập tên sản phẩm" variant="standard" />
              </Form.Item>

              <Form.Item name="price" className="w-full">
                <TextField className="w-full" type="number" label="Nhập giá sản phẩm" variant="standard" />
              </Form.Item>

              <Form.Item name="weight" className="w-full">
                <TextField className="w-full" type="number" label="Nhập khối lượng sản phẩm" variant="standard" />
              </Form.Item>

              <Form.Item name="description" className="w-full">
                <TextField className="w-full" label="Mô tả sản phẩm" variant="standard" multiline maxRows={4} />
              </Form.Item>

              <Form.Item name="categoryId" className="w-full">
                <Select className="w-full" label="Loại sản phẩm" placeholder="Loại sản phẩm">
                  {categories.map((item) => (
                    <MenuItem key={item.categoryId} value={item.categoryId}>
                      {item.categoryName}
                    </MenuItem>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </div>

          <button
            type="submit"
            className="submit-btn"
            onClick={async () => {
              const { productName, price, listImage, featuredImage, description, categoryId, weight } =
                form.getFieldsValue()

              const images = listImage?.map((item) => ({ imageLink: item.url }))

              productId
                ? await axios.put(`/product/${productId}`, {
                    productName,
                    price,
                    productImages: [{ imageLink: featuredImage }, ...(images || [])],
                    description,
                    status: true,
                    categoryId,
                    weight,
                  })
                : await axios.post('/product', {
                    productName,
                    price,
                    productImages: [{ imageLink: featuredImage }, ...(images || [])],
                    description,
                    status: true,
                    categoryId,
                    weight,
                  })

              onFinish?.()
            }}
          >
            {productId ? 'Cập nhật' : 'Thêm Sản Phẩm Mới'}
          </button>
        </Form>
      </span>
    </Modal>
  )
}

export default AddProduct

