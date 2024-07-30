import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import LeftSection from '../components/LeftSection/LeftSection';
// import RightSection from '../components/RightSection/RightSection';
import BottomSection from '../components/BottomSection/BottomSection';
import styles from './AppLayout.module.css';
import MobileBottomNavBar from '../components/MobileBottomNavBar/MobileBottomNavBar';
import { useAuth } from '../hooks/useAuth';

function AppLayout() {
  const { spotifyAuthReturnParams, setToken } = useAuth();
  useEffect(() => {
    if (window.location.hash) {
      const expires_in = Date.now();
      const { access_token } = spotifyAuthReturnParams(window.location.hash);
      setToken(access_token, expires_in);
      window.location = '';
    }
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.innerTopContainer}>
        <LeftSection />
        <Outlet />
        {/* <RightSection /> */}
      </div>
      <BottomSection />
      <MobileBottomNavBar />
    </div>
  );
}

export default AppLayout;
