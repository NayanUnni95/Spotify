import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../../Icons';
import styles from './Menu.module.css';

function Menu() {
  return (
    <div className={styles.menuSection}>
      <NavLink to="/">
        <div className={styles.homeDiv}>
          <div>
            <Icon name="home" size={25} />
          </div>
          <div className={styles.homeSpanDiv}>
            <span>home</span>
          </div>
        </div>
      </NavLink>
      <NavLink to="/search">
        <div className={styles.searchDiv}>
          <div>
            <Icon name="search" size={25} />
          </div>
          <div className={styles.searchSpanDiv}>
            <span>search</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Menu;
