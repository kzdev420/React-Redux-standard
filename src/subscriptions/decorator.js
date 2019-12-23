import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAttSubscription } from 'reducers';
import { getSprintSubscription } from 'reducers';

import { find as findAttSubscription } from './att/actions';
import { find as findSprintSubscription } from './sprint/actions';

const subscriptionDecorator = (DecoratedComponent) => {

  class SubscriptionDecorator extends Component {
    componentDidMount() {
      this.fetchSub();
    }

    componentDidUpdate(oldProps) {
      if (this.props.subId !== oldProps.subId) {
        this.fetchSub();
      }
    }

    fetchSub() {
      const { findAttSubscription, findSprintSubscription, attSubId, sprintSubId } = this.props;
      attSubId && findAttSubscription(attSubId);
      sprintSubId && findSprintSubscription(sprintSubId);
    }

    render() {
      const { children, findAttSubscription, findSprintSubscription, ...props } = this.props;

      return React.createElement(
        DecoratedComponent,
        props,
        children
      );
    }
  }

  const mapStateToProps = (state, { attSubId, sprintSubId }) => {
    const getSub = attSubId ? getAttSubscription : getSprintSubscription;
    const subId = attSubId || sprintSubId;

    return {
      subId,
      subscription: getSub(state, subId),
    }
  }

  const mapDispatchToProps = {
    findAttSubscription,
    findSprintSubscription,
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(SubscriptionDecorator);
}

export default subscriptionDecorator;
