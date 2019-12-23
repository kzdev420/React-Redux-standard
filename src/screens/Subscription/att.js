import React from 'react';
import SubscriptionSwitcher from 'subscriptions/SubscriptionSwitcher';
import Box from 'common/Box';
import Link from 'common/Link';
import * as routes from 'app/routes';
import add_green_circle from 'common/img/add_green_circle.svg';
import styles from './Subscription.module.css';

export const SubscriptionScreen = ({ subId }) => {
  return (
    <div className="Subscription">
      <SubscriptionSwitcher attSubId={subId} attRoute={routes.attSubscription} sprintRoute={routes.sprintSubscription} />
      <div className={styles.linkList}>
        <Link className={styles.subscriptionLink} to={routes.attInsurance(subId)}>
          <Box>
            <img src={add_green_circle} />
            Insurance
          </Box>
        </Link>
      </div>
    </div>
  )
}

export default SubscriptionScreen;
