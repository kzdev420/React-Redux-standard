import * as actions from './actions';
import notifications, { getInfo, getError } from './reducer';

const state = {
  info: {
    test: 'This is a test'
  },
  error: {
    bad: 'This is an error'
  }
}

describe('notifications reducer', () => {
  describe('INFO action', () => {
    it('adds the message', () => {
      expect(
        notifications(state, actions.info('general', 'Success'))
      ).toEqual({
        info: {
          test: 'This is a test',
          general: 'Success'
        },
        error: {
          bad: 'This is an error'
        }
      });
    });
  });

  describe('ERROR action', () => {
    it('adds the message', () => {
      expect(
        notifications(state, actions.error('terrible', 'Failure'))
      ).toEqual({
        info: {
          test: 'This is a test'
        },
        error: {
          bad: 'This is an error',
          terrible: 'Failure'
        }
      });
    });
  });

  describe('CLEAR_INFO action', () => {
    it('deletes the message', () => {
      expect(
        notifications(state, actions.clearInfo('test'))
      ).toEqual({
        info: {},
        error: {
          bad: 'This is an error'
        }
      })
    });
  });

  describe('CLEAR_ERROR action', () => {
    it('deletes the message', () => {
      expect(
        notifications(state, actions.clearError('bad'))
      ).toEqual({
        info: {
          test: 'This is a test'
        },
        error: {}
      });
    })
  });
});

describe('getInfo selector', () => {
  it('gets the info message', () => {
    expect(
      getInfo(state, 'test')
    ).toEqual('This is a test');
  });

  it('returns undefined when the key does not exist', () => {
    expect(
      getInfo(state, 'fake')
    ).toBeUndefined();
  });
});

describe('getError selector', () => {
  it('gets the error message', () => {
    expect(
      getError(state, 'bad')
    ).toEqual('This is an error');
  });

  it('returns undefined when the key does not exist', () => {
    expect(
      getError(state, 'fake')
    ).toBeUndefined();
  });
});
