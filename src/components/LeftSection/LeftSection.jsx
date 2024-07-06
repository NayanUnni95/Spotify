import React from 'react';
import styles from './LeftSection.module.css';
import Menu from './Menu/Menu';
import Library from './Library/Library';

function LeftSection() {
  return (
    <div className={styles.leftSection}>
      <Menu />
      <Library />
    </div>
  );
}

export default LeftSection;
