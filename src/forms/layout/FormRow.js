import React from 'react';
import styles from '../forms.module.css';

const FormRow = ({ children }) => (
  <div className={styles.FormRow}>
    {children}
  </div>
);

export default FormRow;
