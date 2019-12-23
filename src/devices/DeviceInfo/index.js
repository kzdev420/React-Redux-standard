import { connect } from 'react-redux';
import DeviceInfo from './DeviceInfo';
import { getDevice } from 'reducers';
import { find as findDevice } from '../actions';

const mapStateToProps = (state, { deviceId }) => ({
  device: getDevice(state, deviceId),
});

const mapDispatchToProps = {
  findDevice,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceInfo);
