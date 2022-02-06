import React, { FC } from "react";
import MainScreen from "../screens/MainScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";

const { Navigator, Screen } = createStackNavigator();

const StackNavigation: FC = () => {

  return (
    <Navigator>
      <Screen
        name="MainStack"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Search"
        component={SearchScreen}
      />
    </Navigator>
  );
};

export default StackNavigation;