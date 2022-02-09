import React from "react";
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
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 12px;
  margin-bottom: 16px;
  padding: 12px;
  justify-items: center;
`;

interface TextProps {
  fontColor: string;
}
const Text = styled.Text<TextProps>`
  color: ${({ fontColor }) => fontColor};
  font-size: 14px;
`;

interface Props {
  children: any;
}
const InfoText = ({ children }: Props) => {
  const width = useWindowDimensions().width;
  const themes = useSelector((state: RootState) => state.themes);
  const { fontColor, contentBackgroundColor }: any = themes[themes.NOW_MODE];

  return (
    <Container width={width} backgroundColor={contentBackgroundColor}>
      <Text fontColor={fontColor}>
        {children}
      </Text>
    </Container>
  )
};

export default InfoText;