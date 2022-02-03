import React, { FC } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { aaa } from "@env"

interface Styles {
  container: ViewStyle;
}

const App: FC = () => {

  return (
    <View style={styles.container}>
      <Text>
        Hello World! {aaa}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default App;