import React, { Component } from 'react';
import BottomButton from 'forms/BottomButton/link';
import DeviceInfo from 'devices/DeviceInfo';
import Box from 'common/Box';
import PlanInfo from 'insurance/insurancePlans/PlanInfo';
import styles from './InsuranceInfo.module.css';

class InsuranceInfo extends Component {
  componentDidMount() {
    this.fetchContract();
    this.fetchInsuredDevice();
  }

  componentDidUpdate(oldProps) {
    const { subId, contractId } = this.props;
    if (subId !== oldProps.subId) {
      this.fetchContract();
    } 
    if (contractId !== oldProps.contractId) {
      this.fetchInsuredDevice();
    }
  }

  fetchContract = () => {
    const { subId, fetchFilteredInsuranceContracts, filter } = this.props;
    subId && fetchFilteredInsuranceContracts({ [filter]: subId });
  }
  fetchInsuredDevice = () => {
    const { contract, fetchFilteredInsuredDevices } = this.props;
    contract && fetchFilteredInsuredDevices({ contract: contract.id });
  }

  render() {
    const { insuredDevice, insurancePlan } = this.props;
    if (!insuredDevice || !insurancePlan) { return null; }

    return (
      <div>
        <DeviceInfo deviceId={insuredDevice.device_specs} />

        <Box className={styles.makeClaim}>
          <PlanInfo insurancePlan={insurancePlan} />
          <BottomButton href="https://www.brightstarprotect.com/ithappens" target="_blank">Make a Claim</BottomButton>
        </Box>
      </div>
    )
  }
}

export default InsuranceInfo;
