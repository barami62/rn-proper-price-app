import React, { useState } from "react";
import LongText from "../components/LongText";
import styled from "styled-components/native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";
import AnalysisButton from "../components/AnalysisButton";
import LongTextButton from "../components/LongTextButton";
import OutlineTableView from "../components/OutlineTableView";
import DetailTableView from "../components/DetailTableView";

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
  const { backgroundColor } = useSelector((state: RootState) => state.themes.LIGHT_MODE);
  const onPress = () => navigation.navigate('Search', {
    stockInput
  });
  const stockInput: string = route?.params?.stockName || "삼성전자";
  const [textState, onChangeTextState] = useState("대기");
  const [disableTouch, setDisableTouch] = useState(false);

  return (
    <Container backgroundColor={backgroundColor}>
      <LongTextButton onPress={onPress} text={stockInput} />
      <LongText text="반갑습니다" />
      <AnalysisButton onPress={onPress} />
      <OutlineTableView />
      <DetailTableView />
    </Container>
  );
};

export default MainScreen;