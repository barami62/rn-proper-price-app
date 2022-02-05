import React, { FC } from "react";
import { useWindowDimensions } from "react-native";
import { State } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import styled from "styled-components/native";

interface ContainerProps {
  width: number;
  backgroundColor: string;
}
const Container = styled.View<ContainerProps>`
  width: ${({ width }) => width - 60}px;
  height: 48px;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
`;

interface TextProps {
  fontColor: string;
}
const Text = styled.Text<TextProps>`
  color: ${({ fontColor }) => fontColor};
  font-size: 25px;
  margin-left: 15px;
`;

interface Props {
  text: string;
}
const LongText: FC<Props> = ({ text }: Props) => {
  const width = useWindowDimensions().width;
  const { fontColor, contentBackgroundColor } = useSelector((state: any) => state.themes.LIGHT_MODE);

  return (
    <Container width={width} backgroundColor={contentBackgroundColor}>
      <Text fontColor={fontColor}>
        {text}
      </Text>
    </Container>
  )
};

export default LongText;