import { compose } from 'redux';
import { connect } from 'react-redux';
import insurancePlanDecorator from 'insurance/insurancePlans/decorator';
import subscriptionDecorator from 'subscriptions/decorator';
import { getFilteredInsuranceContracts, getFilteredInsuredDevices } from 'reducers';
import { fetchFiltered as fetchFilteredInsuranceContracts } from 'insurance/insuranceContracts/actions';
import { fetchFiltered as fetchFilteredInsuredDevices } from 'insurance/insuredDevices/actions';

import InsuranceInfo from './InsuranceInfo';

const mapStateToProps = (state, ownProps) => {
  const subId = ownProps.subId && parseInt(ownProps.subId);
  const filter = 'attSubscription';
  const contracts = getFilteredInsuranceContracts(state, { [filter]: subId });
  const contract = contracts && contracts.length > 0 && contracts[0];
  const insuredDevices = contract && getFilteredInsuredDevices(state, contract.id);
  const insuredDevice = insuredDevices && insuredDevices.length > 0 && insuredDevices[0];
  const insurancePlanId = insuredDevice && insuredDevice.plan;
  return {
    insurancePlanId,
    filter,
    contract,
    contractId: contract && contract.id,
    insuredDevice,
  }
};

const mapDispatchToProps = {
  fetchFilteredInsuranceContracts,
  fetchFilteredInsuredDevices,
}

// this order is really important
export default compose(
  subscriptionDecorator,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  insurancePlanDecorator
)(InsuranceInfo);
