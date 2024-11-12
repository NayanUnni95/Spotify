import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import styles from './Styles.module.css';

function Menu() {
  const { removeToken } = useAuth();
  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <ul>
          {/* <Link>
            <li>Account</li>
          </Link>
          <Link>
            <li>Profile</li>
          </Link>
          <Link>
            <li>Setting</li>
          </Link>
          <hr /> */}
          <Link to="/login">
            <li onClick={() => removeToken()}>Logout</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
