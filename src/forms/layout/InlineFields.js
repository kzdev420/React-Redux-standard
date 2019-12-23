import React from 'react';
import styles from '../forms.module.css';

const InlineFields = ({ children }) => (
  <div className={styles.InlineFields}>
    {children}
  </div>
);

export default InlineFields;
