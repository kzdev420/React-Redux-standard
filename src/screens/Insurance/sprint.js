import React from 'react';
import * as routes from 'app/routes';
import Back from 'common/Back';
import styles from './Insurance.module.css';
import SubscriptionSwitcher from 'subscriptions/SubscriptionSwitcher';

import InsuranceInfo from 'insurance/InsuranceInfo/sprint';

const Insurance = ({ subId, sku, insPlanId, ConfirmInsurance, insurancePlanRoute }) => (
  <div>
    <SubscriptionSwitcher sprintSubId={subId} sprintRoute={routes.sprintSubscription} attRoute={routes.attSubscription} />
    <div className={styles.Back}>
      <Back to={routes.sprintSubscription(subId)} />
    </div>
    <h1>
      Your Device Protection Details
    </h1>
    <InsuranceInfo sprintSubId={subId} />
  </div>
)

export default Insurance;

