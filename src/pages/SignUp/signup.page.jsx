import './signup.page.scss'
import { ReactComponent as Logo } from '@/assets/icons/logo.svg'
import { Link } from 'react-router-dom'
import Register from '@/assets/images/Register.webp'
import SignupForm from '@/components/SignupForm/signupForm.component'

function SignUp() {
  return (
    <div className="signup" style={{ maxHeight: '100vh' }}>
      <div className="signup-image">
        <img style={{ maxHeight: '100vh' }} src={Register} alt="signup" />
      </div>
      <div className="signup-content">
        <Logo className="img"></Logo>
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
