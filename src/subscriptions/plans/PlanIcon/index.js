import React from 'react';
import unlimited_plan from './unlimited_plan.svg';
import flip_phone_plan from './flip_phone_plan.svg';
import styles from './index.module.css';

const PlanIcon = ({ plan }) => (
  <div className={styles.PlanIcon}>
    {plan.plan_type === 'PerGB' &&
      <span className={styles.perGB}>
        {plan.name}
      </span>
    }
    {plan.plan_type === 'Unlimited' &&
      <img src={unlimited_plan} className={styles.unlimitedPlan} alt="Unlimited" />
    }
    {plan.plan_type === 'Fixed' &&
      <img src={flip_phone_plan} className={styles.fixedPlan} alt="Flip phone" />
    }
  </div>
);

export default PlanIcon;
