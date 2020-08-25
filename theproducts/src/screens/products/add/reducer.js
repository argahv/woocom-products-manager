import produce from 'immer';
import * as types from './types';

export const INITIAL_STATE = {
  loading: false,
  productCategories: [],
  data: {
    name: '',
    categories: [],
  },
  error: {},
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_PRODUCT_CATEGORIES_REQUEST:
        draft.loading = true;
        break;
      case types.GET_PRODUCT_CATEGORIES_SUCCESS:
        draft.loading = false;
        draft.productCategories = action.payload;
        break;
      case types.ADD_PRODUCT_REQUEST:
        draft.loading = true;
        draft.error = INITIAL_STATE.error;
        break;
      case types.ADD_PRODUCT_SUCCESS:
        draft.loading = false;
        draft.error = INITIAL_STATE.error;
        break;
      case types.ADD_PRODUCT_FAILURE:
        draft.error = action.payload;
        break;
    }
  });

export default reducer;
