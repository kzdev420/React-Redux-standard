export const getPagination = (state, requestKey) => {
  if (!state || !state.requests || !state.requests[requestKey]) {
    return {
      next: null, 
      previous: null 
    };
  }

  const { next, previous } = state.requests[requestKey];
  return {
    next,
    previous
  };
}

