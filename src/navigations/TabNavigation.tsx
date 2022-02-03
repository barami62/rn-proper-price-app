import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/MainScreen";
import { Image } from "react-native";
import { images } from "../images";

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigation: FC = () => {
  const { calculIcon, infoIcon } = images;

  return (
    <Navigator>
      <Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={calculIcon} />
          )
        }}
      />
      <Screen
        name="Info"
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={infoIcon} />
          )
        }}
      />
    </Navigator>
  );
};

export default TabNavigation;