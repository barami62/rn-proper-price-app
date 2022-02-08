import React from "react";
import { useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";
import styled from "styled-components/native";


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
  width: number;
  backgroundColor: string;
}

const Container = styled.View<ContainerProps>`
  width: ${({ width }) => width - 40}px;
  height: 44px;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 12px;
  margin-bottom: 21px;
  margin-horizontal: 20px;
`;

const SearchElement = () => {
  const width = useWindowDimensions().width;
  const { fontColor, contentBackgroundColor } = useSelector((state: RootState) => state.themes.LIGHT_MODE);

  return (
    <Container width={width} backgroundColor={contentBackgroundColor}>
      <SmallView>
        <FirstText>삼성전자</FirstText>
        <SecondText>005930</SecondText>
      </SmallView>
    </Container>
  );
};

export default SearchElement;