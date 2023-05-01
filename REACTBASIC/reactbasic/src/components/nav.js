import { Link } from "react-router-dom";

const Nav1 = (props) => {
  return (
    <div className="md-3 container">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled">Disabled</Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav1;
