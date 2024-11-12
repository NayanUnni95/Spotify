import React from 'react';
import Logo from '../../assets/images/Spotify_Primary_Logo_RGB_Green.png';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles.mainSection}>
      <img src={Logo} />
      <h1>Page not found</h1>
      <h4>We can’t seem to find the page you are looking for.</h4>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  );
  i;
}

export default NotFound;
