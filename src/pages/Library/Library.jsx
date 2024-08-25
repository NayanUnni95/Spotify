import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Library.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { LibraryDataContext } from '../../layout/AppLayout';

function Library() {
  const [innerWidth, setInnerWidth] = useState(0);
  const { libraryData } = useContext(LibraryDataContext);
  const navigate = useNavigate();

  window.addEventListener('resize', () => setInnerWidth(window.innerWidth));

  useEffect(() => {
    if (innerWidth > 425) navigate('/');
  }, [innerWidth]);
  return (
    <div className={styles.librarySection}>
      <NavBar />
      <div className={styles.innerSection}>
        {libraryData
          ? libraryData.map((data, index) => {
              if (data) {
                return (
                  <div
                    className={styles.cardSection}
                    key={index}
                    id={data.id}
                    href={data.href}
                  >
                    <div className={styles.cardImgContainer}>
                      {data.type != 'artist' ? (
                        <img
                          src={data.image[0].url}
                          style={{ borderRadius: '0.2rem' }}
                        />
                      ) : (
                        <img
                          src={data.image[0].url}
                          style={{ borderRadius: '4rem' }}
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
                  </div>
                );
              }
            })
          : null}
      </div>
    </div>
  );
}

export default Library;
