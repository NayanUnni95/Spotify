import React from 'react';
import { Icon } from '../../Icons';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.navbarSection}>
      <div className={styles.navButton}>
        <button>
          <Icon name={'left'} size={20} />
        </button>
        <button>
          <Icon name={'right'} size={20} />
        </button>
      </div>
      <div className={styles.navProfile}>
        <img
          src="https://i.scdn.co/image/ab67757000003b8250929c52e3fb543734ac5660"
          className={styles.profileImg}
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default NavBar;
