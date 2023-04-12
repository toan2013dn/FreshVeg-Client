import './signup.page.scss'

import { ReactComponent as Logo } from '@/assets/icons/logo.svg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Register from '@/assets/images/Register.webp'
import SignupForm from '@/components/SignupForm/signupForm.component'

function SignUp() {
  const navigate = useNavigate()
  const handleToHomePage = () => {
    navigate('/')
  }

  return (
    <div className="signup">
      <div className="signup-image">
        <img src={Register} alt="signup" />
      </div>
      <div className="signup-content">
        <button className="home-btn" onClick={handleToHomePage}>
          <Logo className="img"></Logo>
        </button>
        <div className="flex">
          <h3>Đăng Kí</h3>
          <h4>Nếu bạn đã có sẵn tài khoản</h4>
          <h4>
            Bạn có thể
            <button>
              <Link to={'/login'}>Đăng Nhập</Link>
            </button>
          </h4>
        </div>

        <SignupForm />
      </div>
    </div>
  )
}

export default SignUp
