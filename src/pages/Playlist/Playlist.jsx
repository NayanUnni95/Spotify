import React, { useState, useEffect, useRef } from 'react';
import styles from './Playlist.module.css';
import { Icon } from '../../assets/icons/Icons';
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
import RowLoading from '../../components/RowLoadingSkeleton/RowLoading';

function Playlist() {
  const navigate = useNavigate();
  const [cardHover, setCardHover] = useState(false);
  const [playlistData, setPlaylistData] = useState(null);
  const [playlistOwner, setPlaylistOwner] = useState(null);
  const [nextEndpoint, setNextEndpoint] = useState(null);
  const [visibleRows, setVisibleRows] = useState({});
  const [bgColor, setBgColor] = useState('black');
  const { fetchData, DateConverter, msToTime, predictColor } = useAuth();
  const { playlistId } = useParams();
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
        playlistData.tracks.items = [
          ...playlistData.tracks.items,
          ...res.items,
        ];
        setNextEndpoint(res.next);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData(`${PlaylistWithId}/${playlistId}`)
      .then((res) => {
        setPlaylistData(res);
        predictColor(res.images[0].url, (result) => setBgColor(result.rgba));
        setNextEndpoint(res.tracks.next);
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
  }, [playlistId]);

  useEffect(() => {
    if (!nextEndpoint) return;
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
  if (!playlistData) {
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
        <header className={styles.header}>
          <div className={styles.imgSection}>
            <div>
              <img
                src={playlistData && playlistData.images[0].url}
                alt={playlistData && playlistData.name}
                // onChange={() => predictColor(playlistData.images[0].url)}
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
            {/* <div className={styles.desc}>
              <h4>{playlistData && playlistData.description}</h4>
            </div> */}
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
                const isLastIndex =
                  index === playlistData.tracks.items.length - 1;
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

export default Playlist;
