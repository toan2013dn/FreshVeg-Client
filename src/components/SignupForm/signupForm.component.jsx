import "./signupForm.component.scss";
import React, { useState } from "react";
import { ReactComponent as UserSignup } from "@/assets/icons/UserSignup.svg";
import { ReactComponent as Gmail } from "@/assets/icons/Gmail.svg";
import { ReactComponent as Password } from "@/assets/icons/Password.svg";

function SignupForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "userName") {
      setUserName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <div className="userName form-input">
          <label className="form-label" for="userName">
            User Name
          </label>
          <UserSignup />
          <input
            type="userName"
            id="userName"
            value={userName}
            onChange={(e) => handleInputChange(e)}
            placeholder="Enter your User Name"
          />
        </div>
        <div className="email form-input">
          <label className="form-label" for="email">
            Email
          </label>
          <Gmail />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
          />
        </div>
        <div className="password form-input">
          <label className="form-label" for="password">
            Password
          </label>
          <Password />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
        <div className="confirm-password form-input">
          <label className="form-label" for="confirmPassword">
            Confirm Password
          </label>
          <Password />
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
            placeholder="Confirm Password"
          />
        </div>
        <button onClick={() => handleSubmit()} type="submit" class="btn">
          Register
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
