import "./login.page.scss";
import { ReactComponent as Logo } from "@/assets/icons/logo.svg";
import LoginForm from "@/components/LoginForm/loginform.component";
import SocialLogin from "@/components/SocialLogin/socialLogin.component";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Logo to="/" className="logo" />
      <LoginForm />
      <div className="login-social">
        <span>or continue with</span>
        <SocialLogin />
      </div>

      <div className="register">
        <span>
          Bạn không có tài khoản? <Link to={""}>Đăng Kí</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
