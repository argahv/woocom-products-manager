import React from 'react';
import {View} from 'react-native';
import {
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
  useTheme,
  Text,
} from '@ui-kitten/components';
import {BackIcon, MoreVerticalIcon, AddIcon} from '../assets/icons';
import {useNavigation} from '@react-navigation/core';
import {AppRoute} from '../navigation/app-routes';

export const Toolbar = (props) => {
  const {menu, backIcon, menuIcon, onBackPress, ...topNavigationProps} = props;
  const [menuVisible, setMenuVisible] = React.useState(false);
  const navigation = useNavigation();
  const theme = useTheme();
  const onMenuSelect = () => {
    setMenuVisible(false);
  };

  const onMenuActionPress = () => {
    // setMenuVisible(!menuVisible);
    navigation.navigate(AppRoute.PRODUCT_ADD);
  };

  const renderMenuAction = (menuData = () => null) => (
    <OverflowMenu
      visible={menuVisible}
      placement="bottom end"
      onBackdropPress={onMenuActionPress}
      anchor={() => (
        <TopNavigationAction
          icon={AddIcon}
          // icon={menuIcon || MoreVerticalIcon}
          onPress={onMenuActionPress}
        />
      )}>
      {menuData(onMenuSelect)}
    </OverflowMenu>
  );

  const renderBackAction = () => (
    <TopNavigationAction icon={backIcon || BackIcon} onPress={onBackPress} />
  );

  return (
    <View style={[{backgroundColor: theme['color-secondary-100']}]}>
      <TopNavigation
        {...topNavigationProps}
        title={<Text category="h5">{props.title}</Text>}
        alignment="center"
        accessoryLeft={onBackPress ? renderBackAction : undefined}
        accessoryRight={menu ? () => renderMenuAction(menu) : undefined}
        appearance="control"
      />
    </View>
  );
};
