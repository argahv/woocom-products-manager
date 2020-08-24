import * as types from './types';
import {productCategoriesGet} from '../../../api';

export const getProductCategoriesRequest = (payload) => ({
  type: types.GET_PRODUCT_CATEGORIES_REQUEST,
  payload,
});
export const getProductCategoriesSuccess = (payload) => ({
  type: types.GET_PRODUCT_CATEGORIES_SUCCESS,
  payload,
});
export const getProductCategoriesFailure = (payload) => ({
  type: types.GET_PRODUCT_CATEGORIES_FAILURE,
  payload,
});

export const getProductCategories = (payload) => async (dispatch) => {
  dispatch(getProductCategoriesRequest(payload));
  try {
    const response = await productCategoriesGet();
    dispatch(getProductCategoriesSuccess(response.data));
  } catch (error) {
    if (error.response) {
      dispatch(getProductCategoriesFailure(error.response.data));
    } else {
      dispatch(getProductCategoriesFailure(error.message));
    }
    throw error;
  }
};
