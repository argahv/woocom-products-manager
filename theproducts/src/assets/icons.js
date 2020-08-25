import React from 'react';
import {Icon} from '@ui-kitten/components';

import Ionicons from 'react-native-vector-icons/Ionicons';

export const BackIcon = (style) => (
  <Ionicons {...style} size={24} name="arrow-back-sharp" />
);

export const AddIcon = (style) => <Icon {...style} name="plus" />;

export const LayoutIcon = (style) => <Icon {...style} name="layout-outline" />;

export const PersonIcon = (style) => <Icon {...style} name="person-outline" />;

export const MoreVerticalIcon = (style) => (
  <Icon {...style} name="more-vertical" />
);

export const LogoutIcon = (style) => <Icon {...style} name="log-out-outline" />;

export const InfoIcon = (style) => <Icon {...style} name="info-outline" />;

export const AlertTriangleIcon = (style) => (
  <Icon {...style} name="alert-triangle-outline" />
);

export const EyeIcon = (style) => <Icon {...style} name="eye-outline" />;

export const EyeOffIcon = (style) => <Icon {...style} name="eye-off-outline" />;

export const MenuIcon = (style) => <Icon {...style} name="menu-outline" />;

export const HomeIcon = (style) => <Icon {...style} name="home-outline" />;

export const DoneAllIcon = (style) => (
  <Icon {...style} name="done-all-outline" />
);

export const GridIcon = (style) => <Icon {...style} name="grid-outline" />;

export const SearchIcon = (style) => <Icon {...style} name="search-outline" />;
