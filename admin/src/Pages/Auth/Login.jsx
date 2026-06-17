import { useEffect, useState, useContext } from 'react';
import useLogin from '../../Hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import { Auth } from '../../Contexts/Auth';
import { AFTER_LOGIN_URL } from '../../Constants/main';
import { SITE_URL } from '../../Config/config';
import { Link, NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import '../../Style/LoginPage.scss';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setInputs } = useLogin();
  const { user } = useContext(Auth);

  const navigate = useNavigate();


  const go = _ => {
    setInputs({ username, password });
    setPassword('');
  }

  useEffect(_ => {
    if (user) {
      navigate('/apie');
    }

  }, [user])

  if (!user) {

    return (
      <div className="login-page">
        <motion.div
          className="login-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Sveiki sugrįžę</h1>
          <p>Prašome prisijungti prie savo paskyros</p>

          <form>
            <div className="input-group">
              <label htmlFor="name" className="form-label">Vardas</label>
              <input type="text" placeholder="Vardas" name="name" autoComplete="username" value={username} onChange={e => setUsername(e.target.value)} />
            </div>

            <div className="input-group">
              <label htmlFor="password" className="form-label">Slaptažodis</label>
              <input type="password" placeholder="Slaptažodis" name="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>

            <button type="button" onClick={go}>Login</button>
          </form>
          <span className="footer-text">Neturi paskyros? <NavLink
            to="/register">Registruokis</NavLink></span>
          {/* <span className="footer-text">Neturi paskyros? <a href="/register">Registruokis</a></span> */}
        </motion.div>
      </div>
    );
  } else {
    return null;
  }
}


