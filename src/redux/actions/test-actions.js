import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../actionTypes/test';

export const incrementCount = (payload) => ({
  INCREMENT_COUNTER,
  payload,
});

export const decrementCount = (payload) => ({
  DECREMENT_COUNTER,
  payload,
});
