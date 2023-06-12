import { Link } from "react-router-dom";
import "./Header.css"

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo_link">
        <img className="logo" alt="logo" src="/src/assets/logo.png"></img>
      </Link>
      <nav className="topnav">
      <Link to="/HomePage" className="homepage_link">Home</Link>
      <Link to="/favorites" className="favorites_link">Favorites</Link>
      {/* <Link to="/test" className="favorites_link">test</Link> */}

      </nav>
    </header>
  );
};
