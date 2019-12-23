import React, { Component } from 'react';
import Box from 'common/Box';
import styles from './DeviceInfo.module.css';

class DeviceInfo extends Component {
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(oldProps) {
    if (this.props.deviceId !== oldProps.deviceId) {
      this.fetchData();
    }
  }
  fetchData = () => {
    const { deviceId, findDevice } = this.props;
    deviceId && findDevice(deviceId);
  }

  render() {
    const { device } = this.props;
    if (!device) { return null; }

    return (
      <Box>
        <div className={styles.wrap}>
          <div className={styles.label}>
            Device Details
          </div>
          <div className={styles.device}>
            <div className={styles.name}>
              {device.brand} {device.name}
            </div>
            <div className={styles.info}>
              Storage: {device.capacity}
            </div>
            <div className={styles.info}>
              Color: {device.color}
            </div>
            <div className={styles.info}>
              Value: ${device.value}
            </div>
          </div>
        </div>
      </Box>
    )
  }
}

export default DeviceInfo;
