import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducers';
import tabReducer from './tabReducer';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
});

export default rootReducer;
