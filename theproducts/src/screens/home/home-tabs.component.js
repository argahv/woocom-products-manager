import React from "react";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const HomeTabs = ({ navigation, state }) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab title="Tab1" />
      <BottomNavigationTab title="Tab2" />
    </BottomNavigation>
  );
};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(HomeTabs);
