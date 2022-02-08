import React from "react";
import { useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";
import styled from "styled-components/native";
import { Stock } from "../redux/reducers/stocks";


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
  console.log("stockInfo", stockInfo);

  const width = useWindowDimensions().width;
  const { fontColor, contentBackgroundColor } = useSelector((state: RootState) => state.themes.LIGHT_MODE);
  const stockName = stockInfo.nm;
  const numberCode = stockInfo.cd.slice(1);

  return (
    <Container onPress={onPress} width={width} backgroundColor={contentBackgroundColor}>
      <SmallView>
        <FirstText>{stockName}</FirstText>
        <SecondText>{numberCode}</SecondText>
      </SmallView>
    </Container>
  );
};

export default SearchElement;