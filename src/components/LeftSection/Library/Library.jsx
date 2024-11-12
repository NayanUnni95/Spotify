import React, { useEffect, useContext } from 'react';
import { Icon } from '../../../assets/icons/Icons';
import styles from './Library.module.css';
import VerticalCard from '../VerticalCard/VerticalCard';
import VerticalCardSkeleton from '../VerticalCardSkeleton/VerticalCardSkeleton';
import { useAuth } from '../../../hooks/useAuth';
import {
  Liked_Songs,
  Albums,
  Playlist,
  Artists,
} from '../../../constants/constant';
import { DataCleanUp } from '../../../constants/cleanUpData';
import { DataContext } from '../../../context/DataCacheContext';

function Library() {
  const { libraryData, setLibraryData } = useContext(DataContext);
  const { fetchData } = useAuth();

  useEffect(() => {
    if (!libraryData) {
      Promise.all([
        fetchData(Liked_Songs),
        fetchData(Albums),
        fetchData(Playlist),
        fetchData(Artists),
      ])
        .then((res) => {
          // DataCleanUp is a custom data cleanup function for arrange unordered data to ordered data
          setLibraryData(DataCleanUp(res));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <div className={styles.librarySection}>
      <div className={styles.libraryLabel}>
        <div>
          <Icon name="library" size={25} />
        </div>
        <div className={styles.librarySpanDiv}>
          <span>library</span>
        </div>
      </div>
      {libraryData ? (
        <VerticalCard collectionData={libraryData} />
      ) : (
        <VerticalCardSkeleton />
      )}
    </div>
  );
}

export default Library;
