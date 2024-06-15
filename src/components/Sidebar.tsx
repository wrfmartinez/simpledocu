import '../assets/css/Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <a className='sidebar-brand' href="/">
        <img src="../../public/simpledocu.svg" alt="simple docu logo" />
        <p>SimpleDocu</p>
      </a>
      <ul className="sidebar-links">
        <li className="sidebar-link">
          <a href="/dashboard">Dashboard</a>
        </li>
        <li className="sidebar-link">
          <a className='' href="/dashboard/create">Create Docs</a>
        </li>
        <li className="sidebar-link">
          <a className='active' href="/dashboard/documents">My Docs</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
