import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cn from 'classnames';
import subscriptionDecorator from 'subscriptions/decorator';
import SprintSwitcherList from './SwitcherList/sprint';
import AttSwitcherList from './SwitcherList/att';
import { getUser } from 'reducers';
import styles from './index.module.css';
import toggle from './toggle.svg';

class SubscriptionSwitcher extends Component { 
  state = {
    open: false
  }
  
  toggleDropdown = () => {
    this.state.open ? this.setState({ open: false }) : this.setState({ open: true });
  }

  render() {
    const { subId, userId, attRoute, sprintRoute, subscription } = this.props

    if (!userId || !subscription) { return null; }

    return (
      <div className={styles.SubscriptionSwitcher}>
        <div className={styles.active} onClick={this.toggleDropdown}>
          <div className={styles.avi}>
            {subscription.first_name[0]}
            {subscription.last_name[0]}
          </div>
          {subscription.first_name} {subscription.last_name}
          <div className={cn(styles.toggle, this.state.open && styles.open)}>
            <img src={toggle} />
          </div>
        </div>
        {this.state.open &&
          <div className={styles.subList} onClick={this.toggleDropdown}>
            <SprintSwitcherList sprintSubId={subId} userId={userId} route={sprintRoute} active={subscription} />
            <AttSwitcherList userId={userId} route={attRoute} active={subscription} />
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userId: getUser(state) && getUser(state).id
});

export default compose(
  subscriptionDecorator,
  connect(
    mapStateToProps,
    null
  )
)(SubscriptionSwitcher);
