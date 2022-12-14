import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import dashboardReducer from './dashboardReducers';
import tabReducer from './tabReducer';
import billingCycleReducer from './billingCyclesReducer';
import authReducer from '../../auth/authReducer';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
  billingCycle: billingCycleReducer,
  form: formReducer,
  toastr: toastrReducer,
  auth: authReducer,
});

export default rootReducer;
