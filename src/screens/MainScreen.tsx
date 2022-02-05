import React, { FC } from "react";
import { aaa } from "@env"
import LongText from "../components/LongText";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

interface Props { }
const MainScreen: FC = ({ }: Props) => {

  return (
    <Container>
      <LongText text="안녕하세요" />
    </Container>
  );
};

export default MainScreen;