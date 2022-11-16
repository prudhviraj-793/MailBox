import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../API/api";
import "../index.css";
import { authActions } from "../Store/authSlice";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function loginHandler(e) {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const loginData = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };
    const response = await login(loginData);
    const data = await response.json();
    dispatch(authActions.login(data.idToken));
    try {
      if (!response.ok) {
        throw data.error.message;
      }
      localStorage.setItem(enteredEmail, data.idToken);
      navigate("/welcome");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="auth-container">
      <div className="mb-2 text-center">
        <h3>Login</h3>
      </div>
      <form onSubmit={loginHandler} className="form">
        <input type="email" ref={emailRef} placeholder="Email" required />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          required
        />
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
      <div className="card-footer text-center">
        <div>
          <Link to="/">Forgot Password</Link>
        </div>
        <div>
          <Link to="/">Don't have an account? Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
