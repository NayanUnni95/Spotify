import React from 'react';
import { Icon } from '../../../Icons';
import { NavLink } from 'react-router-dom';
import styles from './Library.module.css';

function Library() {
  return (
    <div className={styles.librarySection}>
      <NavLink to="/library">
        <div className={styles.libraryLabel}>
          <div>
            <Icon name="library" size={25} />
          </div>
          <div className={styles.librarySpanDiv}>
            <span>library</span>
          </div>
        </div>
      </NavLink>
      <div className={styles.libraryVerticalScroll}>
        {/* <div className={styles.verticalCard}>
          <img
            src="https://i.scdn.co/image/ab67616d00004851495ce6da9aeb159e94eaa453"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
}

export default Library;
