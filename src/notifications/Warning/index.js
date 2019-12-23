import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import { getError } from 'reducers';

import styles from '../notification.module.css';
import red_warning from './red_warning.svg';

export const Warning = ({ name, message }) => {
  if (!message) { return null; }

  return (
    <div className={cn(styles.Warning, styles.notification)}>
      <img className={styles.img} src={red_warning} alt="Error:" />
      <span className={styles.message}>
        {message}
      </span>
    </div>
  );
}

const mapStateToProps = (state, { name }) => ({
  message: getError(state, name),
});

export default connect(
  mapStateToProps
)(Warning);
