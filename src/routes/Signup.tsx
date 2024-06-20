import { useAuth0 } from "@auth0/auth0-react";
import Sidebar from "../components/Sidebar";
import "../assets/css/Signup.css";

const Signup = () => {
  const { loginWithRedirect } = useAuth0();

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
            <button className="signup-form-btn" onClick={() => loginWithRedirect()}>Sign Up</button>
        </div>
      </div>
    </main>
  );
};

export default Signup;
