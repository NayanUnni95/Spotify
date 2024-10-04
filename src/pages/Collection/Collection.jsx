import React, { useState, useEffect, useContext } from 'react';
import styles from './Collection.module.css';
import { Icon } from '../../Icons';
import { FaArrowLeft } from 'react-icons/fa6';
import { RiMore2Line } from 'react-icons/ri';
import { LuClock3 } from 'react-icons/lu';
import { IoPlay } from 'react-icons/io5';
import NavBar from '../../components/NavBar/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Liked_Songs } from '../../constants/constant';
import equ from '../../assets/images/equaliser-animated-green.gif';
import { DataContext } from '../../context/DataCacheContext';
import { ThreeDots } from 'react-loader-spinner';

function Collection() {
  const navigate = useNavigate();
  const [cardHover, setCardHover] = useState(false);
  const [savedTracks, setSavedTracks] = useState(null);
  const { fetchData } = useAuth();
  const { profileData } = useContext(DataContext);

  const DateConverter = (zuluTime) => {
    const date = new Date(zuluTime);
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    return `${day} ${month} ${year}`;
  };

  const msToTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);

    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };
  useEffect(() => {
    // do {
    fetchData(Liked_Songs)
      .then((res) => {
        setSavedTracks(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // } while (savedTracks != null);
  }, []);

  return (
    <div className={styles.collectionSection}>
      {!savedTracks ? (
        <div className={styles.loaderSection}>
          <ThreeDots visible={true} height="50" width="50" color="gray" />
        </div>
      ) : (
        <div className={styles.innerSection}>
          <div className={styles.navigationBar}>
            <NavBar />
          </div>
          <nav>
            <div className={styles.navigationBtn}>
              <button onClick={() => navigate(-1)}>
                <FaArrowLeft size={20} color="black" />
              </button>
            </div>
            <div className={styles.songManageSection}>
              <div className={styles.searchBar}>
                <button>
                  <Icon name="search" size={15} />
                </button>
                <input type="text" placeholder="Find in liked songs" />
              </div>
              <div className={styles.sortBtn}>
                <button>sort</button>
              </div>
            </div>
          </nav>
          <header>
            <div className={styles.imgSection}>
              <div>
                <img
                  src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
                  alt="liked songs"
                />
              </div>
            </div>
            <div className={styles.detailsSection}>
              <div className={styles.type}>
                <span>playlist</span>
              </div>
              <div className={styles.title}>
                <h1>liked songs</h1>
              </div>
              <div className={styles.desc}>
                <h5 className={styles.name}>
                  <Link to={profileData ? `/user/${profileData.id}` : ``}>
                    {profileData ? profileData.display_name : 'user'}
                  </Link>
                </h5>
                <span className={styles.songCount}>
                  &nbsp;• {savedTracks.total} songs
                </span>
              </div>
            </div>
          </header>
          <div className={styles.tableContainer}>
            <hr />
            <table>
              <thead>
                <tr>
                  <th className={styles.tableSongNoLabel}>#</th>
                  <th className={styles.tableSongTitleLabel}>title</th>
                  <th className={styles.tableSongAlbumLabel}>album</th>
                  <th className={styles.tableSongDateLabel}>date added</th>
                  <th className={styles.tableSongDurationLabel}>
                    <LuClock3 />
                  </th>
                </tr>
              </thead>
              <tbody>
                {savedTracks.items.map((data, index) => {
                  return (
                    <tr key={index} style={{ cursor: 'pointer' }}>
                      <td className={styles.songNo}>
                        {cardHover ? <IoPlay /> : <span>{index + 1}</span>}
                        {/* <img
                          src={equ}
                          style={{ width: '15px', height: '15px' }}
                        /> */}
                      </td>
                      <td className={styles.songMainData}>
                        <div className={styles.songAvatar}>
                          <img src={data.track.album.images[2].url} />
                        </div>
                        <div className={styles.songDetails}>
                          <div className={styles.songName}>
                            <Link to={`/track/${data.track.id}`}>
                              <span>{data.track.name}</span>
                            </Link>
                          </div>
                          <div className={styles.artistName}>
                            {data.track.artists.map((obj, index) => {
                              return (
                                <Link to={`/artist/${obj.id}`} key={index}>
                                  <span>{obj.name},</span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </td>
                      <td className={styles.songAlbumName}>
                        <div className={styles.albumNameSection}>
                          <Link to={`/album/${data.track.album.id}`}>
                            <span>{data.track.album.name}</span>
                          </Link>
                        </div>
                      </td>
                      <td className={styles.songAddedTime}>
                        <span>{DateConverter(data.added_at)}</span>
                      </td>
                      <td className={styles.songDuration}>
                        <span>{msToTime(data.track.duration_ms)}</span>
                      </td>
                      <td className={styles.moreBtn}>
                        <RiMore2Line style={{ cursor: 'not-allowed' }} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Collection;
