import React, { useState } from "react";
import LongText from "../components/LongText";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducer";
import AnalysisButton from "../components/AnalysisButton";
import LongTextButton from "../components/LongTextButton";
import OutlineTableView from "../components/OutlineTableView";
import DetailTableView from "../components/DetailTableView";
import { AWS_PROPER_PRICE_URL } from "@env";
import { setStockPriceInfo } from "../redux/reducers/stocks"

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
  navigation: any;
  route: {
    params: any;
  };
}
const MainScreen = ({ navigation, route }: Props) => {
  const themes = useSelector((state: RootState) => state.themes);
  const { backgroundColor }: any = themes[themes.NOW_MODE];
  const onPressSearch = () => navigation.navigate('Search', {
    stockInput
  });
  const stockInput: string = route?.params?.stockName || "삼성전자";
  const [textState, onChangeTextState] = useState<string>("대기");
  const [disableTouch, setDisableTouch] = useState<boolean>(false);
  const dispatch = useDispatch();

  const getStockPrice = () => {
    setDisableTouch(true);
    onChangeTextState("로딩중...");

    const payload = {
      isFree: true,
      stock_name: stockInput,
      uniqueId: "TEST_ID"
    };
    fetch(AWS_PROPER_PRICE_URL, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(data => data.json())
      .then(data => {
        setDisableTouch(false);
        data = JSON.parse(data.body);

        if (data.status === "error") {
          onChangeTextState(data.contents)
        }
        else {
          dispatch(setStockPriceInfo(data));
          onChangeTextState("완료");
        }
      });
  };

  return (
    <Container backgroundColor={backgroundColor}>
      <LongTextButton onPress={onPressSearch} text={stockInput} />
      <LongText text={textState} />
      <AnalysisButton disabled={disableTouch} onPress={getStockPrice} />
      {
        textState === "완료"
        && (
          <>
            <OutlineTableView />
            <DetailTableView />
          </>
        )
      }
    </Container>
  );
};

export default MainScreen;