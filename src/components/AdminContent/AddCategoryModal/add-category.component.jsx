import './add-category.styles.scss'

import { useState } from 'react'
import { useCategoriesStore, useTokenStore } from '@/store'

import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from '@/api/axios'
import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'
import Modal from '@mui/material/Modal'

function AddCategory({ isOpen, onClose }) {
  const [categories, setCategories] = useCategoriesStore((state) => [state.categories, state.setCategories])
  const [errors, setErrors] = useState({})
  const [name, setName] = useState('')
  const [token] = useTokenStore((state) => [state.token])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateForm()) {
      axios
        .post(
          '/category',
          {
            categoryName: name,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          },
        )
        .then((res) => {
          Swal.fire({ text: 'Thêm thể loại thành công!', icon: 'success', timer: 1300, showConfirmButton: false })
          const categoryId = res.data.categoryId
          const newCategory = { categoryName: name, categoryId: categoryId }
          setCategories([...categories, newCategory])
          onClose()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const validateForm = () => {
    let isValid = true

    if (name === '') {
      isValid = false
      setErrors({ ...errors, name: 'Vui lòng nhập tên thể loại' })
    } else {
      setErrors({ ...errors, name: '' })
    }

    return isValid
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
            {
              <p className="error" style={{ opacity: errors.name ? 1 : 0 }}>
                {errors.name}
              </p>
            }
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
