import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/Sidebar.css";

const Sidebar = () => {
  const { logout } = useAuth0();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sidebar">
      <a className="sidebar-brand" href="/">
        <img src="../../public/simpledocu.svg" alt="simple docu logo" />
        <p>SimpleDocu</p>
      </a>
      <a className="sidebar-brand-mobile" href="/dashboard">
        <img src="../../public/simpledocu.svg" alt="simple docu logo" />
        <p>SimpleDocu</p>
      </a>
      {location.pathname.split("/")[1] !== "login" &&
      location.pathname.split("/")[1] !== "signup" ? (
        <>
          <div style={{ width: "100%", paddingBottom: "50px" }}>
            <ul className="sidebar-links">
              <li className="sidebar-link">
                <Link
                  className={isActive("/dashboard") ? "active" : ""}
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
              <li className="sidebar-link">
                <Link
                  className={isActive("/dashboard/create") ? "active" : ""}
                  to="/dashboard/create"
                >
                  Create Docs
                </Link>
              </li>
              <li className="sidebar-link">
                <Link
                  className={isActive("/dashboard/documents") ? "active" : ""}
                  to="/dashboard/documents"
                >
                  My Docs
                </Link>
              </li>
            </ul>
          </div>
          <Link className="logout-btn" to="/">
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin }})}>Logout</button>
          </Link>
        </>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Sidebar;
