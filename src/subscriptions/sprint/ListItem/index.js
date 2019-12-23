import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItem from 'subscriptions/ListItem';
import * as routes from 'app/routes';

class SprintListItemComponent extends Component {

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(oldProps) {
    if (this.props.subscription.id !== oldProps.subscription.id) {
      this.fetchData();
    }
  }

  fetchData() {
  }

  render() {
    return <ListItem {...this.props} />
  }
}

const mapStateToProps = (state, { subscription }) => ({
});

const mapDispatchToProps = {
  subRoute: routes.sprintSubscription,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SprintListItemComponent);
