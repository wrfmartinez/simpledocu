import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import "../assets/css/Signup.css";

const Signup = () => {
  return (
    <main className="signup-main">
      <Sidebar />
      <div className="signup-form-container">
        <div className="signup-form">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="enter your email" />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="enter a password"
          />
          <Link to="/dashboard">
            <button className="signup-form-btn">Sign Up</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Signup;
