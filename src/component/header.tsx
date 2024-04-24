import { Link } from "react-router-dom";
import humanIcon from "../assets/news-publishing-svgrepo-com.svg";
import profileIcon from "../assets/news_newspaper_icon_177008.svg";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="header-logo">
            Motion web/news
          </Link>
          <nav className="header-links">
            <Link to="/home" className="link">
              <img src={humanIcon} alt="Home" className="img1" />
            </Link>
            <Link to="/admin" className="link">
              <img
                src={profileIcon}
                alt="Profile"
                className="img1"
                style={{ borderRadius: 50 }}
              />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
