import { useState, useContext } from 'react';
 import { useNavigate } from 'react-router-dom';
import { Users } from '../../Contexts/Users.jsx';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import '../../Style/LoginPage.scss';
import '../../Style/button18.scss';

export default function Create() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setCreateUser } = useContext(Users);
  const navigate = useNavigate(); // React Router redirect

  const register = () => {

    const user = {
      id: uuidv4(),
      username,
      password
    };

    // Pridedame vartotoją per Users kontekstą
    setCreateUser(user);

    // Nukreipiame į login puslapį
     navigate('/login')
  };

  return (

    <div className="login-page" >
      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Prašome užsiregistruoti</h1>

        <form  className="form">
          
          <div className="input-group">
            <label>Vardas</label>
            <input type="text"
            autoComplete="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Įveskite vartotojo vardą" />
          </div>

          <div className="input-group">
            <label >Slaptažodis</label>
            <input  type="password"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Įveskite slaptažodį" />
          </div>

          <button type="submit" onClick={register}>Registracija</button>
        </form>

        {/* <span className="footer-text">Neturi paskyros? <a href="#">Registruokis</a></span> */}
      </motion.div>
    </div>








  );
}
