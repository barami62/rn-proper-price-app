import React, { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from "./navigations/TabNavigation";
import LoadingScreen from "./screens/LoadingScreen";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const IS_FREE = true as const;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Provider store={store}>
      {
        isLoading
          ? (
            <LoadingScreen IS_FREE={IS_FREE} setIsLoading={setIsLoading} />
          )
          : (
            <NavigationContainer>
              <TabNavigation />
            </NavigationContainer>
          )
      }
    </Provider>
  );
};

export default App;