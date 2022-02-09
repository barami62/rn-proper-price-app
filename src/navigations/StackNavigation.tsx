import React, { useState } from "react";
import MainScreen from "../screens/MainScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import { TextInput } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";

const SearchHeader = ({ value, onChangeText }: any) => {
  const { contentBackgroundColor } = useSelector((state: RootState) => state.themes.LIGHT_MODE);

  return (
    <TextInput
      placeholder="삼성전자"
      value={value}
      onChangeText={onChangeText}
      style={{ flex: 1, backgroundColor: contentBackgroundColor, width: 300, borderRadius: 12, justifyContent: 'center', paddingLeft: 12 }}
    />
  )
}

const { Navigator, Screen } = createStackNavigator();

const StackNavigation = () => {
  const [stockInput, setStockInput] = useState<string>("");
  const onChangeText = (text: string) => setStockInput(text);

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
          headerShadowVisible: true
        }}
      />
    </Navigator>
  );
};

export default StackNavigation;