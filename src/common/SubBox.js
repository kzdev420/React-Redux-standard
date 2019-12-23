import React from 'react';
import styles from './SubBox.module.css';

const SubBox = ({ children }) => (
  <div className={styles.SubBox}>
    {children}
  </div>
)

export default SubBox;
