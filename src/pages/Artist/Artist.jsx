import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import NavBar from '../../components/NavBar/NavBar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Single_Artists, User_Follow_Read } from '../../constants/constant';
import { IoPlay } from 'react-icons/io5';
import equ from '../../assets/images/equaliser-animated-green.gif';
import { ThreeDots } from 'react-loader-spinner';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { RiMore2Line } from 'react-icons/ri';
import styles from './Artist.module.css';
import HorizontalCard from '../../components/HorizontalScrollCard/HorizontalCard';
import { artistAlbums as cleanup } from '../../constants/cleanUpData';
import { IoMdPlay, IoMdPause } from 'react-icons/io';
import { RiMoreFill } from 'react-icons/ri';

function Artist() {
  const navigate = useNavigate();
  const [artistData, setArtistData] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [artistAlbums, setArtistAlbum] = useState(null);
  const [bgColor, setBgColor] = useState('#090909');
  const [isFollowing, setIsFollowing] = useState(false);
  const { fetchData, msToTime, DateConverter, predictColor } = useAuth();
  const { artistId } = useParams();

  useEffect(() => {
    Promise.all([
      fetchData(`${Single_Artists}/${artistId}`),
      fetchData(`${Single_Artists}/${artistId}/top-tracks`),
      fetchData(`${Single_Artists}/${artistId}/albums?limit=10`),
      fetchData(`${User_Follow_Read}/contains?type=artist&ids=${artistId}`),
    ])
      .then((res) => {
        if (res[0] != undefined) {
          setArtistData(res[0]);
          setTopTracks(res[1]);
          setArtistAlbum(cleanup(res[2]));
          setIsFollowing(res[3][0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [artistId]);

  useEffect(() => {
    if (artistData)
      predictColor(artistData.images[0].url, (result) =>
        setBgColor(result.rgba)
      );
  }, [artistData]);

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
                src={artistData && artistData.images[0].url}
                alt={artistData && artistData.name}
              />
            </div>
          </div>
          <div className={styles.detailsSection}>
            <div className={styles.type}>
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
            <div className={styles.desc}>
              <h4>
                {artistData && artistData.followers.total} monthly listeners
              </h4>
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
            <div className={styles.followBtnSection}>
              <button
                className={styles.followBtn}
                style={{ color: 'var(--primary-font-color)' }}
              >
                {isFollowing ? 'following' : 'follow'}
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
          <div className={styles.tracksTitle}>
            <h1>popular</h1>
          </div>
          <table>
            <tbody>
              {topTracks &&
                topTracks.tracks.map((data, index) => {
                  return (
                    <tr key={index} style={{ cursor: 'pointer' }}>
                      <td className={styles.songNo}>
                        <span>{index + 1}</span>
                        {/* <img
                        src={equ}
                        style={{ width: '15px', height: '15px' }}
                      /> */}
                      </td>
                      <td className={styles.songMainData}>
                        <div className={styles.songAvatar}>
                          <img src={data.album.images[0].url} />
                        </div>
                        <div className={styles.songDetails}>
                          <div className={styles.songName}>
                            <Link to={`/track/${data.id}`}>
                              <span>{data.name}</span>
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className={styles.songAlbumName}>
                        <div className={styles.albumNameSection}>
                          <Link to={`/album/${data.album.id}`}>
                            <span>{data.album.name}</span>
                          </Link>
                        </div>
                      </td>
                      <td className={styles.songAddedTime}>
                        <span>{DateConverter(data.album.release_date)}</span>
                      </td>
                      <td className={styles.songDuration}>
                        <span>{msToTime(data.duration_ms)}</span>
                      </td>
                      <td className={styles.moreBtn}>
                        <RiMore2Line style={{ cursor: 'not-allowed' }} />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <HorizontalCard data={artistAlbums} />
        </div>
      </div>
    </div>
  );
}

export default Artist;
