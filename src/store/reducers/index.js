import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import profile from './profile';

const appReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  profile,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};


export default rootReducer;
