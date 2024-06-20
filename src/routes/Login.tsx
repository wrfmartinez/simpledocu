import { useAuth0 } from "@auth0/auth0-react";
import Sidebar from "../components/Sidebar";
import "../assets/css/Login.css";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
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
            <button className="login-form-btn"
            onClick={() => loginWithRedirect()}>Login</button>
        </div>
      </div>
    </main>
  );
};

export default Login;
