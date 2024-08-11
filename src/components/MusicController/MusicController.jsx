import React, { useState, useContext, useRef } from 'react';
import styles from './MusicController.module.css';
import 'react-h5-audio-player/lib/styles.css';
import AudioProvider from '../../components/AudioProvider/AudioProvider';
import { MyContext } from '../../layout/AppLayout';
import { BiCaretRightSquare, BiCaretLeftSquare } from 'react-icons/bi';
import { HiOutlineQueueList } from 'react-icons/hi2';
import { CgMusicSpeaker } from 'react-icons/cg';
import { HiOutlineVolumeUp, HiOutlineVolumeOff } from 'react-icons/hi';
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { IoPlaySharp, IoPause } from 'react-icons/io5';
import { TbRepeat } from 'react-icons/tb';
import { RxShuffle } from 'react-icons/rx';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import styled from 'styled-components';

const AudioPlayerWrapper = styled.div`
  .rhap_stacked .rhap_controls-section {
    display: none;
  }
  .rhap_container {
    background: none;
    padding: 0;
  }
  .rhap_progress-indicator {
    display: none;
  }
  .rhap_progress-filled {
    background-color: #ffffff;
  }
  .rhap_progress-filled:hover {
    background-color: #1db954;
  }
  .rhap_download-progress {
    background-color: #232323d6;
  }
  .rhap_progress-bar-show-download {
    background-color: #4d4d4d;
  }
  .rhap_time {
    color: var(--primary-font-color);
  }
`;
function MusicController({ TrackData }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [mute, setMute] = useState(false);
  const {
    showPlayer,
    setShowPlayer,
    showRightPanel,
    setShowRightPanel,
    playAudio,
    pauseAudio,
    muteAudio,
  } = useContext(MyContext);
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
          <AudioPlayerWrapper className={styles.progressBar}>
            <AudioProvider
              url={TrackData.source.url}
              controls={playerRef}
              loopState={repeat}
            />
          </AudioPlayerWrapper>
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
