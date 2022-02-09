import React, { useState } from "react";
import MainScreen from "../screens/MainScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import { TextInput } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";

const SearchHeader = ({ value, onChangeText }: any) => {
  const themes = useSelector((state: RootState) => state.themes);
  const { fontColor, contentBackgroundColor, }: any = themes[themes.NOW_MODE];

  return (
    <TextInput
      placeholder="삼성전자"
      value={value}
      onChangeText={onChangeText}
      style={{
        flex: 1,
        backgroundColor: contentBackgroundColor,
        color: fontColor,
        width: 300,
        borderRadius: 12,
        justifyContent: 'center',
        paddingLeft: 12
      }}
    />
  )
}

const { Navigator, Screen } = createStackNavigator();

const StackNavigation = () => {
  const [stockInput, setStockInput] = useState<string>("");
  const onChangeText = (text: string) => setStockInput(text);
  const themes = useSelector((state: RootState) => state.themes);
  const { backgroundColor }: any = themes[themes.NOW_MODE];

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
        children={({ navigation }) => <SearchScreen navigation={navigation} stockInput={stockInput} />}
        options={{
          headerTitle: () => <SearchHeader value={stockInput} onChangeText={onChangeText} />,
          headerBackTitleVisible: false,
          headerShadowVisible: true,
          headerStyle: {
            backgroundColor: backgroundColor
          }
        }}
      />
    </Navigator>
  );
};

export default StackNavigation;