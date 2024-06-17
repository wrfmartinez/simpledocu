import { Link } from "react-router-dom";
import "../assets/css/Sidebar.css";

const Sidebar = () => {
  console.log(location.pathname.split("/")[1]);

  return (
    <nav className="sidebar">
      <a className="sidebar-brand" href="/">
        <img src="../../public/simpledocu.svg" alt="simple docu logo" />
        <p>SimpleDocu</p>
      </a>
      {location.pathname.split("/")[1] !== "login" &&
      location.pathname.split("/")[1] !== "signup" ? (
        <>
          <ul className="sidebar-links">
            <li className="sidebar-link">
              <a href="/dashboard">Dashboard</a>
            </li>
            <li className="sidebar-link">
              <a className="" href="/dashboard/create">
                Create Docs
              </a>
            </li>
            <li className="sidebar-link">
              <a className="active" href="/dashboard/documents">
                My Docs
              </a>
            </li>
          </ul>
          <Link to="/">
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
