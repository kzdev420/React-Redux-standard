import React from 'react';
import styles from './index.module.css';
import back_icon from './back_icon.svg';

import Link from 'common/Link';

const Back = (props) => (
  <Link className={styles.Back} {...props}>
    <img className={styles.backImg} src={back_icon} alt="Back" />
  </Link>
)

export default Back;
