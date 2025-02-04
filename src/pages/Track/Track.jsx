import React, { useState, useEffect, useContext } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import NavBar from '../../components/NavBar/NavBar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Several_Tracks } from '../../constants/constant';
import { ThreeDots } from 'react-loader-spinner';
import styles from './Track.module.css';
import HorizontalCard from '../../components/HorizontalScrollCard/HorizontalCard';
// import { artistAlbums as cleanup } from '../../constants/cleanUpData';
import { RiMoreFill } from 'react-icons/ri';
// import { genrePlaylist } from '../../constants/cleanUpData';
import { IoMdPlay, IoMdPause } from 'react-icons/io';

function Track() {
  const navigate = useNavigate();
  const [trackData, setTrackData] = useState(null);
  const [userPlaylist, setUserPlaylist] = useState(null);
  const [bgColor, setBgColor] = useState('#090909');
  const { fetchData, predictColor } = useAuth();
  const { trackId } = useParams();

  useEffect(() => {
    Promise.all([fetchData(`${Several_Tracks}/${trackId}`)])
      .then((res) => {
        if (res[0] != undefined) {
          console.log(res);
          setTrackData(res[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [trackId]);

  useEffect(() => {
    if (trackData)
      predictColor(trackData.album.images[1].url, (result) =>
        setBgColor(result.rgba)
      );
  }, [trackData]);

  if (!trackData) {
    return (
      <div className={styles.collectionSection}>
        <div className={styles.loaderSection}>
          <ThreeDots visible={true} height="50" width="50" color="gray" />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.collectionSection}>
      <div
        className={styles.innerSection}
        style={{ backgroundColor: `${bgColor}` }}
      >
        <div className={styles.navigationBar}>
          <NavBar />
        </div>
        <nav>
          <div className={styles.navigationBtn}>
            <button onClick={() => navigate(-1)}>
              <FaArrowLeft
                size={20}
                style={{ color: 'var(--primary-background)' }}
              />
            </button>
          </div>
        </nav>
        <header>
          <div className={styles.imgSection}>
            <div>
              <img
                src={trackData && trackData.album.images[1].url}
                alt={trackData && trackData.name}
              />
            </div>
          </div>
          <div className={styles.detailsSection}>
            <div className={styles.title}>
              <h1>{trackData && trackData.name}</h1>
            </div>
          </div>
        </header>
        <div className={styles.tableContainer}>
          <div className={styles.artistRelateSection}>
            <div className={styles.playBtnSection}>
              <button className={styles.playBtn}>
                <IoMdPlay size={25} />
              </button>
            </div>
            <div className={styles.optionBtnSection}>
              <button className={styles.optionBtn}>
                <RiMoreFill
                  size={25}
                  style={{ color: 'var(--primary-font-color)' }}
                />
              </button>
            </div>
          </div>
          <hr />
          <div className={styles.tracksTitle}>{/* <h1>popular</h1> */}</div>
          {/* <HorizontalCard data={userPlaylist} /> */}
        </div>
      </div>
    </div>
  );
}

export default Track;
