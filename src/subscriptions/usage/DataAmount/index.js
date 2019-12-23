import React from 'react';
import styles from './index.module.css';
import data_red from './data_red.svg';
import data_blue from './data_blue.svg';

import cn from 'classnames';
import { toGB } from 'helpers/formatters';

const DataAmount = ({ used, avail, className }) => (
  <span className={cn(styles.DataAmount, className)}>
    {used >= avail &&
      <img className={styles.dataIcon} src={data_red} alt="" />
    }
    {used < avail &&
      <img className={styles.dataIcon} src={data_blue} alt="" />
    }
    {toGB(used)}GB
  </span>
);

export default DataAmount;
