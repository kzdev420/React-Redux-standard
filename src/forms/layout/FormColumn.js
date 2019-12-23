import React from 'react';
import styles from '../forms.module.css';

const FormColumn = ({ children }) => (
  <div className={styles.FormColumn}>
    {children}
  </div>
);

export default FormColumn;
