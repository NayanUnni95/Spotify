import React, { useEffect, useContext, useRef } from 'react';
import styles from './MusicController.module.css';
import { MyContext } from '../../layout/AppLayout';
import { AudioContext } from '../../context/AudioContext';
import { BiCaretRightSquare, BiCaretLeftSquare } from 'react-icons/bi';
import { HiOutlineQueueList } from 'react-icons/hi2';
import { CgMusicSpeaker } from 'react-icons/cg';
import { HiOutlineVolumeUp, HiOutlineVolumeOff } from 'react-icons/hi';
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { IoPlaySharp, IoPause } from 'react-icons/io5';
import { TbRepeat } from 'react-icons/tb';
import { RxShuffle } from 'react-icons/rx';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import CustomProgressbar from '../ProgressBar/CustomProgressbar';

function MusicController() {
  const { showPlayer, setShowPlayer, showRightPanel, setShowRightPanel } =
    useContext(MyContext);
  const {
    playAudio,
    pauseAudio,
    muteAudio,
    isPlaying,
    setIsPlaying,
    repeat,
    setRepeat,
    shuffle,
    setShuffle,
    mute,
    setMute,
  } = useContext(AudioContext);
  const playerRef = useRef();

  const updatePlayer = () => {
    setShowPlayer(!showPlayer);
  };
  const RightPanel = () => {
    setShowRightPanel(!showRightPanel);
  };
  const playPause = () => {
    if (isPlaying) pauseAudio(playerRef);
    else playAudio(playerRef);
  };
  const muteUnmute = () => muteAudio(playerRef);

  useEffect(() => {
    return () => {
      setIsPlaying(false); // change button state while page switch
    };
  }, []);

  return (
    <div className={styles.musicContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.mainControlSection}>
          <div className={styles.basicBtn}>
            <div className={styles.shuffleBtn}>
              <button onClick={() => setShuffle(!shuffle)}>
                {shuffle ? (
                  <RxShuffle size={22} color="#1db954" />
                ) : (
                  <RxShuffle size={22} />
                )}
              </button>
            </div>
            <div className={styles.prevBtn}>
              <button>
                <MdSkipPrevious size={30} />
              </button>
            </div>
            <div className={styles.ctrlBtn}>
              <button
                onClick={() => {
                  playPause();
                  setIsPlaying(!isPlaying);
                }}
              >
                {isPlaying ? <IoPause size={25} /> : <IoPlaySharp size={25} />}
              </button>
            </div>
            <div className={styles.nextBtn}>
              <button>
                <MdSkipNext size={30} />
              </button>
            </div>
            <div className={styles.repeatBtn}>
              <button onClick={() => setRepeat(!repeat)}>
                {repeat ? (
                  <TbRepeat size={22} color="#1db954" />
                ) : (
                  <TbRepeat size={22} />
                )}
              </button>
            </div>
          </div>
          <div className={styles.progressBar}>
            <CustomProgressbar />
          </div>
        </div>
        <div className={styles.featureBtnSection}>
          <div className={styles.rightSidePanelBtn}>
            <button onClick={() => RightPanel()}>
              {showRightPanel ? (
                <BiCaretRightSquare size={19} color="#1db954" />
              ) : (
                <BiCaretLeftSquare size={19} />
              )}
            </button>
          </div>
          <div className={styles.queueBtn}>
            <button>
              <HiOutlineQueueList size={19} />
            </button>
          </div>
          <div className={styles.deviceBtn}>
            <button>
              <CgMusicSpeaker size={19} />
            </button>
          </div>
          <div className={styles.volumeBtn}>
            <button
              onClick={() => {
                muteUnmute();
                setMute(!mute);
              }}
            >
              {mute ? (
                <HiOutlineVolumeOff size={19} />
              ) : (
                <HiOutlineVolumeUp size={19} />
              )}
            </button>
          </div>
          <div className={styles.volumeBar}>
            <input type="range" />
          </div>
          <div className={styles.expandBtn}>
            <button onClick={() => updatePlayer()}>
              <BsArrowsAngleExpand size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicController;
