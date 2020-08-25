import * as types from './types';
import {productCategoriesGet, productAdd} from '../../../api';
import Toast from 'react-native-tiny-toast';

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

export const addProductRequest = (payload) => ({
  type: types.ADD_PRODUCT_REQUEST,
  payload,
});
export const addProductSuccess = (payload) => ({
  type: types.ADD_PRODUCT_SUCCESS,
  payload,
});
export const addProductFailure = (payload) => ({
  type: types.ADD_PRODUCT_FAILURE,
  payload,
});

export const addProduct = (data) => async (dispatch) => {
  dispatch(addProductRequest(data));
  try {
    const response = await productAdd(data);
    dispatch(addProductSuccess(response.data));
    const toast = Toast.showSuccess('Product Added Successfully');
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        Toast.hide(toast);
      }, 2000);
    });
    return response.data;
  } catch (error) {
    let errorMessage = '';
    if (error.response) {
      errorMessage = error.response.data.error;
      dispatch(addProductFailure(error.response.data));
    } else {
      errorMessage = error.message;
      dispatch(addProductFailure(error.message));
    }
    const toast = Toast.show(errorMessage, {
      position: 0,
    });
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        Toast.hide(toast);
      }, 2000);
      throw error;
    });
  }
};
