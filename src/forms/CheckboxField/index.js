import React from 'react';
import styles from './index.module.css';

import { prettyKey } from 'helpers/formatters';

const CheckboxField = ({
  label,
  input,
  input: { name }
}) => (
  <div className={styles.checkbox}>
    <input {...input} type="checkbox" id={name} checked={input.value} />
    <label htmlFor={name}>{label ? label : prettyKey(name)}</label>
  </div>
);

export default CheckboxField;
