import { connect } from 'react-redux';
import SwitcherList from './SwitcherList';
import { getAllAttSubscriptions } from 'reducers';
import { fetchAll as fetchSubs } from 'subscriptions/att/actions';

const mapStateToProps = (state) => ({
  subs: getAllAttSubscriptions(state)
});

const mapDispatchToProps = {
  fetchSubs
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwitcherList);

