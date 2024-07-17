import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSection from '../components/LeftSection/LeftSection';
// import RightSection from '../components/RightSection/RightSection';
import BottomSection from '../components/BottomSection/BottomSection';
import styles from './AppLayout.module.css';
import MobileBottomNavBar from '../components/MobileBottomNavBar/MobileBottomNavBar';

function AppLayout() {
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
