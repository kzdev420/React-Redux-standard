import { connect } from 'react-redux';
import SwitcherList from './SwitcherList';
import { getAllSprintSubscriptions } from 'reducers';
import { fetchAll as fetchSubs } from 'subscriptions/sprint/actions';

import { compose } from 'redux';
import insurancePlanDecorator from 'insurance/insurancePlans/decorator';
import subscriptionDecorator from 'subscriptions/decorator';
import { getFilteredInsuranceContracts, getFilteredInsuredDevices } from 'reducers';
import { fetchFiltered as fetchFilteredInsuranceContracts } from 'insurance/insuranceContracts/actions';
import { fetchFiltered as fetchFilteredInsuredDevices } from 'insurance/insuredDevices/actions';

const mapStateToProps = (state, ownProps) => {
  const subs = getAllSprintSubscriptions(state)
  const subId = ownProps.active.id && parseInt(ownProps.active.id);
  const filter = 'subscription';
  const contracts = getFilteredInsuranceContracts(state, { [filter]: subId });
  const contract = contracts && contracts.length > 0 && contracts[0];
  const insuredDevices = contract && getFilteredInsuredDevices(state, contract.id);
  const insuredDevice = insuredDevices && insuredDevices.length > 0 && insuredDevices[0];
  const insurancePlanId = insuredDevice && insuredDevice.plan;
  return {
    subs,
    insurancePlanId,
    filter,
    contract,
    contractId: contract && contract.id,
    insuredDevice,
  }
};

const mapDispatchToProps = {
  fetchSubs,
  fetchFilteredInsuranceContracts,
  fetchFilteredInsuredDevices,
}

export default compose(
  subscriptionDecorator,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  insurancePlanDecorator
)(SwitcherList);
