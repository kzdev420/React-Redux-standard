import React, { Component } from 'react';

import Box from 'common/Box';
import Select from 'forms/Select/react';
import BottomButton from 'forms/BottomButton';
import styles from './DeviceSelector.module.css';
import add_blue_circle from './add_blue_circle.svg';

class DeviceSelector extends Component {
  componentDidUpdate(oldProps, oldState) {
    if (this.props.devices !== oldProps.devices) {
      this.setDeviceOptions();
    }
    if (
      this.state.brand !== oldState.brand ||
      this.state.storage !== oldState.storage
    ) {
      this.fetchDevices();
    }
  }

  setDeviceOptions = () => {
    this.setState({
      devices: this.props.devices.map(dev => ({
        value: dev.sku,
        label: `${dev.brand} ${dev.name} - ${dev.color}/${dev.capacity}`,
      }))
    });
  }

  state = {
    brand: null,
    storage: null,
    device: null,
  }

  brandChange = (brand) => {
    this.setState({ brand })
  }

  storageChange = (storage) => {
    this.setState({ storage });
  }

  devicesChange = (device) => {
    this.setState({ device });
  }

  fetchDevices = () => {
    const { brand, storage } = this.state;
    if (!(brand && storage)) { return; }
    this.props.fetchFilteredDevices(brand.value, storage.value);
  }

  next = () => {
    this.props.nextRoute(this.props.subId, this.state.device.value);
  }

  render() {
    return (
      <div className={styles.DeviceSelector}>
        <Box className={styles.BoxHeader}>
          <img src={add_blue_circle} alt="" />
          Select the device you want to protect
        </Box>
        <Box className={styles.Box}>
          <Select className={styles.Select} label="Brand" onChange={this.brandChange} options={brands} />
          <Select className={styles.Select} label="Storage" onChange={this.storageChange} options={storage} />
          <Select className={styles.Select} label="Available Devices" onChange={this.devicesChange} options={this.state.devices} />
          <BottomButton onClick={this.next} disabled={!this.state.device}>
            Continue to select your plan
          </BottomButton>
        </Box>
      </div>
    )
  }
}

export default DeviceSelector;

const brands = [
  { value: 'Apple', label: 'Apple' },
  { value: 'Samsung', label: 'Samsung' },
  { value: 'Google', label: 'Google' },
  { value: 'Motorola', label: 'Motorola' },
  { value: 'HTC', label: 'HTC' },
]
const storage = [
  { value: '8GB', label: '8GB' },
  { value: '16GB', label: '16GB' },
  { value: '32GB', label: '32GB' },
  { value: '64GB', label: '64GB' },
  { value: '128GB', label: '128GB' },
  { value: '256GB', label: '256GB' },
  { value: '512GB', label: '512GB' },
]


