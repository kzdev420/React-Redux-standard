import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAll as fetchAllSprint } from '../sprint/actions';
import { fetchAll as fetchAllAtt } from '../att/actions';
import { getAllSprintSubscriptions, getAllAttSubscriptions, getUser } from 'reducers';
import SubscriptionList from './SubscriptionList';


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
    const { fetchAllSprint, fetchAllAtt, userId } = this.props;
    fetchAllSprint(userId);
    fetchAllAtt(userId);
  }

  render() {
    return <SubscriptionList {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  userId: getUser(state) && getUser(state).id,
  sprintSubs: getAllSprintSubscriptions(state),
  attSubs: getAllAttSubscriptions(state),
});

const mapDispatchToProps = {
  fetchAllSprint,
  fetchAllAtt,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscriptionListComponent);
