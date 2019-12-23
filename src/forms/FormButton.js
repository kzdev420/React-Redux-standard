import React from 'react';
import styles from './forms.module.css';

const FormButton = ({ children }) => (
  <button className={styles.FormButton}>
    {children}
  </button>
)

export default FormButton;
