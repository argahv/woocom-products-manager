import React from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Text} from 'galio-framework';
import {Divider, Layout, MenuItem} from '@ui-kitten/components';
import {Toolbar} from './toolbar.component';
import {MenuIcon, InfoIcon, LogoutIcon, BackIcon} from '../assets/icons';
import {AppRoute} from '../navigation/app-routes';
import {SafeAreaLayout, SaveAreaInset} from './safe-area-layout.component';
import {logoutUser} from '../redux/global/actions';

const MainLayout = ({title, navigation, drawer, children, ...props}) => {
  const menu = (callback = () => null) => (
    <>
      <MenuItem title="Menu Item" />
    </>
  );
  // const onMenuItemSelect = index => {
  //   const {[index]: selectedItem} = menu;

  //   switch (selectedItem.title) {
  //     case 'Log Out':
  //       props.logoutUser();
  //       props.navigation.navigate(AppRoute.AUTH);
  //       break;
  //     default:
  //       props.navigation.navigate(selectedItem.route);
  //       break;
  //   }
  // };
  return (
    <SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
      <Toolbar
        title={<Text h5>{title}</Text>}
        backIcon={drawer ? MenuIcon : BackIcon}
        onBackPress={drawer ? navigation.toggleDrawer : navigation.goBack}
        menu={menu}
      />
      <Divider />
      <Layout style={styles.container}>{children}</Layout>
    </SafeAreaLayout>
  );
};

const mapDispatchToProps = {
  logoutUser,
};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
