import React from 'react';
import styles from './RowLoading.module.css';

function RowLoading() {
  const cells = [1, 2, 3];

  return (
    <>
      {cells.map((data, index) => {
        return (
          <tr key={index}>
            <td className={styles.songNoSection}>
              <div className={styles.songNoCell} />
            </td>
            <td className={styles.songMainDataSection}>
              <div className={styles.songDetailsSection}>
                <div className={styles.songNameSection}>
                  <div className={styles.songNameCell} />
                </div>
                <div className={styles.artistNameSection}>
                  <div className={styles.artistNameCell} />
                </div>
              </div>
            </td>
            <td className={styles.songAlbumNameSection}>
              <div className={styles.albumNameSection}>
                <div className={styles.albumNameCell} />
              </div>
            </td>
            <td className={styles.songAddedTimeSection}>
              <div className={styles.songAddedTimeCell} />
            </td>
            <td className={styles.songDurationSection}>
              <div className={styles.songDurationCell} />
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default RowLoading;
