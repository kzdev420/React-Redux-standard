import { actionTypes as resourceActions } from 'redux-resource';

const getAllDefaults = {
  requestKey: 'getAll',
}
export const getAllPending = (resourceType, actionProps) => ({
  ...getAllDefaults,
  ...actionProps,
  resourceType,
  type: resourceActions.READ_RESOURCES_PENDING,
});
export const getAllSucceeded = (resourceType, response, transformResp = (resp) => { return resp.data.results }, actionProps) => ({
  ...getAllDefaults,
  ...actionProps,
  resourceType,
  type: resourceActions.READ_RESOURCES_SUCCEEDED,
  resources: transformResp(response),
});
export const getAllFailed = (resourceType, err, actionProps) => ({
  ...getAllDefaults,
  ...actionProps,
  resourceType,
  type: resourceActions.READ_RESOURCES_FAILED,
});

const findDefaults = {
  requestKey: 'find',
}
export const findPending = (resourceType, actionProps) => ({
  ...findDefaults,
  ...actionProps,
  resourceType,
  type: resourceActions.READ_RESOURCES_PENDING,
});
export const findSucceeded = (resourceType, response, transformResp = (resp) => { return [resp.data] }, actionProps) => ({
  ...findDefaults,
  ...actionProps,
  resourceType,
  type: resourceActions.READ_RESOURCES_SUCCEEDED,
  resources: transformResp(response),
});
export const findFailed = (resourceType, err, actionProps) => ({
  ...findDefaults,
  ...actionProps,
  resourceType,
  type: resourceActions.READ_RESOURCES_FAILED,
});

const updateDefaults = {
  requestKey: 'update',
}
export const updatePending = (resourceType, actionProps) => ({
  ...updateDefaults,
  ...actionProps,
  resourceType,
  type: resourceActions.UPDATE_RESOURCES_PENDING,
});
export const updateSucceeded = (resourceType, response, transformResp = (resp) => { return [resp.data] }, actionProps) => ({
  ...updateDefaults,
  ...actionProps,
  resourceType,
  type: resourceActions.UPDATE_RESOURCES_SUCCEEDED,
  resources: transformResp(response),
});
export const updateFailed = (resourceType, err, actionProps) => ({
  ...updateDefaults,
  ...actionProps,
  resourceType,
  type: resourceActions.UPDATE_RESOURCES_FAILED,
});


export const getHistoryPending = (resourceType, [_, page]) => ({
  requestKey: `getHistory${page}`,
  list: `userHistory${page}`,
  resourceType,
  type: resourceActions.READ_RESOURCES_PENDING,
});

export const getHistorySucceeded = (resourceType, response, [_, page], transformResp = (resp) => resp.data.results) => {
  const { next, previous } = response.data;
  return {
    requestKey: `getHistory${page}`,
    list: `userHistory${page}`,
    resourceType,
    type: resourceActions.READ_RESOURCES_SUCCEEDED,
    resources: transformResp(response),
    requestProperties: {
      next,
      previous
    }
  };
};

export const getHistoryFailed = (resourceType, [_, page]) => ({
  requestKey: `getHistory${page}`,
  list: `userHistory${page}`,
  resourceType,
  type: resourceActions.READ_RESOURCES_FAILED,
});
