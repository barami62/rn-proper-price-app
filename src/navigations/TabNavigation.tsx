import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/MainScreen";
import { Image } from "react-native";
import { images } from "../images";
import { useSelector } from "react-redux";

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigation: FC = () => {
  const { calculIcon, infoIcon } = images;
  const { focusedColor, unfocusedColor }: any = useSelector((state: any) => state.themes.LIGHT_MODE);

  return (
    <Navigator>
      <Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={calculIcon}
              style={
                focused
                  ? { tintColor: focusedColor }
                  : { tintColor: unfocusedColor }
              }
            />
          )
        }}
      />
      <Screen
        name="Info"
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={infoIcon}
              style={
                focused
                  ? { tintColor: focusedColor }
                  : { tintColor: unfocusedColor }
              }
            />
          )
        }}
      />
    </Navigator>
  );
};

export default TabNavigation;