import React from 'react';
import { connect } from 'react-redux';
import { getUser } from 'reducers';

import styles from './index.module.css';
import default_avi from './default_avi.svg';
import cycle_icon from './cycle_icon.svg';

import SubscriptionList from 'subscriptions/SubscriptionList';

import Box from 'common/Box';
import ProgressMeter from 'common/ProgressMeter';
import { daysLeftInCycle } from 'helpers/cycles';
import { formatMdn, pluralize, percent } from 'helpers/formatters';

export const Home = ({ user, daysLeft }) => {
  if (!user) {
    return null;
  }

  return (
    <div className="Home">
      <Box className={styles.userCard}>
        <img className={styles.avi} alt="Avitar" src={
          user.profile_image ?
            user.profile_image :
            default_avi
        } />
        <h2 className={styles.account_name}>
          {user.first_name} {user.last_name}
        </h2>
        <div className={styles.account_phone}>
          {formatMdn(user.phone_number)}
        </div>
        <div className={styles.cycle}>
          <img src={cycle_icon} alt="" />
          {daysLeft} {pluralize('day', daysLeft)} left in cycle
        </div>
        <ProgressMeter percent={percent(31 - daysLeft, 31)} progress="#5f90ff" remaining="#e5e5e5" full="#5f90ff" />
      </Box>
      <SubscriptionList />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: getUser(state),
  daysLeft: daysLeftInCycle(),
});

export default connect(
  mapStateToProps
)(Home);
