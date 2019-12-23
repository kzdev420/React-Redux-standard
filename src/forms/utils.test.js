import { SubmissionError } from 'redux-form';
import { createSubmissionError } from './utils';

describe('createSubmissionError', () => {
  const errResp = {
    data: {
      detail: 'Bad thing',
      field1: 'Oopsie',
      field2: 'Doopsie',
    }
  }

  const errAttr = {
    field1: 'Oopsie',
    field2: 'Doopsie',
    _error: 'Bad thing',
  }

  it('translates an error response into a SubmissionError', () => {
    expect(
      createSubmissionError(errResp).errors
    ).toEqual(
      new SubmissionError(errAttr).errors
    );
  })
});
