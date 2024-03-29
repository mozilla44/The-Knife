import { Link } from "react-router-dom";
import "./Header.css"

export const Header = () => {
  return (
    <header className="header">
     <Link to="/" className="logo_link">
        <img className="logo" alt="logo" src="/src/assets/logo.png"></img>
      </Link>
      <Link to="/" className="title_link">
      <h1 className="app_title">The Knife</h1>
      </Link>
      <nav className="topnav">
      <Link to="/" className="homepage_link">Home</Link>
      <Link to="/favorites" className="favorites_link">Favorites</Link>
      </nav>
    </header>
  );
};
