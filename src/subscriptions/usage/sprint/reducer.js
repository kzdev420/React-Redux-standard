import { resourceReducer } from 'redux-resource';

export default resourceReducer('usage');

export const getCurrentUsage = (state, subId) => state && state.resources && state.resources[subId];
