import React, { useState, useContext, useRef } from 'react';
import AudioProvider from '../../components/AudioProvider/AudioProvider';
import { MyContext } from '../../layout/AppLayout';
import { Icon } from '../../Icons';
import { IoIosArrowDown } from 'react-icons/io';
import { IoPlaySharp, IoPause, IoAddCircleOutline } from 'react-icons/io5';
import { BsArrowsAngleContract } from 'react-icons/bs';
import { TbRepeat } from 'react-icons/tb';
import { RxShuffle } from 'react-icons/rx';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import { HiOutlineVolumeUp, HiOutlineVolumeOff } from 'react-icons/hi';
import styled from 'styled-components';
import styles from './MusicPanel.module.css';

const CustomAudioPlayerWrapper = styled.div`
  .rhap_stacked .rhap_controls-section {
    display: none;
  }
  .rhap_container {
    background: none;
    box-shadow: none;
  }
  .rhap_progress-filled {
    background-color: var(--primary-font-color);
  }
  .rhap_progress-filled:hover {
    background-color: #1db954;
  }
  .rhap_progress-indicator {
    display: none;
  }
  .rhap_progress-indicator:hover {
    background-color: #1db954;
  }
  .rhap_download-progress {
    background-color: rgb(106 106 106 / 30%);
  }
  .rhap_time {
    color: var(--primary-background) !important;
  }
  @media only screen and (max-width: 425px) {
    .rhap_progress-section {
      display: flex;
      margin: 1rem;
    }
  }
`;

function MusicPanel() {
  const data = {
    name: 'malabari banger',
    artist: ['dabzee', 'mhr', 'joker', 'sa'],
    playlist: 'trending now malayalam',
    images: [
      {
        url: 'https://i.scdn.co/image/ab67616d0000b2730a5fda5bb1a466fc1ee47d56',
        height: 640,
        width: 640,
      },
      {
        url: 'https://i.scdn.co/image/ab67616d00001e020a5fda5bb1a466fc1ee47d56',
        height: 300,
        width: 300,
      },
      {
        url: 'https://i.scdn.co/image/ab67616d000048510a5fda5bb1a466fc1ee47d56',
        height: 64,
        width: 64,
      },
    ],
    downloadUrl: [
      {
        quality: '12kbps',
        url: 'https://aac.saavncdn.com/504/05b2fb10b4d21f8422e78412ea344ac5_12.mp4',
      },
      {
        quality: '48kbps',
        url: 'https://aac.saavncdn.com/504/05b2fb10b4d21f8422e78412ea344ac5_48.mp4',
      },
      {
        quality: '96kbps',
        url: 'https://aac.saavncdn.com/504/05b2fb10b4d21f8422e78412ea344ac5_96.mp4',
      },
      {
        quality: '160kbps',
        url: 'https://aac.saavncdn.com/504/05b2fb10b4d21f8422e78412ea344ac5_160.mp4',
      },
      {
        quality: '320kbps',
        url: 'https://aac.saavncdn.com/504/05b2fb10b4d21f8422e78412ea344ac5_320.mp4',
      },
    ],
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [mute, setMute] = useState(false);
  const { showPlayer, setShowPlayer, playAudio, pauseAudio, muteAudio } =
    useContext(MyContext);
  const playerRef = useRef();

  const updatePlayer = () => setShowPlayer(!showPlayer);
  const playPause = () => {
    if (!isPlaying) playAudio(playerRef);
    else pauseAudio(playerRef);
  };
  const muteUnmute = () => muteAudio(playerRef);

  return (
    <div className={styles.musicPanelContainer}>
      <div className={styles.fadeLayer}></div>
      <div className={styles.innerContainer}>
        <div className={styles.navbarSection}>
          <div className={styles.backBtnSection} onClick={updatePlayer}>
            <IoIosArrowDown size={25} />
          </div>
          <div className={styles.logoSection}>
            <div>
              <Icon name="spotifyLogo" size={30} />
            </div>
            <div className={styles.playlistTitle}>
              <span className={styles.labelType}>Playing from</span>
              <span className={styles.playlistLabelName}>{data.playlist}</span>
            </div>
          </div>
        </div>
        <div className={styles.dataSection}>
          <div className={styles.songImgSection}>
            <img src={data.images[1].url} className={styles.songImg} />
          </div>
          <div className={styles.songDescContainer}>
            <div className={styles.TitleSection}>
              <span>{data.name}</span>
            </div>
            <div className={styles.ArtistSection}>
              <span>{data.artist.join(', ')}</span>
            </div>
          </div>
        </div>
        <div className={styles.controlSection}>
          <div>
            <CustomAudioPlayerWrapper>
              <AudioProvider
                url={data.downloadUrl[4].url}
                controls={playerRef}
                loopState={repeat}
              />
            </CustomAudioPlayerWrapper>
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
                <button>
                  <RxShuffle size={25} />
                </button>
              </div>
              <div>
                <button>
                  <MdSkipPrevious size={25} />
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    playPause();
                    setIsPlaying(!isPlaying);
                  }}
                  className={styles.ctrlBtn}
                >
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
                <button
                  onClick={() => {
                    setRepeat(!repeat);
                  }}
                >
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
                <button
                  onClick={() => {
                    muteUnmute();
                    setMute(!mute);
                  }}
                  className={styles.volumeBtn}
                >
                  {mute ? (
                    <HiOutlineVolumeOff size={25} />
                  ) : (
                    <HiOutlineVolumeUp size={25} />
                  )}
                </button>
                <input type="range" className={styles.volumeBar} />
              </div>
              <div className={styles.exitBtn}>
                <button onClick={updatePlayer}>
                  <BsArrowsAngleContract size={25} />
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
