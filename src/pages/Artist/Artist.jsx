import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import NavBar from '../../components/NavBar/NavBar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Single_Artists } from '../../constants/constant';
import { IoPlay } from 'react-icons/io5';
import equ from '../../assets/images/equaliser-animated-green.gif';
import { ThreeDots } from 'react-loader-spinner';
import { VscVerifiedFilled } from 'react-icons/vsc';
import styles from '../Collection/Collection.module.css';
import styles2 from './Artist.module.css';

function Artist() {
  const navigate = useNavigate();
  const [artistData, setArtistData] = useState(null);
  const { fetchData } = useAuth();
  const { artistId } = useParams();

  useEffect(() => {
    fetchData(`${Single_Artists}/${artistId}`)
      .then((res) => {
        setArtistData(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [artistId]);

  if (!artistData) {
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
      <div className={styles.innerSection}>
        <div className={styles.navigationBar}>{/* <NavBar /> */}</div>
        <nav>
          <div className={styles.navigationBtn}>
            <button onClick={() => navigate(-1)}>
              <FaArrowLeft size={20} color="black" />
            </button>
          </div>
        </nav>
        <header>
          <div className={styles.imgSection}>
            <div>
              <img
                src={artistData && artistData.images[0].url}
                alt={artistData && artistData.name}
              />
            </div>
          </div>
          <div className={styles.detailsSection}>
            <div className={styles2.type}>
              <VscVerifiedFilled
                color="white"
                size={25}
                style={{ marginRight: '0.3rem' }}
              />
              <span>{artistData && `Verified ${artistData.type}`}</span>
            </div>
            <div className={styles.title}>
              <h1>{artistData && artistData.name}</h1>
            </div>
            <div className={styles2.desc}>
              <h4>{artistData && artistData.followers.total} Followers</h4>
            </div>
          </div>
        </header>
        <div className={styles.tableContainer}>
          <hr />
          <table>
            {/* <thead>
                <tr>
                  <th className={styles.tableSongNoLabel}>#</th>
                  <th className={styles.tableSongTitleLabel}>title</th>
                  <th className={styles.tableSongAlbumLabel}>album</th>
                  <th className={styles.tableSongDateLabel}>date added</th>
                  <th className={styles.tableSongDurationLabel}>
                    <LuClock3 />
                  </th>
                </tr>
              </thead> */}
            <tbody>
              {/* {artistData.tracks.items.map((data, index) => {
                  return (
                    <tr key={index} style={{ cursor: 'pointer' }}>
                      <td className={styles.songNo}>
                        {cardHover ? <IoPlay /> : <span>{index + 1}</span>}
                         <img
                          src={equ}
                          style={{ width: '15px', height: '15px' }}
                        /> 
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
                })} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Artist;
