import { resourceReducer, getResources } from 'redux-resource';

export default resourceReducer('insurancePlans');


const isForValue = (plan, value) => {
  const min = parseFloat(plan.min_value);
  const max = parseFloat(plan.max_value);
  const val = parseFloat(value);

  return (val >= min) && (val <= max);
}
export const getValue = (state, value) => getResources(state, plan => isForValue(plan, value));
export const get = (state, id) => state.resources[id];
