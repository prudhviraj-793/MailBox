import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../API/api";
import "../index.css";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();
  async function signUpHandler(e) {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredConfirmPassword = confirmPasswordRef.current.value;
    if (enteredPassword === enteredConfirmPassword) {
      const signupData = {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      };
      const response = await signUp(signupData);
      const data = await response.json();
      try {
        if (!response.ok) {
          throw data.error.message;
        }
        navigate("/login");
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Please Check password");
    }
  }
  return (
    <div className="auth-container">
      <div className="auth-header">
        <h3>SignUp</h3>
      </div>
      <form onSubmit={signUpHandler} className="form">
        <input type="email" placeholder="Email" ref={emailRef} required />
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          ref={confirmPasswordRef}
          required
        />
        <button className="btn btn-primary" type="submit">Sign Up</button>
      </form>
      <div className="switch">
        <Link to="/login">Have an account? Login</Link>
      </div>
    </div>
  );
}

export default Signup;
