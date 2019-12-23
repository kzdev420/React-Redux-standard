import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAll as fetchAllSprint } from '../sprint/actions';
import { fetchAll as fetchAllAtt } from '../att/actions';
import { fetchFiltered as fetchInsuranceContracts } from 'insurance/insuranceContracts/actions';
import { getAllSprintSubscriptions, getAllAttSubscriptions, getUser, getFilteredInsuranceContracts } from 'reducers';
import SubscriptionList from './SubscriptionList';
import * as routes from 'app/routes';

class SubscriptionListComponent extends Component {

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(oldProps) {
    if (this.props.userId !== oldProps.userId) {
      this.fetchData();
    }
  }

  fetchData() {
    const { fetchAllSprint, fetchAllAtt, fetchInsuranceContracts, userId } = this.props;
    if (!userId) { return; }
    fetchAllSprint(userId);
    fetchAllAtt(userId);
    fetchInsuranceContracts(userId);
  }

  render() {
    return <SubscriptionList {...this.props} />
  }
}

const mapStateToProps = (state) => {
  const sprintSubs = getAllSprintSubscriptions(state);
  const attSubs = getAllAttSubscriptions(state);

  const filteredSprintSubs = sprintSubs && sprintSubs.filter(sub => {
    const contracts = getFilteredInsuranceContracts(state, { subscription: sub.id });
    return (sub.sprint_status === 'active') && (!contracts || contracts.length === 0);
  });
  const filteredAttSubs = attSubs && attSubs.filter(sub => {
    const contracts = getFilteredInsuranceContracts(state, { attSubscription: sub.id });
    return (sub.att_status == 'active') && (!contracts || contracts.length === 0);
  });
  return {
    userId: getUser(state) && getUser(state).id,
    sprintSubs: filteredSprintSubs,
    attSubs: filteredAttSubs,
  }
};

const mapDispatchToProps = {
  fetchAllSprint,
  fetchAllAtt,
  fetchInsuranceContracts,
  onSprintClick: routes.sprintInsuranceDevice,
  onAttClick: routes.attInsuranceDevice,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscriptionListComponent);
