import React, { useEffect, useState } from 'react';
import { Icon } from '../../../Icons';
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

function Library() {
  const [data, setData] = useState(null);

  const { fetchData } = useAuth();
  useEffect(() => {
    Promise.all([
      fetchData(Liked_Songs),
      fetchData(Albums),
      fetchData(Playlist),
      fetchData(Artists),
    ])
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
      {data ? <VerticalCard /> : <VerticalCardSkeleton />}
    </div>
  );
}

export default Library;
