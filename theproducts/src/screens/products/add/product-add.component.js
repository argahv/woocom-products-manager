import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {MainLayout, Toolbar} from '../../../components';
import {Layout} from '@ui-kitten/components';
import {BackIcon} from '../../../assets/icons';

const ProductAddScreen = (props) => {
  return (
    <MainLayout title="Add a Product" navigation={props.navigation}>
      <Text>This is a screen to add the product</Text>
    </MainLayout>
  );
};

export default ProductAddScreen;

const styles = StyleSheet.create({});
