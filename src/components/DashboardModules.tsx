import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DashboardModules = () => {
  return (
    <>
      <h1>Welcome to your Dashboard</h1>
      <h3 style={{ borderBottom: "1px solid white", paddingBottom: "15px" }}>
        Here are some suggestions to get you started
      </h3>
      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        <div className="card-box">
          <Link to="/dashboard/create">
            <div
              style={{
                width: "140px",
                height: "140px",
                padding: "20px",
                backgroundColor: "#1c1c1c",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesomeIcon
                style={{ marginBottom: "10px", fontSize: "1.4em" }}
                icon={faFile}
              />
              Create a New Doc
            </div>
          </Link>
        </div>

        <div className="card-box">
          <Link to="/dashboard/documents">
            <div
              style={{
                width: "140px",
                height: "140px",
                padding: "20px",
                backgroundColor: "#1c1c1c",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesomeIcon
                style={{ marginBottom: "10px", fontSize: "1.4em" }}
                icon={faFile}
              />
              My Docs
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardModules;
