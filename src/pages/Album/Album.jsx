import React, { useState, useEffect, useRef } from 'react';
import styles from './Album.module.css';
import { Icon } from '../../assets/icons/Icons';
import { FaArrowLeft } from 'react-icons/fa6';
import { RiMore2Line } from 'react-icons/ri';
import { LuClock3 } from 'react-icons/lu';
import { IoPlay } from 'react-icons/io5';
import NavBar from '../../components/NavBar/NavBar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Several_Albums, Single_Artists } from '../../constants/constant';
import equ from '../../assets/images/equaliser-animated-green.gif';
import { ThreeDots } from 'react-loader-spinner';

function Album() {
  const navigate = useNavigate();
  const [cardHover, setCardHover] = useState(false);
  const [albumData, setAlbumData] = useState(null);
  const [albumOwner, setAlbumOwner] = useState(null);
  const [visibleRows, setVisibleRows] = useState({});
  const [bgColor, setBgColor] = useState('black');
  const { fetchData, msToTime, predictColor } = useAuth();
  const { albumId } = useParams();
  const inputRef = useRef(null);

  const handleClick = (index) => {
    setVisibleRows((prevState) => ({
      [index]: !prevState[index],
    }));
  };
  useEffect(() => {
    fetchData(`${Several_Albums}/${albumId}`)
      .then((res) => {
        setAlbumData(res);
        predictColor(res.images[0].url, (result) => setBgColor(result.rgba));
        fetchData(`${Single_Artists}/${res.artists[0].id}`)
          .then((res) => {
            setAlbumOwner(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [albumId]);
  if (!albumData) {
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
                src={albumData && albumData.images[0].url}
                alt={albumData && albumData.name}
              />
            </div>
          </div>
          <div className={styles.detailsSection}>
            <div className={styles.type}>
              <span>{albumData && albumData.type}</span>
            </div>
            <div className={styles.title}>
              <h1>{albumData && albumData.name}</h1>
            </div>
            {/* <div className={styles.desc}>
                <h4>{albumData && albumData.description}</h4>
              </div> */}
            <div className={styles.desc}>
              <h5 className={styles.name}>
                <img
                  src={albumOwner && albumOwner.images[0].url}
                  alt={albumOwner && albumOwner.display_name}
                />
                <Link to={albumOwner && `/artist/${albumOwner.id}`}>
                  <h3>{albumOwner && albumOwner.name}</h3>
                </Link>
              </h5>
              <span className={styles.songCount}>
                &nbsp;• {albumData.tracks.total} songs
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
                <th className={styles.tableSongDurationLabel}>
                  <LuClock3 />
                </th>
              </tr>
            </thead>
            <tbody>
              {albumData.tracks.items.map((data, index) => {
                return (
                  <tr key={index} onClick={() => handleClick(index)}>
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
                      <div className={styles.songDetails}>
                        <div className={styles.songName}>
                          <Link to={`/track/${data.id}`}>
                            <span>{data.name}</span>
                          </Link>
                        </div>
                        <div className={styles.artistName}>
                          {data.artists.map((obj, index) => {
                            return (
                              <Link to={`/artist/${obj.id}`} key={index}>
                                <span>{obj.name},</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </td>
                    <td className={styles.songDuration}>
                      <span>{msToTime(data.duration_ms)}</span>
                    </td>
                    <td className={styles.moreBtn}>
                      <RiMore2Line />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Album;
