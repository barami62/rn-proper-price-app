import React from "react";
import { useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { RootState } from "../redux/reducer";

const FirstText = styled.Text`
  flex: 1;
  font-size: 14px;
  text-align: left;
`;

const SecondText = styled.Text`
  flex: 1;
  font-size: 14px;
  font-weight: bold;
  text-align: right;
`;

const SmallView = styled.View`
  flex-direction: row;
  justify-items: space-between;
  align-items: center;
  padding-horizontal: 20px;
  height: 44px;
`;

const Divider = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #ECECEC;
  width: 280px;
`;

interface ContainerProps {
  width: number;
  backgroundColor: string;
}
const Container = styled.View<ContainerProps>`
  width: ${({ width }) => width - 40}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 12px;
  padding-vertical: 10px;
  margin-bottom: 30px;
`;
interface Props {
  consensusStandard?: string;
  requiredYield?: number;
  nowPrice?: number;
}
const OutlineTableView = ({ }: Props) => {
  const width = useWindowDimensions().width;
  const { fontColor, contentBackgroundColor } = useSelector((state: RootState) => state.themes.LIGHT_MODE);

  return (
    <Container width={width} backgroundColor={contentBackgroundColor}>
      <SmallView>
        <FirstText>컨센서스 기준</FirstText>
        <SecondText>2021/12(E)</SecondText>
      </SmallView>
      <Divider />
      <SmallView>
        <FirstText>요구수익률</FirstText>
        <SecondText>8.35%</SecondText>
      </SmallView>
      <Divider />
      <SmallView>
        <FirstText>현재가</FirstText>
        <SecondText>73,000</SecondText>
      </SmallView>
    </Container>
  )
};

export default OutlineTableView;