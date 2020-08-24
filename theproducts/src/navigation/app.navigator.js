import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import AuthNavigator from './auth.navigator';
import {HomeNavigator} from './home.navigator';
import {AppRoute} from './app-routes';
// import {selectToken, selectBaseUrl} from '../redux/global/selectors';
import {api} from '../api';
import {ProductAddScreen} from '../screens/products';
// import {getUser} from '../redux/global/actions';

const Stack = createStackNavigator();

const AppNavigator = (props) => {
  const {baseUrl} = props;

  useEffect(() => {
    if (baseUrl) {
      api.defaults.baseURL = `${
        process.env.NODE_ENV === 'production' ? 'https' : 'http'
      }://${baseUrl}`;
    }
  }, [baseUrl]);
  // useEffect(() => {
  //   api.defaults.headers.common.Authorization = token;
  //   if (token) {
  //     getUser();
  //   }
  // }, [token, getUser]);
  // let initialRouteName = !token ? AppRoute.HOME : AppRoute.AUTH;
  let initialRouteName = AppRoute.HOME;
  return (
    <Stack.Navigator initialRouteName={initialRouteName} headerMode="none">
      <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
      <Stack.Screen name={AppRoute.HOME} component={HomeNavigator} />
      <Stack.Screen name={AppRoute.PRODUCT_ADD} component={ProductAddScreen} />
    </Stack.Navigator>
  );
};

export default connect()(AppNavigator);
