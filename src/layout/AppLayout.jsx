import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import LeftSection from '../components/LeftSection/LeftSection';
import RightSection from '../components/RightSection/RightSection';
import BottomSection from '../components/BottomSection/BottomSection';
import styles from './AppLayout.module.css';
import MobileBottomNavBar from '../components/MobileBottomNavBar/MobileBottomNavBar';
import MusicPanel from '../pages/MusicPanel/MusicPanel';
import { useAuth } from '../hooks/useAuth';
import AudioContext from '../context/AudioContext';

const MyContext = React.createContext();

function AppLayout() {
  const { spotifyAuthReturnParams, setToken, getToken } = useAuth();
  const navigate = useNavigate();
  const [showPlayer, setShowPlayer] = useState(false);
  const [showRightPanel, setShowRightPanel] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      const expires_in = Date.now();
      const { access_token } = spotifyAuthReturnParams(window.location.hash);
      setToken(access_token, expires_in);
      window.location = '';
    }
    if (!getToken()) navigate('/login');
  }, []);
  return (
    <div className={styles.container}>
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
        }}
      >
        <AudioContext>
          {showPlayer ? <MusicPanel /> : <BottomSection />}
        </AudioContext>
      </MyContext.Provider>
      <MobileBottomNavBar />
    </div>
  );
}

export default AppLayout;

export { MyContext };
