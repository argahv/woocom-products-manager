import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MainLayout} from '../../components';
import {Card, Text, ButtonGroup, Button} from '@ui-kitten/components';
import {AppRoute} from '../../navigation/app-routes';

const HomeScreen = (props) => {
  const handleButtonPress = (route) => {
    props.navigation.navigate(route);
  };

  return (
    <MainLayout navigation={props.navigation} drawer title="Home">
      <View style={styles.view}>
        <Card style={styles.card} bordered={false}>
          <Text category="h5">Orders</Text>
          <Button> View</Button>
        </Card>
        <Card style={styles.card} bordered={false}>
          <Text category="h5">Products</Text>
          <Button onPress={() => handleButtonPress(AppRoute.PRODUCT_ADD)}>
            {' '}
            Add
          </Button>
          {/* <ButtonGroup>
            <Button> View</Button>
          </ButtonGroup> */}
        </Card>
      </View>
      <View style={styles.view}>
        <Card style={styles.card} bordered={false}>
          <Text category="h5">Reports</Text>
          <Button> View</Button>
        </Card>
        <Card style={styles.card} bordered={false}>
          <Text category="h5">Coupons</Text>
          <ButtonGroup>
            <Button> Create</Button>
            <Button> View</Button>
          </ButtonGroup>
        </Card>
      </View>
      {/* <View style={styles.view}> */}
      {/* <Card style={styles.singleLineCard} bordered={false}>
        <Text category="h5">Product Variations</Text>
      </Card>
      <Card style={styles.singleLineCard} bordered={false}>
        <Text category="h5">Product Categories</Text>
      </Card> */}
      {/* </View> */}
    </MainLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    // padding: 10,
  },
  card: {
    flex: 1,
    padding: 15,
    margin: 10,
    alignItems: 'center',
  },
  singleLineCard: {
    flex: 1,
    padding: 15,
    margin: 10,
    height: 200,
    alignItems: 'center',
  },
});
