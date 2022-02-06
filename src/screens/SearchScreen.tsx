import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native"
import { RootState } from "../redux/reducer";

interface ContainerProps {
  backgroundColor: string;
}
const Container = styled.View<ContainerProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const SearchScreen = () => {
  const { backgroundColor } = useSelector((state: RootState) => state.themes.LIGHT_MODE);

  return (
    <Container backgroundColor={backgroundColor}>
      <Text>
        hello~
      </Text>
    </Container>
  )
};

export default SearchScreen;