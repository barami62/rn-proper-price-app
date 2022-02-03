import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/MainScreen";

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigation: FC = () => {

  return (
    <Navigator>
      <Screen name="Main" component={MainScreen} />
    </Navigator>
  );
};

export default TabNavigation;