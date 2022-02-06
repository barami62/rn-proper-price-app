import React, { FC } from "react";
import { useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { RootState } from "../redux/reducer";

interface ContainerProps {
  width: number;
  backgroundColor: string;
}
const Container = styled.View<ContainerProps>`
  width: ${({ width }) => width - 40}px;
  height: 44px;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 12px;
  margin-bottom: 16px;
`;

interface TextProps {
  fontColor: string;
}
const Text = styled.Text<TextProps>`
  color: ${({ fontColor }) => fontColor};
  font-size: 14;
  margin-left: 12px;
`;

interface Props {
  text: string;
}
const LongText: FC<Props> = ({ text }: Props) => {
  const width = useWindowDimensions().width;
  const { fontColor, contentBackgroundColor } = useSelector((state: RootState) => state.themes.LIGHT_MODE);

  return (
    <Container width={width} backgroundColor={contentBackgroundColor}>
      <Text fontColor={fontColor}>
        {text}
      </Text>
    </Container>
  )
};

export default LongText;