import { call, put } from 'redux-saga/effects';
import { getAllGenerator, findGenerator } from '.';
import * as actions from './actions';

describe('getAllGenerator', () => {
  describe('success', () => {
    const resp = {
      data: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ]
    }
    const id = 123;
    const resourceType = 'test'
    const getAllEndpoint = jest.fn((resp) => Promise.resolve(resp));
    const transformResponse = (resp) => resp.data;
    const getAll = getAllGenerator({
      resourceType,
      endpoint: getAllEndpoint,
      endpointArgs: (payload) => [ payload.id ],
      transformResponse,
    });
    const gen = getAll({
      type: 'test/GET_ALL',
      payload: { id }
    });
    
    it('starts the resource request', () => {
      expect(
        gen.next().value
      ).toEqual(
        put(actions.getAllPending(resourceType))
      );
    });

    it('sends the request', () => {
      expect(
        gen.next().value
      ).toEqual(
        call(getAllEndpoint, id)
      );
    });

    it('completes the resource request', () => {
      expect(
        gen.next(resp).value
      ).toEqual(
        put(actions.getAllSucceeded(resourceType, resp, transformResponse))
      );
    });

    it('should be done', () => {
      expect(
        gen.next().done
      ).toBe(true);
    });

  });

  describe('getAll failure', () => {
    const id = 123;
    const resourceType = 'test'
    const err = { message: 'BAAAD' };
    const getAllEndpoint = jest.fn((err) => Promise.reject(err));
    const getAll = getAllGenerator({
      resourceType,
      endpoint: getAllEndpoint,
      endpointArgs: (payload) => [ payload.id ]
    });
    const gen = getAll({
      type: 'test/GET_ALL',
      payload: { id }
    });


    it('should dispatch a resource request failed action', () => {
      // Pending
      gen.next();
      // Request
      gen.next();
      // Failure
      expect(
        gen.throw(err).value
      ).toEqual(
        put(actions.getAllFailed(resourceType, err))
      );
    });

  });
});

describe('findGenerator', () => {
  describe('success', () => {
    const id = 123;
    const resp = {
      data: { id },
    }
    const resourceType = 'test'
    const findEndpoint = jest.fn((resp) => Promise.resolve(resp));
    const find = findGenerator({
      resourceType,
      endpoint: findEndpoint,
    });
    const gen = find({
      type: 'test/FIND',
      payload: { id }
    });
    
    it('starts the resource request', () => {
      expect(
        gen.next().value
      ).toEqual(
        put(actions.findPending(resourceType))
      );
    });

    it('sends the request', () => {
      expect(
        gen.next().value
      ).toEqual(
        call(findEndpoint, id)
      );
    });

    it('completes the resource request', () => {
      expect(
        gen.next(resp).value
      ).toEqual(
        put(actions.findSucceeded(resourceType, resp))
      );
    });

    it('should be done', () => {
      expect(
        gen.next().done
      ).toBe(true);
    });

  });

  describe('find failure', () => {
    const id = 123;
    const resourceType = 'test'
    const err = { message: 'BAAAD' };
    const findEndpoint = jest.fn((err) => Promise.reject(err));
    const find = findGenerator({
      resourceType,
      endpoint: findEndpoint,
    });
    const gen = find({
      type: 'test/FIND',
      payload: { id }
    });


    it('should dispatch a resource request failed action', () => {
      // Pending
      gen.next();
      // Request
      gen.next();
      // Failure
      expect(
        gen.throw(err).value
      ).toEqual(
        put(actions.findFailed(resourceType, err))
      );
    });

  });
});
