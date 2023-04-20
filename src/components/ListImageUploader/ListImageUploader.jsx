import { useCloudinary } from '@/hooks/useCloudinary'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Upload } from 'antd'
import { useState } from 'react'

export const ListImageUploader = ({ onChange, ...rest }) => {
  const [images, setImages] = useState([])

  const { upload } = useCloudinary({
    onSuccess: (imageUrl, data) => {
      const fileName = data.original_filename
      const id = data.public_id

      const newImages = [...images, { uid: id, name: fileName, url: imageUrl }]
      setImages(newImages)

      console.log(newImages)

      onChange?.(newImages)
    },
  })

  const uploadImage = async (options) => {
    const { file } = options
    upload(file)
  }

  return (
    <Upload
      fileList={images}
      listType="picture"
      className="h-full"
      customRequest={uploadImage}
      onRemove={(image) => {
        const newImages = images.filter((e) => e.uid !== image.uid)
        setImages(newImages)
        onChange?.(newImages)
      }}
      {...rest}
    >
      <Button className="flex items-center">
        <PlusOutlined />
        <span>Upload image</span>
      </Button>
    </Upload>
  )
}

