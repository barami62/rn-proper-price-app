import React from "react";
import { useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { RootState } from "../redux/reducer";
import { StockPriceInfo } from "../redux/reducers/stocks";

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
  const {
    fontColor,
    contentBackgroundColor
  } = useSelector((state: RootState) => state.themes.LIGHT_MODE);
  let {
    D_5,
    required_yield,
    now_price
  }: StockPriceInfo = useSelector((state: RootState) => state.stocks.stockPriceInfo);

  const required_yield_percent = required_yield ? (required_yield * 100).toFixed(2) + "%" : "";
  const numberWithCommas = (x: number): string => x === undefined ? "" : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const now_price_comma = numberWithCommas(now_price);

  return (
    <Container width={width} backgroundColor={contentBackgroundColor}>
      <SmallView>
        <FirstText>컨센서스 기준</FirstText>
        <SecondText>{D_5}</SecondText>
      </SmallView>
      <Divider />
      <SmallView>
        <FirstText>요구수익률</FirstText>
        <SecondText>{required_yield_percent}</SecondText>
      </SmallView>
      <Divider />
      <SmallView>
        <FirstText>현재가</FirstText>
        <SecondText>{now_price_comma}</SecondText>
      </SmallView>
    </Container>
  );
};

export default OutlineTableView;