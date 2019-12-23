import { resourceReducer, getResources } from 'redux-resource';

export default resourceReducer('devices');

export const getFiltered = (state) => getResources(state, 'filtered');
export const get = (state, id) => state.resources[id];
