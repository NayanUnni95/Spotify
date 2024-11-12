import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Library.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { DataContext } from '../../context/DataCacheContext';
import { useAuth } from '../../hooks/useAuth';
import {
  Liked_Songs,
  Albums,
  Playlist,
  Artists,
} from '../../constants/constant';
import { DataCleanUp } from '../../constants/cleanUpData';

function Library() {
  const [innerWidth, setInnerWidth] = useState(0);
  const { fetchData } = useAuth();
  const { libraryData, setLibraryData } = useContext(DataContext);
  const navigate = useNavigate();

  window.addEventListener('resize', () => setInnerWidth(window.innerWidth));

  useEffect(() => {
    if (!libraryData) {
      Promise.all([
        fetchData(Liked_Songs),
        fetchData(Albums),
        fetchData(Playlist),
        fetchData(Artists),
      ])
        .then((res) => {
          setLibraryData(DataCleanUp(res));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    if (innerWidth > 425) navigate('/');
  }, [innerWidth]);
  return (
    <div className={styles.librarySection}>
      <NavBar />
      <div className={styles.innerSection}>
        {libraryData?.map((data, index) => {
          if (data) {
            return (
              <div
                className={styles.cardSection}
                key={index}
                id={data.id}
                href={data.href}
              >
                <Link to={`/${data.routePath}/${data.id}`}>
                  <div className={styles.cardImgContainer}>
                    {data.type != 'artist' ? (
                      <img
                        src={data.image[0].url}
                        style={{ borderRadius: '0.2rem' }}
                      />
                    ) : (
                      <img
                        src={data.image[0].url}
                        style={{
                          borderRadius: '4rem',
                          minHeight: '50px',
                          maxHeight: '110px',
                        }}
                      />
                    )}
                  </div>
                  <div className={styles.cardDetailsContainer}>
                    <div className={styles.cardTitle}>
                      <span>{data.title}</span>
                    </div>
                    <div className={styles.cardSubTitle}>
                      <div className={styles.cardDes}>
                        <span>{data.type}</span>
                      </div>
                      <div className={styles.cardDes}>
                        <span>•{data.songs}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Library;
