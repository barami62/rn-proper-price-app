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
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 12px;
  margin-bottom: 30px;
`;

interface TextProps {
  fontColor: string;
}
const Text = styled.Text<TextProps>`
  color: ${({ fontColor }) => fontColor};
  font-size: 16px;
  margin-left: 12px;
  text-align: center;
  font-weight: 500;
`;

interface Props {
  onPress: any;
  disabled: boolean;
}
const AnalysisButton = ({ onPress, disabled }: Props) => {
  const width = useWindowDimensions().width;
  const { mainButton, mainButtonFontColor } = useSelector((state: RootState) => state.themes.LIGHT_MODE);

  return (
    <Container disabled={disabled} onPress={onPress} width={width} backgroundColor={mainButton}>
      <Text fontColor={mainButtonFontColor}>
        분석하기
      </Text>
    </Container>
  )
};

export default AnalysisButton