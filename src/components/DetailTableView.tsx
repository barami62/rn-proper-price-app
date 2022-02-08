import React from "react";
import { useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { RootState } from "../redux/reducer";

const Text = styled.Text`
  flex: 1;
  font-size: 14px;
  text-align: center;
`;

interface ViewProps {
  width: number;
  backgroundColor: string;
}
const ColorView = styled.View<ViewProps>`
  flex-direction: row;
  justify-items: space-between;
  align-items: center;
  padding-horizontal: 20px;
  height: 44px;
  border-radius: 12px;
  width: ${({ width }) => width - 40}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const View = styled.View<ViewProps>`
  flex-direction: row;
  justify-items: space-between;
  align-items: center;
  padding-horizontal: 20px;
  height: 44px;
  border-radius: 12px;
  width: ${({ width }) => width - 40}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Divider = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #ECECEC;
  width: 280px;
`;

interface ContainerProps {
  width: number;
}
const Container = styled.View<ContainerProps>`
  width: ${({ width }) => width - 40}px;
  justify-content: center;
  align-items: center;
  // background-color: ;
  border-radius: 12px;
`;

interface TextLineProps {
  firstText: string;
  secondText: string;
  thirdText: string;
}
const TextLine = ({ firstText, secondText, thirdText }: TextLineProps) => {

  return (
    <>
      <Text>{firstText}</Text>
      <Text>{secondText}</Text>
      <Text>{thirdText}</Text>
    </>
  )
}

interface Props {

}
const DetailTableView = ({ }: Props) => {
  const width = useWindowDimensions().width;
  const { fontColor, contentBackgroundColor, backgroundColor } = useSelector((state: RootState) => state.themes.LIGHT_MODE);

  return (
    <Container width={width} >
      <ColorView width={width} backgroundColor={contentBackgroundColor}>
        <TextLine firstText="적정주가" secondText="기준" thirdText="수익률" />
      </ColorView>
      <View width={width} backgroundColor={backgroundColor}>
        <TextLine firstText="56,500" secondText="2차 매도가" thirdText="19.05%" />
      </View>
      <Divider />
      <View width={width} backgroundColor={backgroundColor}>
        <TextLine firstText="52,500" secondText="1차 매도가" thirdText="10.22%" />
      </View>
      <Divider />
      <View width={width} backgroundColor={backgroundColor}>
        <TextLine firstText="51,500" secondText="매수가" thirdText="7.62%" />
      </View>
    </Container>
  );
};

export default DetailTableView;