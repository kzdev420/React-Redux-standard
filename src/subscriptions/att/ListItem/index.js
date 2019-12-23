import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItem from 'subscriptions/ListItem';
import * as routes from 'app/routes';

class AttListItemComponent extends Component {

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
  subRoute: routes.attSubscription,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttListItemComponent);
