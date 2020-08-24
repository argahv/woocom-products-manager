import {createSelector} from 'reselect';
import {INITIAL_STATE} from './reducer';

export const reduxKey = 'productAdd';

const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading,
);

export const selectProductCategories = createSelector(
  [selectRoot],
  (state) => state.productCategories,
);

export const selectData = createSelector([selectRoot], (state) => state.data);
