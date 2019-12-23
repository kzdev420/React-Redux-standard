import React from 'react';
import styles from './index.module.css';

export default ({ children, ...props }) => (
  <a className={styles.Button} {...props}>
    {children}
  </a>
)

