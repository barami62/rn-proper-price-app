import React, { FC } from "react";
import { aaa } from "@env"
import LongText from "../components/LongText";
import styled from "styled-components/native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";
import AnalysisButton from "../components/AnalysisButton";
import LongTextButton from "../components/LongTextButton";
import OutlineTableView from "../components/OutlineTableView";

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
  navigation: any
}
const MainScreen = ({ navigation }: Props) => {
  const { backgroundColor } = useSelector((state: RootState) => state.themes.LIGHT_MODE);
  const onPress = () => navigation.navigate('Search');

  return (
    <Container backgroundColor={backgroundColor}>
      <LongTextButton onPress={onPress} text="안녕하세요" />
      <LongText text="반갑습니다" />
      <AnalysisButton onPress={onPress} />
      <OutlineTableView />
    </Container>
  );
};

export default MainScreen;