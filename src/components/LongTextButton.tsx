import React from "react";
import { useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { RootState } from "../redux/reducer";

interface ContainerProps {
  width: number;
  backgroundColor: string;
}
const Container = styled.TouchableOpacity<ContainerProps>`
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
  font-size: 14px;
  margin-left: 12px;
`;

interface Props {
  text: string;
  onPress?: () => {}
}
const LongTextButton = ({ text, onPress }: Props) => {
  const width = useWindowDimensions().width;
  const themes = useSelector((state: RootState) => state.themes);
  const { fontColor, contentBackgroundColor }: any = themes[themes.NOW_MODE];

  return (
    <Container onPress={onPress} width={width} backgroundColor={contentBackgroundColor}>
      <Text fontColor={fontColor}>
        {text}
      </Text>
    </Container>
  )
};

export default LongTextButton;