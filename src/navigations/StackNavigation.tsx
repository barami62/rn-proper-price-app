import React, { FC } from "react";
import MainScreen from "../screens/MainScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import { Alert, Button, Image, Text, TextInput, View } from "react-native";
import { images } from "../images";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";

const { Navigator, Screen } = createStackNavigator();

const StackNavigation: FC = () => {

  const SearchHeader = () => {
    const { contentBackgroundColor } = useSelector((state: RootState) => state.themes.LIGHT_MODE);
    return (
      <TextInput style={{ flex: 1, backgroundColor: contentBackgroundColor, width: 300, borderRadius: 12, justifyContent: 'center', paddingLeft: 12 }} />
    )
  }

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
        options={{
          headerTitle: () => <SearchHeader />,
          headerBackTitleVisible: false,
          headerShadowVisible: true
        }}
      />
    </Navigator>
  );
};

export default StackNavigation;