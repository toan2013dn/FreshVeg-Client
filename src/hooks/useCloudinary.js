import axios from 'axios'
import { useState } from 'react'

export const useCloudinary = (options) => {
  const { onSuccess, onFailed } = options || {}

  const [image, setImage] = useState()
  const [loading, setLoading] = useState(false)

  const upload = async (file) => {
    const formData = new FormData()
    formData.append('file', file)

    // TODO: change preset key here
    formData.append('upload_preset', 'trungluc')

    try {
      setLoading(true)

      // TODO: change cloud name here
      const response = await axios.post('https://api.cloudinary.com/v1_1/dctfgio0e/image/upload', formData)

      setImage(response.data.secure_url)

      onSuccess?.(response.data.secure_url, response.data)
    } catch (error) {
      console.error(error)
      onFailed?.(error)
    }

    setLoading(false)
  }

  return { upload, image, loading }
}

