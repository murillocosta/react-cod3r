import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducers';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

export default rootReducer;
