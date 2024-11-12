import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../assets/icons/Icons';
import styles from './MobileBottomNavBar.module.css';

function MobileBottomNavBar() {
  return (
    <div className={styles.bottomContainer}>
      <NavLink to="/">
        <div className={styles.homeIcon}>
          <Icon name="home" size={25} />
        </div>
      </NavLink>
      <NavLink to="/search">
        <div className={styles.searchIcon}>
          <Icon name="search" size={25} />
        </div>
      </NavLink>
      <NavLink to="/library">
        <div className={styles.libraryIcon}>
          <Icon name="library" size={25} />
        </div>
      </NavLink>
    </div>
  );
}

export default MobileBottomNavBar;
