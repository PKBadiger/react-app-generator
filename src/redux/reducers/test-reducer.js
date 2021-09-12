import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actionTypes/test';

const initialState = {
  count: 0,
  name: 'Prashant',
};

const countReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT_COUNTER:
      return { count: state.count + payload };
    case DECREMENT_COUNTER:
      return { count: state.count - payload };
    default:
      return state;
  }
};

export default countReducer;
