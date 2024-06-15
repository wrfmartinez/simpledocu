import simpledocuLogo from '/simpledocu.svg'
import './css/Nav.css';

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <a href="/">
          <img className="nav-brand" src={simpledocuLogo} alt="Simple Docu logo" />
        </a>
        <ul className="nav-links">
          <li className="nav-link">
            <a href="#">About</a>
          </li>
          <li className="nav-link">
            <a href="#">Tutorial</a>
          </li>
          <li className="nav-link">
            <a href="#">My Docs</a>
          </li>
        </ul>
      </div>
      <a href="#">
        <button>Get Started</button>
      </a>
    </nav>
  )
}

export default Nav;