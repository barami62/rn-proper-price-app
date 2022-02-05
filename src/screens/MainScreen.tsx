import React, { FC } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { aaa } from "@env"
import LongText from "../components/LongText";
import styled from "styled-components/native";

interface Styles {
  container: ViewStyle;
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

interface Props { }
const MainScreen: FC = ({ }: Props) => {

  return (
    // <View style={styles.container}>
    //   <Text>
    //     Hello World! {aaa}
    //   </Text>
    // </View>
    <Container>
      <LongText />
    </Container>
  );
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default MainScreen;