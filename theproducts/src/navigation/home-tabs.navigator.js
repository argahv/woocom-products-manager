import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeTabs } from "../screens/home";
// import { AppRoute } from "./app-routes";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Text } from "galio-framework";
import MainLayout from "../components/main-layout.component";
import { AppRoute } from "./app-routes";

const { Navigator, Screen } = createBottomTabNavigator();

const TabOne = (props) => (
  <MainLayout navigation={props.navigation} drawer title="Tab1">
    <Text h1> Tab 1</Text>
  </MainLayout>
);
const TabTwo = (props) => (
  <MainLayout navigation={props.navigation} drawer title="Tab2">
    <Text h1> Tab2</Text>
  </MainLayout>
);

const HomeTabsNavigator = ({}) => (
  <Navigator tabBar={(props) => <HomeTabs {...props} />}>
    <Screen name={AppRoute.TAB_ONE} component={TabOne} />
    <Screen name={AppRoute.TAB_TWO} component={TabTwo} />
  </Navigator>
);

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(HomeTabsNavigator);
