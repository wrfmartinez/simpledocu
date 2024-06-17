import { Outlet } from 'react-router-dom';
import '../assets/css/Dashboard.css';
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <main id='dashboard'>
      <Sidebar />
      <section className="dashboard-content">
        <Outlet />
      </section>
    </main>
  );
};

export default Dashboard;
