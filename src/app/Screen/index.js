import React from 'react';
import { connect } from 'react-redux';

import Home from 'screens/Home';
import SprintSubscriptionScreen from 'screens/Subscription/sprint';
import AttSubscriptionScreen from 'screens/Subscription/att';
import SprintInsuranceConfirmScreen from 'screens/InsuranceConfirm/sprint';
import SprintInsurancePlanScreen from 'screens/InsurancePlan/sprint';
import SprintInsuranceScreen from 'screens/Insurance/sprint';
import AttInsuranceConfirmScreen from 'screens/InsuranceConfirm/att';
import AttInsurancePlanScreen from 'screens/InsurancePlan/att';
import AttInsuranceScreen from 'screens/Insurance/att';

export const Screen = ({ id, params }) => {
  switch (id) {
    case 'HOME':
      return <Home />;
    case 'SPRINT_SUBSCRIPTION':
      return <SprintSubscriptionScreen subId={params.subId} />;
    case 'ATT_SUBSCRIPTION':
      return <AttSubscriptionScreen subId={params.subId} />;
    case 'SPRINT_INSURANCE_CONFIRM':
      return <SprintInsuranceConfirmScreen subId={params.subId} sku={params.sku} insPlanId={params.insPlanId} />;
    case 'SPRINT_INSURANCE_PLAN':
      return <SprintInsurancePlanScreen subId={params.subId} sku={params.sku} />;
    case 'SPRINT_INSURANCE':
      return <SprintInsuranceScreen subId={params.subId} />;
    case 'ATT_INSURANCE_CONFIRM':
      return <AttInsuranceConfirmScreen subId={params.subId} sku={params.sku} insPlanId={params.insPlanId} />;
    case 'ATT_INSURANCE_PLAN':
      return <AttInsurancePlanScreen subId={params.subId} sku={params.sku} />;
    case 'ATT_INSURANCE':
      return <AttInsuranceScreen subId={params.subId} />;
    default:
      return null;
  }
};

const mapStateToProps = (state) => ({
  ...state.routing
});

export default connect(
  mapStateToProps
)(Screen);
