import React, { useState, useEffect, useContext, useRef } from 'react';
import styles from './Collection.module.css';
import { Icon } from '../../assets/icons/Icons';
import { FaArrowLeft } from 'react-icons/fa6';
import { RiMore2Line } from 'react-icons/ri';
import { LuClock3 } from 'react-icons/lu';
import { IoPlay } from 'react-icons/io5';
import NavBar from '../../components/NavBar/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Liked_Songs, User } from '../../constants/constant';
import equ from '../../assets/images/equaliser-animated-green.gif';
import { DataContext } from '../../context/DataCacheContext';
import { ThreeDots } from 'react-loader-spinner';
import { CgProfile } from 'react-icons/cg';
import RowLoading from '../../components/RowLoadingSkeleton/RowLoading';

function Collection() {
  const navigate = useNavigate();
  const [cardHover, setCardHover] = useState(false);
  const [savedTracks, setSavedTracks] = useState(null);
  const [visibleRows, setVisibleRows] = useState({});
  const [nextEndpoint, setNextEndpoint] = useState(null);
  const { fetchData, DateConverter, msToTime } = useAuth();
  const { profileData } = useContext(DataContext);
  const inputRef = useRef(null);
  const lastItemRef = useRef(null);

  const handleClick = (index) => {
    setVisibleRows((prevState) => ({
      [index]: !prevState[index],
    }));
  };

  const repeatedApiCAll = () => {
    if (!nextEndpoint) return;
    fetchData(nextEndpoint)
      .then((res) => {
        savedTracks.items = [...savedTracks.items, ...res.items];
        setNextEndpoint(res.next);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData(Liked_Songs)
      .then((res) => {
        setSavedTracks(res);
        setNextEndpoint(res.next);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (!nextEndpoint) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          repeatedApiCAll();
        }
      },
      { threshold: 1.0 }
    );
    if (lastItemRef.current) observer.observe(lastItemRef.current);
    return () => {
      if (lastItemRef.current) {
        observer.unobserve(lastItemRef.current);
        observer.disconnect();
      }
    };
  }, [repeatedApiCAll, nextEndpoint]);

  if (!savedTracks) {
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
        <div className={styles.navigationBar}>
          <NavBar />
        </div>
        <nav>
          <div style={{ display: 'flex' }}>
            <div className={styles.navigationBtn}>
              <button onClick={() => navigate(-1)}>
                <FaArrowLeft size={20} color="#ffffff" />
              </button>
            </div>
            <div className={styles.title}>
              <h1>liked songs</h1>
            </div>
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
                {profileData && profileData.images[0] ? (
                  <img
                    src={profileData.images[0].url}
                    alt={profileData && profileData.display_name}
                  />
                ) : (
                  <CgProfile size={25} color="var(--primary-font-color)" />
                )}
                <Link to={profileData && `/user/${profileData.id}`}>
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
                const isLastIndex = index === savedTracks.items.length - 1;
                return (
                  <tr
                    key={index}
                    onClick={() => handleClick(index)}
                    ref={isLastIndex ? lastItemRef : null}
                  >
                    <td className={styles.songNo}>
                      {cardHover ? (
                        <IoPlay />
                      ) : (
                        <span
                          style={{
                            display: !visibleRows[index] ? 'inline' : 'none',
                          }}
                        >
                          {index + 1}
                        </span>
                      )}
                      <img
                        src={equ}
                        className={styles.equ}
                        style={{
                          display: visibleRows[index] ? 'inline' : 'none',
                        }}
                        ref={inputRef}
                      />
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
                      <RiMore2Line />
                    </td>
                  </tr>
                );
              })}
              {nextEndpoint && <RowLoading />}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Collection;
