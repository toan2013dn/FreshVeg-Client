import './upload-image.styles.scss'

import { useState } from 'react'
import { useUserStore } from '@/store'
import Button from '@mui/material/Button'

function UploadImage({ image, setImage }) {
  const [imageURL, setImageURL] = useState('')
  const [userInfo] = useUserStore((state) => [state.userInfo])

  const handleImageSelect = (event) => {
    const file = event.target.files[0]
    setImage(file)
    const reader = new FileReader()

    reader.onload = () => {
      setImageURL(reader.result)
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="upload-image">
      <div className="selected-image">
        <img
          src={
            image == undefined
              ? 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
              : imageURL == ''
              ? image
              : imageURL
          }
          alt="Selected"
        />
      </div>
      <div className="context">Định dạng: JPEG, PNG</div>
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
