import { Outlet } from 'react-router-dom';
import '../assets/css/Dashboard.css';
import GenerateCodeSnippet from './GenerateCodeSnippet';
import Sidebar from "./Sidebar";

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
