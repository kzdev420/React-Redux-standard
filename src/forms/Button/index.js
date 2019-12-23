import React from 'react';
import styles from './index.module.css';

export default ({ children, onClick, disabled }) => (
  <button className={styles.Button} onClick={onClick} disabled={disabled}>
    {children}
  </button>
)
