// import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/Sidebar.css";

const Sidebar = () => {
  // const { logout } = useAuth0();
  // React Router hook to determine url location
  const location = useLocation();
  // Compares current path of the application with path paramater passed in:
  // If true then set className to "active"
  // If not true then set className to an empty string
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sidebar">
      <Link className="sidebar-brand" to="/">
        <img src="../../public/simpledocu.svg" alt="simple docu logo" />
        <p>SimpleDocu</p>
      </Link>
      <Link className="sidebar-brand-mobile" to="/dashboard">
        <img src="../../public/simpledocu.svg" alt="simple docu logo" />
        <p>SimpleDocu</p>
      </Link>
      {/* Check if pathname endpoint does is not login and signup, if it's not then render */}
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
            <button>Logout</button>
          </Link>
        </>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Sidebar;
