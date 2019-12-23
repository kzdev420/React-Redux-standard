import React from 'react';
import FormButton from './FormButton';
import styles from './forms.module.css';

export default ({ children, handleSubmit, error, submit }) => (
  <form className={styles.form} onSubmit={handleSubmit}>
    <div className={styles.formInner}>
      {children}
    </div>
    <FormButton>
      {submit}
    </FormButton>
  </form>
);
