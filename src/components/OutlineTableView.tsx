import React from "react";
import { useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { RootState } from "../redux/reducer";
import { StockPriceInfo } from "../redux/reducers/stocks";

interface TextProps {
  fontColor: string;
}
const FirstText = styled.Text<TextProps>`
  flex: 1;
  font-size: 14px;
  text-align: left;
  color: ${({ fontColor }) => fontColor}
`;

const SecondText = styled.Text<TextProps>`
  flex: 1;
  font-size: 14px;
  font-weight: bold;
  text-align: right;
  color: ${({ fontColor }) => fontColor}
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
  width: 300px;
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
  const themes = useSelector((state: RootState) => state.themes);
  const { fontColor, contentBackgroundColor, }: any = themes[themes.NOW_MODE];
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
        <FirstText fontColor={fontColor}>???????????? ??????</FirstText>
        <SecondText fontColor={fontColor}>{D_5}</SecondText>
      </SmallView>
      <Divider />
      <SmallView>
        <FirstText fontColor={fontColor}>???????????????</FirstText>
        <SecondText fontColor={fontColor}>{required_yield_percent}</SecondText>
      </SmallView>
      <Divider />
      <SmallView>
        <FirstText fontColor={fontColor}>?????????</FirstText>
        <SecondText fontColor={fontColor}>{now_price_comma}</SecondText>
      </SmallView>
    </Container>
  );
};

export default OutlineTableView;