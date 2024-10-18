import React, { useState, useEffect } from 'react';
import styles from '../Collection/Collection.module.css';
import { Icon } from '../../Icons';
import { FaArrowLeft } from 'react-icons/fa6';
import { RiMore2Line } from 'react-icons/ri';
import { LuClock3 } from 'react-icons/lu';
import { IoPlay } from 'react-icons/io5';
import NavBar from '../../components/NavBar/NavBar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { PlaylistWithId, User } from '../../constants/constant';
import equ from '../../assets/images/equaliser-animated-green.gif';
import { ThreeDots } from 'react-loader-spinner';

function Playlist() {
  const navigate = useNavigate();
  const [cardHover, setCardHover] = useState(false);
  const [playlistData, setPlaylistData] = useState(null);
  const [playlistOwner, setPlaylistOwner] = useState(null);
  const { fetchData } = useAuth();
  const { playlistId } = useParams();

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
    fetchData(`${PlaylistWithId}/${playlistId}`)
      .then((res) => {
        setPlaylistData(res);
        fetchData(`${User}/${res.owner.id}`)
          .then((res) => {
            setPlaylistOwner(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
    // } while (savedTracks != null);
  }, [playlistId]);

  return (
    <div className={styles.collectionSection}>
      {playlistData ? (
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
                  src={playlistData && playlistData.images[0].url}
                  alt={playlistData && playlistData.name}
                />
              </div>
            </div>
            <div className={styles.detailsSection}>
              <div className={styles.type}>
                <span>{playlistData && playlistData.type}</span>
              </div>
              <div className={styles.title}>
                <h1>{playlistData && playlistData.name}</h1>
              </div>
              <div className={styles.desc}>
                <h4>{playlistData && playlistData.description}</h4>
              </div>
              <div className={styles.desc}>
                <h5 className={styles.name}>
                  <img
                    src={playlistOwner && playlistOwner.images[0].url}
                    alt={playlistOwner && playlistOwner.display_name}
                  />
                  <Link to={playlistOwner && `/user/${playlistOwner.id}`}>
                    <h3>{playlistOwner && playlistOwner.display_name}</h3>
                  </Link>
                </h5>
                <span className={styles.songCount}>
                  &nbsp;• {playlistData.tracks.total} songs
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
                {playlistData.tracks.items.map((data, index) => {
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
                          <img src={data.track.album.images[1].url} />
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
      ) : (
        <div className={styles.loaderSection}>
          <ThreeDots visible={true} height="50" width="50" color="gray" />
        </div>
      )}
    </div>
  );
}

export default Playlist;
