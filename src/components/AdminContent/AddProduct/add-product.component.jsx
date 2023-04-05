import './add-product.styles.scss'

import { useState } from 'react'
import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'

import Modal from '@mui/material/Modal'
import UploadImage from '../UploadImage/upload-image.component'

function AddProduct({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.ytimg.com/vi/knjLDubhPR4/maxresdefault.jpg')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <span className="add-product-modal">
        <form onSubmit={handleSubmit}>
          <h3>Thêm Sản Phẩm Mới</h3>
          <UploadImage image={image} setImage={setImage} />
          <div className="add-new">
            <div className="column-1">
              <TextField
                id="standard-multiline-flexible"
                label="Nhập tên sản phẩm"
                multiline
                maxRows={4}
                autoFocus={true}
                variant="standard"
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                id="standard-multiline-flexible"
                label="Nhập giá sản phẩm"
                multiline
                maxRows={4}
                variant="standard"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="column-2">
              <TextField
                id="standard-multiline-flexible"
                label="Mô tả sản phẩm"
                multiline
                maxRows={4}
                variant="standard"
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                id="standard-multiline-flexible"
                label="Nhập tên thể loại"
                multiline
                maxRows={4}
                variant="standard"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Thêm Sản Phẩm Mới
          </button>
          <CloseIcon onClick={onClose} />
        </form>
      </span>
    </Modal>
  )
}

export default AddProduct
