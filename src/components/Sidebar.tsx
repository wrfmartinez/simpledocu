import { Link, useLocation } from "react-router-dom";
import "../assets/css/Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sidebar">
      <a className="sidebar-brand" href="/">
        <img src="../../public/simpledocu.svg" alt="simple docu logo" />
        <p>SimpleDocu</p>
      </a>
      {location.pathname.split("/")[1] !== "login" &&
      location.pathname.split("/")[1] !== "signup" ? (
        <>
          <div style={{width: "100%", paddingBottom: "50px"}}>
            <ul className="sidebar-links">
              <li className="sidebar-link">
                <Link className={isActive("/dashboard") ? "active" : ""} to="/dashboard">Dashboard</Link>
              </li>
              <li className="sidebar-link">
                <Link className={isActive("/dashboard/create") ? "active" : ""} to="/dashboard/create">
                  Create Docs
                </Link>
              </li>
              <li className="sidebar-link">
                <Link className={isActive("/dashboard/documents") ? "active" : ""} to="/dashboard/documents">
                  My Docs
                </Link>
              </li>
            </ul>
          </div>
          <Link style={{marginLeft: "7px"}} to="/">
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
