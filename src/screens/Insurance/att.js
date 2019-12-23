import React from 'react';
import * as routes from 'app/routes';
import Back from 'common/Back';
import styles from './Insurance.module.css';
import SubscriptionSwitcher from 'subscriptions/SubscriptionSwitcher';

import InsuranceInfo from 'insurance/InsuranceInfo/att';

const Insurance = ({ subId, sku, insPlanId, ConfirmInsurance }) => (
  <div>
    <SubscriptionSwitcher attSubId={subId} sprintRoute={routes.sprintInsurance} attRoute={routes.attInsurance} />
    <div className={styles.Back}>
      <Back to={routes.attSubscription(subId)} />
    </div>
    <h1>
      Your Device Protection Details
    </h1>
    <InsuranceInfo attSubId={subId} />
  </div>
)

export default Insurance;

