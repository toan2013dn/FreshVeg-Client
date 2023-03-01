import "./loginform.component.scss";
import { ReactComponent as Gmail } from "@/assets/icons/Gmail.svg";
import { ReactComponent as Password } from "@/assets/icons/Password.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`, `Password: ${password}`);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <Gmail />

          <input
            type="email"
            id="email"
            placeholder="Nhập email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-input">
          <label htmlFor="password">Mật Khẩu</label>
          <Password />

          <input
            type="password"
            id="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="form-option">
          <div className="form-option--remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" style={{fontSize: "14px"}}>Remember me</label>
          </div>
          <div className="form-option--forgot">
            <Link to={""}>Forgot password?</Link>
          </div>
        </div>

   
          <button type="submit">Login</button>
   
      </form>
    </div>
  );
}

export default LoginForm;
