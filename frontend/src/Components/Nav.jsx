import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Nav() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Logo" />
        </Link>

        <nav className="navbar__menu">
          <NavLink to="/apie" end>
            Apie
          </NavLink>

          <NavLink to="/istorijos">
            Istorijos
          </NavLink>

          <NavLink to="/mano-istorijos">
            Mano istorijos
          </NavLink>
        </nav>

        <div className="navbar__auth">
          <NavLink to="/login" className="btn btn--secondary">
            Login
          </NavLink>

          <NavLink to="/register" className="btn btn--primary">
            Register
          </NavLink>
        </div>
      </div>
    </header>
  );
}