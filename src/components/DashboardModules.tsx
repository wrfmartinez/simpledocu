import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../assets/css/DashboardModules.css";

const DashboardModules = () => {
  return (
    <>
      <h1>Welcome to your Dashboard</h1>
      <h3 className="suggestions-title">
        Here are some suggestions to get you started
      </h3>
      <div className="suggestions-container">
        <div className="card-box">
          <Link to="/dashboard/create">
            <div className="module">
              <FontAwesomeIcon className="doc-icon" icon={faFile} />
              Create a New Doc
            </div>
          </Link>
        </div>

        <div className="card-box">
          <Link to="/dashboard/documents">
            <div className="module">
              <FontAwesomeIcon className="doc-icon" icon={faFile} />
              My Docs
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardModules;
