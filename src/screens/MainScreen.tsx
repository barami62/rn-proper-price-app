import React, { FC } from "react";
import { aaa } from "@env"
import LongText from "../components/LongText";
import styled from "styled-components/native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";

interface ContainerProps {
  backgroundColor: string;
}
const Container = styled.View<ContainerProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

interface Props { }
const MainScreen: FC = ({ }: Props) => {
  const { backgroundColor } = useSelector((state: RootState) => state.themes.LIGHT_MODE);

  return (
    <Container backgroundColor={backgroundColor}>
      <LongText text="안녕하세요" />
      <LongText text="반갑습니다" />
    </Container>
  );
};

export default MainScreen;