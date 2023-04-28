import './edit-category.styles.scss'

import { useCategoriesStore, useTokenStore } from '@/store'
import { useState } from 'react'

import axios from '@/api/axios'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Swal from 'sweetalert2/dist/sweetalert2.js'

function EditCategory({ isOpen, onClose, categoryName, categoryId }) {
  const [categories, setCategories] = useCategoriesStore((state) => [state.categories, state.setCategories])
  const [updatedName, setUpdatedName] = useState(categoryName)
  const [errors, setErrors] = useState({})
  const [token] = useTokenStore((state) => [state.token])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateForm()) {
      axios
        .put(
          `/category/${categoryId}`,
          {
            categoryName: updatedName,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          },
        )
        .then((res) => {
          const newCategories = categories.map((category) => {
            if (category.categoryId === categoryId) {
              return { ...category, categoryName: updatedName }
            }
            return category
          })
          setCategories(newCategories)
          Swal.fire({
            text: 'Cập nhật thể loại thành công!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1300,
          })
          onClose()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const validateForm = () => {
    let formIsValid = true

    if (!updatedName) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, updatedName: 'Vui lòng nhập tên thể loại!' }))
    } else {
      const nameRegex = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u
      if (!nameRegex.test(updatedName)) {
        formIsValid = false
        setErrors((errors) => ({ ...errors, updatedName: 'Vui lòng nhập tên thể loại hợp lệ!' }))
      } else {
        setErrors((errors) => ({ ...errors, updatedName: '' }))
      }
    }

    return formIsValid
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="edit-category">
        <h3>Chỉnh sửa thể loại</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group"></div>
          <TextField
            id="standard-multiline-flexible "
            label="Nhập tên thể loại mới"
            style={{ width: '100%' }}
            multiline
            maxRows={4}
            autoFocus={true}
            placeholder="Ví dụ: Hạt,..."
            value={updatedName}
            variant="standard"
            onChange={(event) => setUpdatedName(event.target.value)}
          />
          {errors.updatedName && <p className="error">{errors.updatedName}</p>}
          <button type="submit" className="submit-btn">
            Cập Nhật
          </button>
        </form>
      </div>
    </Modal>
  )
}

export default EditCategory
