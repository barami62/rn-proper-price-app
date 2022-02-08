import React, { FC } from "react";
import { useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";
import styled from "styled-components/native";
import SearchElement from "../components/SearchElement";
import { Stock } from "../redux/reducers/stocks";

interface FlatListProps {
  backgroundColor: string;
  renderItem: ({ item }: renderItemProps) => FC;
  keyExtractor: (stockInfo: Stock) => string
}
const FlatList: any = styled.FlatList<FlatListProps>`
  flex: 1;
  height: 44px;
  padding-top: 24px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

interface ContainerProps {
  backgroundColor: string;
}
const Container = styled.View<ContainerProps>`
  flex: 1;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

interface renderItemProps {
  item: Stock
}

const SearchScreen = ({ navigation, stockInput }: any) => {
  const { fontColor, backgroundColor } = useSelector((state: RootState) => state.themes.LIGHT_MODE);
  const stocks: Stock[] = useSelector((state: RootState) => state.stocks.stocks);
  const banList = ['ETN', 'KODEX', 'TIGER', 'ARIRANG', 'HANARO', 'SMART', 'KBSTAR', 'KINDEX', 'KOSEF', '스팩', '하이골드', 'FOCUS', "SOL", "MASTER", "마이티", "WOORI"];
  const list = stocks
    .filter(word => word.nm.includes(stockInput))
    .filter((stock) => {
      if (
        stock.nm.includes('ETN')
        || stock.nm.includes('KODEX')
        || stock.nm.includes("TIGER")
        || stock.nm.includes("ARIRANG")
        || stock.nm.includes("HANARO")
        || stock.nm.includes("SMART")
        || stock.nm.includes("KBSTAR")
        || stock.nm.includes("KINDEX")
        || stock.nm.includes("KOSEF")
        || stock.nm.includes("스팩")
        || stock.nm.includes("하이골드")
        || stock.nm.includes("FOCUS")
        || stock.nm.includes("SOL")
        || stock.nm.includes("MASTER")
        || stock.nm.includes("마이티")
        || stock.nm.includes("WOORI")
      )
        return false;
      else return true;
    });

  const renderItem = ({ item }: renderItemProps) => {
    const onPress: Function = () => navigation.navigate('MainStack', {
      stockName: item.nm,
    });

    return (
      <SearchElement
        stockInfo={item}
        onPress={onPress}
      />
    );
  };

  return (
    <Container backgroundColor={backgroundColor}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(stockInfo: Stock) => stockInfo.cd}
      />
    </Container>
  );
};

export default SearchScreen;