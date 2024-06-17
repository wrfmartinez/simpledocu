import simpledocuLogo from "/simpledocu.svg";
import "../assets/css/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/">
          <img
            className="nav-brand"
            src={simpledocuLogo}
            alt="Simple Docu logo"
          />
        </Link>
        <ul className="nav-links">
          {/* <li className="nav-link">
            <Link to="#">About</Link>
          </li> */}
          {/* <li className="nav-link">
            <Link to="#">Tutorial</Link>
          </li> */}
          <li className="nav-link">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/login">
          <button style={{ marginRight: "10px" }}>Login</button>
        </Link>
        <Link to="/signup">
          <button>Get Started</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
