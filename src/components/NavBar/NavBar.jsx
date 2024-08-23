import React, { useState, useEffect } from 'react';
import { Icon } from '../../Icons';
import { CgProfile } from 'react-icons/cg';
import styles from './NavBar.module.css';
import { useAuth } from '../../hooks/useAuth';
import { Profile } from '../../constants/constant';

function NavBar() {
  const { fetchData } = useAuth();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetchData(Profile)
      .then((res) => {
        setUserData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={styles.navbarSection}>
      <div className={styles.bgBlur} />
      <div className={styles.navButton}>
        <button>
          <Icon name={'left'} size={20} />
        </button>
        <button>
          <Icon name={'right'} size={20} />
        </button>
      </div>
      <div className={styles.navProfile}>
        {userData && userData.images.length != 0 ? (
          <img
            src={userData.images[0].url}
            className={styles.profileImg}
            alt="avatar"
          />
        ) : (
          <CgProfile size={25} color="var(--primary-font-color)" />
        )}
      </div>
    </div>
  );
}

export default NavBar;
