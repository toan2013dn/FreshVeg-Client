import './add-product.styles.scss'

import CloseIcon from '@mui/icons-material/Close'
import TextField from '@mui/material/TextField'

import Modal from '@mui/material/Modal'
import { Form } from 'antd'
import { ImageUploader } from '../ImageUploader/ImageUploader'
import { ListImageUploader } from '@/components/ListImageUploader/ListImageUploader'
import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from '@/api/axios'
import { MenuItem, Select } from '@mui/material'
import dayjs from 'dayjs'

const StyledModal = styled(Modal)`
  .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium {
    display: none;
  }
`

function AddProduct({ isOpen, onClose }) {
  const [form] = Form.useForm()

  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('/category/all').then(({ data }) => {
      setCategories(data)
    })
  }, [])

  return (
    <StyledModal open={isOpen} onClose={onClose}>
      <span className="add-product-modal w-max">
        <Form
          className="h-max overflow-y-scroll p-10 w-max"
          form={form}
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
              const { productName, price, listImage, featuredImage, description, categoryId } = form.getFieldsValue()

              const images = listImage.map((item) => item.url)

              console.log({ images })

              const response = await axios.post('/product', {
                productName,
                price,
                productImage: [featuredImage, ...images],
                description,
                enteredDate: dayjs().valueOf(),
                status: true,
                categoryId,
              })
            }}
          >
            Thêm Sản Phẩm Mới
          </button>
          <CloseIcon onClick={onClose} />
        </Form>
      </span>
    </StyledModal>
  )
}

export default AddProduct

