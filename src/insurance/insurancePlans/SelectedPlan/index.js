import React from 'react';
import insurancePlanDecorator from '../decorator';
import styles from './SelectedPlan.module.css';
import Box from 'common/Box';
import insuranceBadge from './insuranceBadge.svg';

const SelectedPlan = ({ insurancePlan: plan }) => {
  if (!plan) { return null; }

  return (
    <Box>
      <div className={styles.wrap}>
        <img src={insuranceBadge} alt="" />
        <div className={styles.plan}>
          <h4 className={styles.header}>
            You Selected
          </h4>
          <div className={styles.name}>
            {plan.name}
          </div>
          <div className={styles.info}>
            {planInfo(plan.sku)}
          </div>
        </div>
      </div>
    </Box>
  )
}
const planInfo = (sku) => {
  switch (sku) {
    case 'WEW':
      return 'Protects your device from malfunction (after original manufacturer’s warranty expires)';
    case 'WDP3P':
      return 'Protects your device against accidental damage, loss, and theft';
    case 'WDPP5P':
      return 'Protects your device against accidental damage, loss, theft and malfunction';
    default:
      return '';
  }
}

export default insurancePlanDecorator(SelectedPlan);
