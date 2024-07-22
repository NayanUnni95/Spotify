import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import LeftSection from '../components/LeftSection/LeftSection';
// import RightSection from '../components/RightSection/RightSection';
import BottomSection from '../components/BottomSection/BottomSection';
import styles from './AppLayout.module.css';
import MobileBottomNavBar from '../components/MobileBottomNavBar/MobileBottomNavBar';

function AppLayout() {
  const spotifyAuthReturnParams = (hash) => {
    const strAfterHash = hash.substring(1);
    const paramsInUrl = strAfterHash.split('&');
    const paramsSplitUp = paramsInUrl.reduce((accumulator, currValue) => {
      const [key, value] = currValue.split('=');
      accumulator[key] = value;
      return accumulator;
    }, {});
    return paramsSplitUp;
  };

  const setValue = (key, value) => localStorage.setItem(key, value);
  const getValue = (key) => localStorage.getItem(key);

  useEffect(() => {
    if (window.location.hash) {
      const { access_token, token_type, expires_in } = spotifyAuthReturnParams(
        window.location.hash
      );
      setValue('access_token', access_token);
      setValue('token_type', token_type);
      setValue('expires_in', expires_in);
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
