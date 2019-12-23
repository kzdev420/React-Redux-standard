import React from 'react';
import styles from './ProgressMeter.module.css';

export const ProgressMeter = ({ percent, progress, remaining, full }) => (
  <div className={styles.ProgressMeter} style={{backgroundColor: remaining}}>
    <div className={styles.progress} style={{
      backgroundColor: progress,
      width: `${percent}%`
    }} />
    {percent === 100 &&
      <div className={styles.full} style={{backgroundColor: full}} />
    }
  </div>
);

export default ProgressMeter;
