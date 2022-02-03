import React, { FC } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from "./navigations/TabNavigation";

const App: FC = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;