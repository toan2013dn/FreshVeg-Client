import './upload-image.styles.scss'

import { useState } from 'react'
import Button from '@mui/material/Button'

function UploadImage({ image, setImage }) {
  const handleImageSelect = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = () => {
      setImage(reader.result)
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }
  return (
    <div className="upload-image">
      <div className="selected-image">{image && <img src={image} alt="Selected" />}</div>
      <div className="image-btn">
        <Button variant="contained" component="label" color="success">
          Tải Ảnh Lên
          <input hidden accept="image/*" multiple type="file" onChange={handleImageSelect} />
        </Button>
      </div>
    </div>
  )
}

export default UploadImage
