import React from 'react';
import cn from 'classnames';
import { prettyKey } from 'helpers/formatters';
import styles from './forms.module.css';

export default ({
  input,
  input: { name },
  meta: { touched, error },
  type = 'text',
  label,
  placeholder
}) => (
  <div className={cn({
    [styles.InputField]: true,
    'has-error': touched && error,
    'has-success': touched && !error
  })}>
    <label className={styles.inputLabel}>{label ? label : prettyKey(name)}</label>
    <input {...input} type={type} className={styles.input} placeholder={placeholder} />
    {
      touched && error &&
      <span className="help-block">
        {error}  
      </span>
    }
  </div>
);

