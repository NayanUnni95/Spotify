import React, { useState } from 'react';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import styles from './Login.module.css';
import SpotifyLogo from '../../assets/images/Spotify_Logo_Black.png';
import { AUTH_URL, scope } from '../../constants/constant';

function Login() {
  const [show, setShow] = useState(false);
  const config = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID || null;
    const redirectUri = import.meta.env.VITE_HOME_URL || null;
    let url = AUTH_URL;
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(clientId);
    url += '&redirect_uri=' + encodeURIComponent(redirectUri);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&show_dialog=true';
    return url;
  };

  const login = () => {
    window.location.href = config();
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.logoSection}>
          <img src={SpotifyLogo} alt="spotify logo" />
        </div>
        <div className={styles.title}>
          <h2>login with spotify</h2>
        </div>
        <div className={styles.contentSection}>
          <div>
            <span>Get Started,</span>to your musical journey with spotify
            client, simply login with your existing account or <br />
            <a href="https://accounts.spotify.com/en/login">
              create a new one.
            </a>
            <p>
              Once you're logged in, this app will access you following data
            </p>
            <div className={styles.privacyAndPolicySection}>
              <input type="checkbox" defaultChecked />
              <button onClick={() => setShow(!show)}>
                <span>Privacy and Policy</span>
                {!show ? <FaCaretDown size={17} /> : <FaCaretUp size={17} />}
              </button>
            </div>
            {show && (
              <div className={styles.conditionSection}>
                <ul>
                  <li>
                    <span>user-read-private</span>: Access your user profile
                    data.
                  </li>
                  <li>
                    <span>user-read-email</span>: Access your email address.
                  </li>
                  <li>
                    <span>playlist-read-private</span>: Read access to user's
                    private playlists.
                  </li>
                  <li>
                    <span>user-library-read</span>: Read access to a user's
                    library.
                  </li>
                  <li>
                    <span>user-read-recently-played</span>: Access to a user's
                    recently played items.
                  </li>
                  <li>
                    <span>user-top-read</span>: Read access to a user's top
                    artists and tracks.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className={styles.btnSection}>
          <button className={styles.loginBtn} onClick={login}>
            log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
