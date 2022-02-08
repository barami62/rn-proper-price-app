import React, { useEffect, useState } from "react";
import LongText from "../components/LongText";
import styled from "styled-components/native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";
import { FNGUIDE_STOCKS_LIST } from "@env";
import axios from "axios";

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
}
const LoadingScreen = ({ setIsLoading }: Props) => {
  interface Stock {
    cd: string;
    gb: string;
    nm: string;
  }
  const [stocks, setStocks] = useState<Stock[] | null>();
  const [stateText, setStateText] = useState<string>("로딩중...");
  const { backgroundColor } = useSelector((state: RootState) => state.themes.LIGHT_MODE);

  const getStocks = (): void => {
    try {
      axios.get(FNGUIDE_STOCKS_LIST)
        .then(res => {
          const stocks: Stock[] = res.data.Co;
          setStocks(stocks);
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
      setStateText("오류 발생")
    }
  };

  useEffect(() => {
    getStocks();
  }, []);

  return (
    <Container backgroundColor={backgroundColor}>
      <LongText text={stateText} />
    </Container>
  );
};

export default LoadingScreen;