import './user-info-table.styles.scss'

import { useUserStore } from '@/store'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useState } from 'react'
// import cloudinary from 'cloudinary';
import axios from '@/api/axios'
import UploadImage from '@/components/AdminContent/UploadImage/upload-image.component'
import dayjs from 'dayjs'
import Swal from 'sweetalert2/dist/sweetalert2.js'
function UserInfoTable() {
  const [userInfo, setUserInfo] = useUserStore((state) => [state.userInfo, state.setUserInfo])
  const [showPassword, setShowPassword] = useState(false)
  const [updatedName, setUpdatedName] = useState(userInfo?.name)
  const [updatedImage, setUpdatedImage] = useState(userInfo?.image)
  const [errors, setErrors] = useState({})
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [userAvatar, setUserAvatar] = useState('')
  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  //   const handleSubmitImage = async () => {
  // setUserAvatar(null);

  // }
  const validateForm = () => {
    let formIsValid = true

    if (!updatedName) {
      formIsValid = false
      setErrors((errors) => ({ ...errors, updatedName: 'Vui lòng nhập tên người dùng!' }))
    } else {
      const nameRegex = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u
      if (!nameRegex.test(updatedName)) {
        formIsValid = false
        setErrors((errors) => ({ ...errors, updatedName: 'Vui lòng nhập tên người dùng hợp lệ!' }))
      } else {
        setErrors((errors) => ({ ...errors, updatedName: '' }))
      }
    }

    return formIsValid
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (validateForm()) {
      const data = new FormData()
      data.append('file', updatedImage)
      data.append('upload_preset', 'freshveg')
      data.append('cloud_name', 'dbwuaoohs')
      try {
        const res = await fetch('https://api.cloudinary.com/v1_1/dbwuaoohs/image/upload', {
          method: 'post',
          body: data,
        })
        const resData = await res.json()
        setUserAvatar(resData.url)
        console.log(resData)
        const updatedUserInfo = {
          ...userInfo,
          name: updatedName,
          image: resData.url,
        }
        await axios
          .put(`/user/${userInfo.userId}`, {
            email: userInfo.email,
            name: updatedName,
            avatar: resData.url,
            // birthday:
          })
          .then((res) => {
            // console.log(res)
            setUserInfo(updatedUserInfo)
            Swal.fire({
              text: 'Cập nhật thành công!',
              showConfirmButton: false,
              icon: 'success',
              timer: 1500,
            })
          })

          .catch((err) => {
            console.log(err)
            Swal.fire({
              text: 'Cập nhật thất bại!',
              showConfirmButton: false,
              icon: 'error',
              timer: 1500,
            })
          })
      } catch (err) {
        console.log(err)
      }
    }
  }

  // useEffect(() => {
  //   console.log(userInfo)
  // })

  return (
    <div className="user-table">
      <div className="user-table--text">
        <h3>Hồ Sơ Của Tôi</h3>
        <span style={{ fontWeight: '400', fontSize: '16px' }}>
          Quản lí thông tin hồ sơ để bảo mật tài khoản của bạn
        </span>
        <div className="line"></div>
      </div>

      <div className="line1"></div>

      <div className="flex-content">
        <div className="user-table--content">
          <div className="user-table--content-name flex">
            <div className="text">
              <h4>Tên người dùng</h4>
            </div>
            <div className="content error">
              <input
                id="username"
                type="username"
                value={updatedName}
                onChange={(event) => setUpdatedName(event.target.value)}
              />
              <p className="error" style={{ opacity: errors.updatedName ? 1 : 0 }}>
                {errors.updatedName}
              </p>
            </div>
          </div>

          <div className="user-table--content-email flex">
            <div className="text">
              <h4>Email</h4>
            </div>
            <div className="content">
              <h4>{userInfo?.email}</h4>
            </div>
          </div>

          <div className="user-table---content-birthday flex">
            <div className="text">
              <h4>Ngày sinh</h4>
            </div>
            <div className="content">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="MM/DD/YY" defaultValue={dayjs()} />
              </LocalizationProvider>
            </div>
          </div>

          <div className="text">
            <button className="button-save" style={{ padding: '15px 40px', fontSize: '20px' }} onClick={handleSubmit}>
              Lưu
            </button>
          </div>
        </div>

        <div className="user-table--image">
          <UploadImage image={updatedImage} setImage={setUpdatedImage} />
        </div>
      </div>
    </div>
  )
}
export default UserInfoTable
