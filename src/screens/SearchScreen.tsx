import React from "react";
import { useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";
import styled from "styled-components/native";
import SearchElement from "../components/SearchElement";


const FirstText = styled.Text`
  flex: 1;
  font-size: 14px;
  text-align: left;
`;

const SecondText = styled.Text`
  flex: 1;
  font-size: 14px;
  text-align: right;
`;

const SmallView = styled.View`
  flex-direction: row;
  justify-items: space-between;
  align-items: center;
  padding-horizontal: 12px;
  height: 44px;
`;

interface ContainerProps {
  backgroundColor: string;
}
const ScrollView = styled.ScrollView<ContainerProps>`
  flex: 1;
  height: 44px;
  padding-top: 24px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Container = styled.View<ContainerProps>`
  flex: 1;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const SearchScreen = () => {
  const width = useWindowDimensions().width;
  const { fontColor, backgroundColor } = useSelector((state: RootState) => state.themes.LIGHT_MODE);

  return (
    <Container backgroundColor={backgroundColor}>
      <ScrollView backgroundColor={backgroundColor}>
        <SearchElement />
        <SearchElement />
        <SearchElement />
        <SearchElement />
      </ScrollView>
    </Container>
  );
};

export default SearchScreen;