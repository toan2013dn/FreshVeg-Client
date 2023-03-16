import './add-category.styles.scss'

import { useState } from 'react'
import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'

import Modal from '@mui/material/Modal'

function AddCategory({ isOpen, onClose }) {
  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Name:', name)
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <span className="modal">
        <form onSubmit={handleSubmit}>
          <h4>Thêm Thể Loại Mới</h4>
          <div className="add-new">
            <TextField
              id="standard-multiline-flexible"
              label="Nhập tên thể loại"
              multiline
              maxRows={4}
              variant="standard"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <button type="submit" className="submit-btn">
            Thêm
          </button>
          <CloseIcon onClick={onClose} />
        </form>
      </span>
    </Modal>
  )
}

export default AddCategory
