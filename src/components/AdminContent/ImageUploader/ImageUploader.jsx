import { useCloudinary } from '@/hooks/useCloudinary'
import styled from '@emotion/styled'
import { Upload } from 'antd'

const StyledUpload = styled(Upload)`
  .ant-upload {
    width: 100% !important;
    height: 100% !important;
  }
`

export const ImageUploader = ({ value, onChange, className, ...rest }) => {
  const { image, loading, upload } = useCloudinary({
    onSuccess: onChange,
  })

  const uploadImage = async (options) => {
    const { file } = options
    upload(file)
  }

  return (
    <StyledUpload
      listType="picture-card"
      showUploadList={false}
      className="h-full"
      customRequest={uploadImage}
      {...rest}
    >
      {loading && 'Uploading'}
      {!loading && !image && !value && 'Upload your file'}
      {(image || value) && !loading && <img src={image || value} />}
    </StyledUpload>
  )
}

