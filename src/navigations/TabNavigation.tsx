import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { images } from "../images";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";
import StackNavigation from "./StackNavigation";
import InfoScreen from "../screens/InfoScreen";

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigation: FC = () => {
  const { calculIcon, infoIcon } = images;
  const themes = useSelector((state: RootState) => state.themes);
  const { focusedColor, unfocusedColor, backgroundColor }: any = themes[themes.NOW_MODE];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: backgroundColor
        }
      }}
    >
      <Screen
        name="Main"
        component={StackNavigation}
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
        component={InfoScreen}
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