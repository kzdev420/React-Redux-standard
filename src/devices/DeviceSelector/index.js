import { connect } from 'react-redux';
import DeviceSelector from './DeviceSelector';

import { getFilteredDevices } from 'reducers';
import { fetchFiltered as fetchFilteredDevices } from 'devices/actions';

const mapStateToProps = (state) => ({
  devices: getFilteredDevices(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchFilteredDevices: (brand, storage) => dispatch(fetchFilteredDevices(brand, storage)),
  nextRoute: (subId, sku) => dispatch(ownProps.next(subId, sku))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceSelector);
