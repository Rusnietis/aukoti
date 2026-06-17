import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import logo from '../assets/logo.svg';
import '../Style/navbar.scss'
import { Auth } from '../Contexts/Auth.jsx'
import useLogin from "../Hooks/useLogin.jsx";
import Gate from "../Pages/Auth/Gate.jsx";

export default function Nav() {

  const { user } = useContext(Auth);
  const { logout } = useLogin();

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" className="logo" />
        <div className="admin">admin</div>
      </Link>

      <ul className="navbar-menu">
        <li>
          <NavLink to="/apie" end className={({ isActive }) => (isActive ? "active" : "")}>
            Apie
          </NavLink>
        </li>
        <li>
          <Gate roles="admin"> <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
            Admin panelė
          </NavLink></Gate>
        </li>


      </ul>

      <div className="navbar-right">
        {user && <span className="user">{user.user}</span>}
        {user && <span className="sep"> | </span>}
        {user ? (
          <i
            className="button-18 "
            style={{ cursor: "pointer", backgroundColor: 'red' }}
            onClick={logout}
          >
            Logout
          </i>
        ) : (
          <>
            <NavLink
              to="/login"
              className="button-18"
              style={{ cursor: "pointer" }}
            >
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}