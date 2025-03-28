import { Link } from "react-router-dom";
import "./HeaderComponent.css";
import { UserContext } from "../contexts/user.context";
import { useContext } from "react";

function HeaderComponent() {
  const { user } = useContext(UserContext);
  return (
    <header className="header">
      <h1 className="title">Welcome {user && <span>{user.name}</span>}</h1>
      <nav>
        <ul className="link-list">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>  
            <Link className="link" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="link" to="/settings">
            Settings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;
