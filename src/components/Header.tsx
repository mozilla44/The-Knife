import { Link } from "react-router-dom";
import "./Header.css"

export const Header = () => {
  return (
    <header className="header">
      <img className="logo" alt="logo"></img>
      <nav className="topnav">
      <Link to="/HomePage" className="homepage_link">Favorites</Link>
      <Link to="/favorites" className="favorites_link">Favorites</Link>
      <Link to="/test" className="favorites_link">test</Link>

      </nav>
    </header>
  );
};
