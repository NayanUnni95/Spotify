import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../Icons';
import { CgProfile } from 'react-icons/cg';
import styles from './NavBar.module.css';
import { useAuth } from '../../hooks/useAuth';
import { Profile } from '../../constants/constant';
import { DataContext } from '../../context/DataCacheContext';

function NavBar() {
  const { fetchData } = useAuth();
  const navigate = useNavigate();
  const { profileData, setProfileData } = useContext(DataContext);

  useEffect(() => {
    if (!profileData) {
      fetchData(Profile)
        .then((res) => {
          setProfileData(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <div className={styles.navbarSection}>
      <div className={styles.bgBlur} />
      <div className={styles.navButton}>
        <button onClick={() => navigate(-1)}>
          <Icon name={'left'} size={20} />
        </button>
        <button onClick={() => navigate(1)}>
          <Icon name={'right'} size={20} />
        </button>
      </div>
      <div className={styles.navProfile}>
        {profileData && profileData.images.length != 0 ? (
          <img
            src={profileData.images[0].url}
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
