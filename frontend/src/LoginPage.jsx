import { useState } from 'react'

// LoginPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './LoginPage.scss';

export default function LoginPage() {
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
            <input type="name" placeholder="Vardas" />
          </div>

          <div className="input-group">
            <input type="password" placeholder="Slaptažodis" />
          </div>

          <button type="submit">Login</button>
        </form>

        <span className="footer-text">Neturi paskyros? <a href="#">Registruokis</a></span>
      </motion.div>
    </div>
  );
}


