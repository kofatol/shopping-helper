import itemsReducer from './items-reducer';
import formReducer from './form-reducer';
import { combineReducers } from 'redux';

const reducers = {
  items: itemsReducer,
  form: formReducer,
};

const reducer = combineReducers(reducers);

export default reducer;
