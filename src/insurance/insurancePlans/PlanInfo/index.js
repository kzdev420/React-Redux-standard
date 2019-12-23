import React from 'react';
import styles from './index.module.css';

const PlanInfo = ({ insurancePlan: plan }) => {
  if (!plan) { return null; }

  return (
    <div className={styles.wrap}>
      <h4 className={styles.header}>
        Insurance Details
      </h4>
      <div className={styles.info}>
        {plan.name}
      </div>
      <div className={styles.info}>
        Repair Deductible: ${plan.repair_deductible}
      </div>
      <div className={styles.info}>
        Replacement Deductible: ${plan.replacement_deductible}
      </div>
    </div>
  )
}

export default PlanInfo;
