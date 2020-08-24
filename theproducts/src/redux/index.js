import {combineReducers} from 'redux';
import global from './global/reducer';
import productAdd from './product-add/reducer';

const rootReducer = combineReducers({
  global,
  productAdd,
});

export default rootReducer;
