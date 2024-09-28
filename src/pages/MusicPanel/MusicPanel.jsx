import React, { useState, useContext } from 'react';
import CustomProgressbar from '../../components/ProgressBar/CustomProgressbar';
import { MyContext } from '../../layout/AppLayout';
import { AudioContext } from '../../context/AudioContext';
import { Icon } from '../../Icons';
import { IoIosArrowDown } from 'react-icons/io';
import { IoPlaySharp, IoPause, IoAddCircleOutline } from 'react-icons/io5';
import { BsArrowsAngleContract } from 'react-icons/bs';
import { TbRepeat } from 'react-icons/tb';
import { RxShuffle } from 'react-icons/rx';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import { HiOutlineVolumeUp, HiOutlineVolumeOff } from 'react-icons/hi';
import styles from './MusicPanel.module.css';

function MusicPanel() {
  const { togglePlayerWindow } = useContext(MyContext);
  const {
    playPause,
    toggleRepeat,
    toggleShuffle,
    muteAudio,
    isPlaying,
    repeat,
    shuffle,
    mute,
    TrackData,
    volume,
    setVolumeValue,
  } = useContext(AudioContext);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={styles.musicPanelContainer}>
      <div className={styles.fadeLayer}></div>
      <div className={styles.innerContainer}>
        <div className={styles.navbarSection}>
          <div className={styles.backBtnSection} onClick={togglePlayerWindow}>
            <IoIosArrowDown size={25} color={'#ffffffc7'} />
          </div>
          <div className={styles.logoSection}>
            <div>
              <Icon name="spotifyLogo" size={30} />
            </div>
            <div className={styles.playlistTitle}>
              <span className={styles.labelType}>Playing from</span>
              <span className={styles.playlistLabelName}>
                {TrackData.playlist}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.dataSection}>
          <div className={styles.songImgSection}>
            <img src={TrackData.images[1].url} className={styles.songImg} />
          </div>
          <div className={styles.songDescContainer}>
            <div className={styles.TitleSection}>
              <span>{TrackData.name}</span>
            </div>
            <div className={styles.ArtistSection}>
              <span>{TrackData.artists.join(', ')}</span>
            </div>
          </div>
        </div>
        <div className={styles.controlSection}>
          <div>
            <CustomProgressbar />
          </div>
          <div className={styles.btnSection}>
            <div className={styles.featureBtn}>
              <div className={styles.addBtn}>
                <button>
                  <IoAddCircleOutline size={25} />
                </button>
              </div>
            </div>
            <div className={styles.basicFunBtn}>
              <div className={styles.shuffleBtn}>
                <button onClick={toggleShuffle}>
                  {shuffle ? (
                    <RxShuffle size={22} color="#1db954" />
                  ) : (
                    <RxShuffle size={22} />
                  )}
                </button>
              </div>
              <div>
                <button>
                  <MdSkipPrevious size={25} />
                </button>
              </div>
              <div>
                <button onClick={playPause} className={styles.ctrlBtn}>
                  {isPlaying ? (
                    <IoPause size={32} />
                  ) : (
                    <IoPlaySharp size={32} />
                  )}
                </button>
              </div>
              <div>
                <button>
                  <MdSkipNext size={25} />
                </button>
              </div>
              <div className={styles.repeatBtn}>
                <button onClick={toggleRepeat}>
                  {repeat ? (
                    <TbRepeat size={25} color="#1db954" />
                  ) : (
                    <TbRepeat size={25} />
                  )}
                </button>
              </div>
            </div>
            <div className={styles.additionalFunBtn}>
              <div className={styles.volumeBar}>
                <button onClick={muteAudio} className={styles.volumeBtn}>
                  {mute ? (
                    <HiOutlineVolumeOff size={23} />
                  ) : (
                    <HiOutlineVolumeUp size={23} />
                  )}
                </button>
                <input
                  type="range"
                  value={volume * 100}
                  style={{
                    background: `linear-gradient(to right, var(--primary-font-color) ${
                      volume * 100
                    }%, #4d4d4d ${volume * 100}%`,
                    transition: 'background 0.5s ease',
                    ...(isHover && {
                      background: `linear-gradient(to right, var(--spotify-green-theme) ${
                        volume * 100
                      }%, #4d4d4d ${volume * 100}%`,
                    }),
                  }}
                  onChange={(e) => setVolumeValue(e.target.value / 100)}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                />
              </div>
              <div className={styles.exitBtn}>
                <button onClick={togglePlayerWindow}>
                  <BsArrowsAngleContract size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPanel;
