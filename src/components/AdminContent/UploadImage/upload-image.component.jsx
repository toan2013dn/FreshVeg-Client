import './upload-image.styles.scss'

import { useState } from 'react'
import Button from '@mui/material/Button'

function UploadImage() {
  const [selectedImage, setSelectedImage] = useState('')

  const handleImageSelect = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = () => {
      setSelectedImage(reader.result)
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }
  return (
    <div className="upload-image">
      <div className="selected-image">{selectedImage && <img src={selectedImage} alt="Selected" />}</div>
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
