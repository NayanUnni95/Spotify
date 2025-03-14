import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import LeftSection from '../components/LeftSection/LeftSection';
import RightSection from '../components/RightSection/RightSection';
import BottomSection from '../components/BottomSection/BottomSection';
import styles from './AppLayout.module.css';
import MobileBottomNavBar from '../components/MobileBottomNavBar/MobileBottomNavBar';
import MusicPanel from '../pages/MusicPanel/MusicPanel';
import { useAuth } from '../hooks/useAuth';
import AudioContext from '../context/AudioContext';
import DataCacheContext from '../context/DataCacheContext';

const MyContext = React.createContext();

function AppLayout() {
  const { spotifyAuthReturnParams, setToken, getToken } = useAuth();
  const [showPlayer, setShowPlayer] = useState(false);
  const [showRightPanel, setShowRightPanel] = useState(false);

  const togglePlayerWindow = () => setShowPlayer(!showPlayer);
  const toggleRightPanel = () => setShowRightPanel(!showRightPanel);

  useEffect(() => {
    if (window.location.hash) {
      const expires_in = Date.now();
      const { access_token } = spotifyAuthReturnParams(window.location.hash);
      setToken(access_token, expires_in);
      window.history.pushState({}, '', '/');
    }
  }, []);

  if (!getToken() && !window.location.hash) {
    return <Navigate to="/login" />;
  }
  return (
    <div className={styles.container}>
      <DataCacheContext>
        <div className={styles.innerTopContainer}>
          <LeftSection />
          <Outlet />
          {showRightPanel ? <RightSection /> : null}
        </div>

        <MyContext.Provider
          value={{
            showPlayer,
            setShowPlayer,
            showRightPanel,
            setShowRightPanel,
            togglePlayerWindow,
            toggleRightPanel,
          }}
        >
          <AudioContext>
            {showPlayer ? <MusicPanel /> : <BottomSection />}
          </AudioContext>
        </MyContext.Provider>
        <MobileBottomNavBar />
      </DataCacheContext>
    </div>
  );
}

export default AppLayout;

export { MyContext };
