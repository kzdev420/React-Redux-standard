import { resourceReducer, getResources } from 'redux-resource';

export default resourceReducer('insuranceContracts');

export const getFiltered = (state, { subscription = null, attSubscription = null, userId }) => getResources(state, contract => {
  if (subscription) {
    subscription = parseInt(subscription);
  }
  if (attSubscription) {
    attSubscription = parseInt(attSubscription);
  }
  return (contract.subscription === subscription) && (contract.att_subscription === attSubscription) && (!userId || contract.user_profile === userId);
});
export const get = (state, id) => state.resources[id];

