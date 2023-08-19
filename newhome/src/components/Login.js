import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css"; // Import your custom CSS file
import SignupForm from "./SignupForm";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <div className="login-links">
        
        <Link to="/signup">Create New Account</Link>{SignupForm}
      </div>
    </div>
  );
}

export default Login;
