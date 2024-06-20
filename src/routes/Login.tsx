import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import "../assets/css/Login.css";

const Login = () => {
  return (
    <main className="login-main">
      <Sidebar />
      <div className="login-form-container">
        <div className="login-form">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="enter your email" />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="enter a password"
          />
          <Link to="/dashboard">
            <button className="login-form-btn">Login</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
