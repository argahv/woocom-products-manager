import axios from 'axios';
import Qs from 'query-string';

export const BASE_URL = 'http://192.168.0.106:5000/';

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  paramsSerializer: (params) => {
    return Qs.stringify(params);
  },
});

export const productListGet = (query) => api.get('api/v1/listProducts', query);

export const productCategoriesGet = (query) =>
  api.get('api/v1/product-categories-list', query);

export const productAdd = (data) => api.post('api/v1/product-create', data);

// export const loginPost = (data) => api.post("api/login", data);

// export const logoutGet = () => api.get("api/logout");
// export const registerPost = (data) => api.post("api/user/register", data);

// export const forgotPasswordPost = (data) =>
//   api.post("api/v1/app/forgot-password", data);
// export const changePasswordPost = (data) =>
//   api.post("api/v1/app/change-password", data);

// // ///////// User related API ////////////////
// export const userDetailGet = () => api.get(`api/current_user`);
