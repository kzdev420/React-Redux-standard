import { resourceReducer, getResources } from 'redux-resource';

export default resourceReducer('insuredDevices');

export const getFiltered = (state, contractId) => getResources(state, device => device.contract === contractId);
export const get = (state, id) => state.resources[id];

