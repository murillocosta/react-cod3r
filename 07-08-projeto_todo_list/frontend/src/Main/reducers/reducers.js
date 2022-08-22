import { combineReducers } from 'redux';

import TodoReducer from '../../Todo/TodoReducer/TodoReducer';

const rootReducer = combineReducers({
  todo: TodoReducer,
});

export default rootReducer;
