import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import { getInfo } from 'reducers';

import styles from '../notification.module.css';
import check_mark from './check_mark.svg';

export const Info = ({ name, message }) => {
  if (!message) { return null; }

  return (
    <div className={cn(styles.Info, styles.notification)}>
      <img className={styles.img} src={check_mark} alt="Important information:" />
      <span className={styles.message}>
        {message}
      </span>
    </div>
  );
}

const mapStateToProps = (state, { name }) => ({
  message: getInfo(state, name),
});

export default connect(
  mapStateToProps
)(Info);
