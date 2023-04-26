import './error-page.styles.scss'

import { useNavigate } from 'react-router-dom'

import ErrorPageImg from '@/assets/images/error-page.jpg'

function ErrorPage() {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate('/')
  }

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <div style={{ textAlign: 'center' }}>
        <h3>Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</h3>
        <h3>Vui lòng kiểm tra lại đường dẫn hoặc quay về trang chủ của chúng tôi để tiếp tục.</h3>
      </div>
      <div className="error-page--img">
        <img src={ErrorPageImg} alt="Error Page" />
      </div>
      <button onClick={handleGoBack}>Quay về trang chủ</button>
    </div>
  )
}

export default ErrorPage
