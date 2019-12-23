import React from 'react';
import cn from 'classnames';
import styles from './index.module.css';

import PlanIcon from 'subscriptions/plans/PlanIcon';
import { formatMdn } from 'helpers/formatters';


export const ListItem = ({ subscription, subRoute, onClick }) => (
  <div className={cn(styles.ListItem)} onClick={() => (onClick && onClick(subscription.id)) || subRoute(subscription.id)}>
    <PlanIcon plan={subscription.plan} />
    {subscription.first_name} {subscription.last_name}
    <span className={styles.mdn}>
      {formatMdn(subscription.mdn)}
    </span>
  </div>
)

export default ListItem;
