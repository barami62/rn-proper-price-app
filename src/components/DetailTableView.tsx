import React from "react";
import { useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { RootState } from "../redux/reducer";
import { StockPriceInfo } from "../redux/reducers/stocks";

interface TextProps {
  fontColor: string;
}
const Text = styled.Text<TextProps>`
  flex: 1;
  font-size: 14px;
  text-align: center;
  color: ${({ fontColor }) => fontColor}
`;

interface ViewProps {
  width: number;
  backgroundColor: string;
}
const ColorView = styled.View<ViewProps>`
  flex-direction: row;
  justify-items: space-between;
  align-items: center;
  padding-horizontal: 20px;
  height: 44px;
  border-radius: 12px;
  width: ${({ width }) => width - 40}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const View = styled.View<ViewProps>`
  flex-direction: row;
  justify-items: space-between;
  align-items: center;
  padding-horizontal: 20px;
  height: 44px;
  border-radius: 12px;
  width: ${({ width }) => width - 40}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Divider = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #ECECEC;
  width: 280px;
`;

interface ContainerProps {
  width: number;
}
const Container = styled.View<ContainerProps>`
  width: ${({ width }) => width - 40}px;
  justify-content: center;
  align-items: center;
  // background-color: ;
  border-radius: 12px;
`;

interface TextLineProps {
  firstText: string;
  secondText: string;
  thirdText: string;
}
const TextLine = ({ firstText, secondText, thirdText }: TextLineProps) => {
  const themes = useSelector((state: RootState) => state.themes);
  const { fontColor, }: any = themes[themes.NOW_MODE];

  return (
    <>
      <Text fontColor={fontColor}>{firstText}</Text>
      <Text fontColor={fontColor}>{secondText}</Text>
      <Text fontColor={fontColor}>{thirdText}</Text>
    </>
  )
}

interface Props {

}
const DetailTableView = ({ }: Props) => {
  const width = useWindowDimensions().width;
  const themes = useSelector((state: RootState) => state.themes);
  const { backgroundColor, contentBackgroundColor }: any = themes[themes.NOW_MODE];
  let {
    first_price,
    second_price,
    third_price,
    now_price,
  }: StockPriceInfo = useSelector((state: RootState) => state.stocks.stockPriceInfo);
  const numberWithCommas = (x: number | string): string => x === undefined ? "" : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const getYield = (price: number): string => {
    let res: number = ((price - now_price) / now_price) * 100;
    return isNaN(res) ? "" : numberWithCommas(res.toFixed(2)) + "%";
  };
  const first_price_comma = numberWithCommas(first_price);
  const second_price_comma = numberWithCommas(second_price);
  const third_price_comma = numberWithCommas(third_price);

  const firstPriceYield = getYield(first_price);
  const secondPriceYield = getYield(second_price);
  const thirdPriceYield = getYield(third_price);

  return (
    <Container width={width} >
      <ColorView width={width} backgroundColor={contentBackgroundColor}>
        <TextLine firstText="적정주가" secondText="기준" thirdText="수익률" />
      </ColorView>
      <View width={width} backgroundColor={backgroundColor}>
        <TextLine firstText={first_price_comma} secondText="2차 매도가" thirdText={firstPriceYield} />
      </View>
      <Divider />
      <View width={width} backgroundColor={backgroundColor}>
        <TextLine firstText={second_price_comma} secondText="1차 매도가" thirdText={secondPriceYield} />
      </View>
      <Divider />
      <View width={width} backgroundColor={backgroundColor}>
        <TextLine firstText={third_price_comma} secondText="매수가" thirdText={thirdPriceYield} />
      </View>
    </Container>
  );
};

export default DetailTableView;