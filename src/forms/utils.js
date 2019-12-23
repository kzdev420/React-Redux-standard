import { SubmissionError } from 'redux-form';

export const createSubmissionError = (response) => {
  const { detail, ...fieldErrors } = response.data;
  return new SubmissionError({
    ...fieldErrors,
    _error: detail,
  });
}
