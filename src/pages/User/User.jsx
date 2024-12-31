import React, { useState, useEffect, useContext } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import NavBar from '../../components/NavBar/NavBar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { User_Profile, User_Follow_Read } from '../../constants/constant';
import { ThreeDots } from 'react-loader-spinner';
import styles from './User.module.css';
import HorizontalCard from '../../components/HorizontalScrollCard/HorizontalCard';
// import { artistAlbums as cleanup } from '../../constants/cleanUpData';
import { RiMoreFill } from 'react-icons/ri';
import { genrePlaylist } from '../../constants/cleanUpData';

function User() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [userPlaylist, setUserPlaylist] = useState(null);
  const [bgColor, setBgColor] = useState('#090909');
  const [isFollowing, setIsFollowing] = useState(false);
  const { fetchData, predictColor } = useAuth();
  const { userId } = useParams();

  useEffect(() => {
    Promise.all([
      fetchData(`${User_Profile}/${userId}`),
      fetchData(`${User_Profile}/${userId}/playlists`),
      fetchData(`${User_Follow_Read}/contains?type=user&ids=${userId}`),
    ])
      .then((res) => {
        if (res[0] != undefined) {
          // console.log(res);
          setUserData(res[0]);
          setIsFollowing(res[2][0]);
          // setUserPlaylist(res[1]);
          setUserPlaylist(genrePlaylist(res[1]));
          console.log(userPlaylist);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  useEffect(() => {
    if (userData)
      predictColor(userData.images[0].url, (result) => setBgColor(result.rgba));
  }, [userData]);

  if (!userData) {
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
                src={userData && userData.images[0].url}
                alt={userData && userData.name}
              />
            </div>
          </div>
          <div className={styles.detailsSection}>
            <div className={styles.title}>
              <h1>{userData && userData.display_name}</h1>
            </div>
            <div className={styles.desc}>
              <h4>{userData && userData.followers.total} follower</h4>
            </div>
          </div>
        </header>
        <div className={styles.tableContainer}>
          <div className={styles.artistRelateSection}>
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
          <div className={styles.tracksTitle}>{/* <h1>popular</h1> */}</div>
          <HorizontalCard data={userPlaylist} />
        </div>
      </div>
    </div>
  );
}

export default User;
