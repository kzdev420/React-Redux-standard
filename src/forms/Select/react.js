import React from 'react';
import cn from 'classnames';
import Select from 'react-select';
import styles from '../forms.module.css';

const ReactSelect = ({ label, className, ...props }) => (
  <div className={cn(styles.Select, className)}>
    <label className={styles.inputLabel}>{label}</label>
    <Select {...props} isSearchable={false} />
  </div>
);

export default ReactSelect;
