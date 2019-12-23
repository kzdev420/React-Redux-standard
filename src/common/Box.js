import React from 'react';
import styles from './Box.module.css';
import cn from 'classnames';

const Box = ({ children, className }) => (
  <div className={cn(styles.Box, className)}>
    {children}
  </div>
);

export default Box;
