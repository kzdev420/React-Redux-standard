import { all, call } from 'redux-saga/effects';
import formActionSaga from 'redux-form-saga';

import { watchAuth } from 'auth/sagas';
import { watchSprintSubscriptions } from 'subscriptions/sprint/sagas';
import { watchAttSubscriptions } from 'subscriptions/att/sagas';
import { watchNotifications } from 'notifications/sagas';
import { watchDevices } from 'devices/sagas';
import { watchInsurancePlans } from 'insurance/insurancePlans/sagas';
import { watchInsuranceContracts } from 'insurance/insuranceContracts/sagas';
import { watchInsuredDevices } from 'insurance/insuredDevices/sagas';
import { watchInsurance } from 'insurance/sagas';

export default function* mainSaga() {
  yield all([
    call(watchAuth),
    call(formActionSaga),
    call(watchSprintSubscriptions),
    call(watchAttSubscriptions),
    call(watchNotifications),
    call(watchDevices),
    call(watchInsurancePlans),
    call(watchInsuranceContracts),
    call(watchInsuredDevices),
    call(watchInsurance),
  ]);
}
