import React, { useEffect, useState } from "react";
import LongText from "../components/LongText";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducer";
import { FNGUIDE_STOCKS_LIST } from "@env";
import axios from "axios";
import { setIsFree, setStocks, Stock } from "../redux/reducers/stocks";

interface ContainerProps {
  backgroundColor: string;
}
const Container = styled.View<ContainerProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

interface Props {
  setIsLoading: Function;
  IS_FREE: boolean;
}
const LoadingScreen = ({ setIsLoading, IS_FREE }: Props) => {
  const [stateText, setStateText] = useState<string>("로딩중...");
  const themes = useSelector((state: RootState) => state.themes);
  const { backgroundColor }: any = themes[themes.NOW_MODE];
  const dispatch = useDispatch();

  const getStocks = (): void => {
    axios.get(FNGUIDE_STOCKS_LIST)
      .then(res => {
        const stocks: Stock[] = res.data.Co;
        dispatch(setStocks(stocks));
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setStateText("오류 발생")
      });
  };

  useEffect(() => {
    dispatch(setIsFree(IS_FREE));
    getStocks();
  }, []);

  return (
    <Container backgroundColor={backgroundColor}>
      <LongText text={stateText} />
    </Container>
  );
};

export default LoadingScreen;