import React from "react";
import { useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";
import styled from "styled-components/native";
import { Stock } from "../redux/reducers/stocks";

interface textProps {
  fontColor: string;
}
const FirstText = styled.Text<textProps>`
  flex: 1;
  font-size: 14px;
  text-align: left;
  color: ${({ fontColor }) => fontColor}
`;

const SecondText = styled.Text<textProps>`
  flex: 1;
  font-size: 14px;
  text-align: right;
  color: ${({ fontColor }) => fontColor}
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
  onPress: Function;
}

const Container = styled.TouchableOpacity<ContainerProps>`
  width: ${({ width }) => width - 40}px;
  height: 44px;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 12px;
  margin-bottom: 21px;
  margin-horizontal: 20px;
`;

interface Props {
  stockInfo: Stock;
  onPress: any;
}
const SearchElement = ({ stockInfo, onPress }: Props) => {
  const width = useWindowDimensions().width;
  const themes = useSelector((state: RootState) => state.themes);
  const { fontColor, contentBackgroundColor }: any = themes[themes.NOW_MODE];
  const stockName = stockInfo.nm;
  const numberCode = stockInfo.cd.slice(1);

  return (
    <Container onPress={onPress} width={width} backgroundColor={contentBackgroundColor}>
      <SmallView>
        <FirstText fontColor={fontColor}>{stockName}</FirstText>
        <SecondText fontColor={fontColor}>{numberCode}</SecondText>
      </SmallView>
    </Container>
  );
};

export default SearchElement;