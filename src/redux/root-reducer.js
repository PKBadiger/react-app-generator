import { combineReducers } from 'redux';
import countReducer from './reducers/test-reducer';

const rootReducer = combineReducers({
  count: countReducer,
});

export default rootReducer;
