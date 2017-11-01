import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import tasks from './tasks';
import login from './login';

const rootReducer = combineReducers({
  form: formReducer,
  tasks: tasks,
  login: login
});

export default rootReducer;
