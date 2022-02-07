import React from "react";
import styled from "styled-components/native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";
import { Linking } from "react-native";
import InfoText from "../components/InfoText";
import { TouchableOpacity } from "react-native-gesture-handler";

interface ContainerProps {
  backgroundColor: string;
}
const Container = styled.SafeAreaView<ContainerProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const ScrollView = styled.ScrollView<ContainerProps>`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

interface Props {

}
const InfoScreen = ({ }: Props) => {
  const { backgroundColor } = useSelector((state: RootState) => state.themes.LIGHT_MODE);

  return (
    <Container backgroundColor={backgroundColor}>
      <ScrollView backgroundColor={backgroundColor}>
        <InfoText>
          이 앱은 책 "재무제표 모르면 주식투자 절대로 하지마라" 에서 소개된 S-RIM 방식을 활용하여, 회사명(또는 번호)만 입력하면 이후의 과정을 자동화한 앱입니다. 따라서 계산 결과는 참고사항일 뿐이며, 실제 투자는 본인의 책임입니다.
        </InfoText>
        <InfoText>
          [사용방법] {'\n'}가장 상단의 탭(삼성전자로 적혀있는 부분)을 터치한 후 원하는 주식명 또는 주식번호를 입력하고, 밑의 "분석하기" 버튼을 클릭하면 됩니다.
        </InfoText>
        <InfoText>
          이후의 결과에서 2번째 상자에 대한 설명으로, 컨센서스 기준은 어느 컨센서스 시점을 기준으로 삼았는지를, 요구수익률은 책에 따라 BBB- 채권의 수익률을, 마지막으로 종가는 전 영업일의 주가를 보여주며 이 가격으로 매수했을 때의 수익률을 측정하는데 사용합니다.
        </InfoText>
        <InfoText>
          3번째 상자에 대한 설명으로, "기준" 열에서 매수가는 말 그대로 이 가격에 사는 것을 추천한다는 뜻이며, 이때의 적정주가와 수익률을 알려주는데, 만약 종가가 매수가보다 낮다면(수익률이 +라면) 매수가까지 매수를 추천드립니다.
        </InfoText>
        <InfoText>
          그리고 매수한 주식을 3등분해서 1차 매도가에 1/3을, 2차 매도가에 1/3을 매도하는 것을 추천드라며, 이후로 2차 매도가를 넘긴 가격에서는 자율적으로 매도를 추천드립니다.
        </InfoText>
        <InfoText>
          [자주묻는질문] {"\n"}
          1. 매도가가 매수가보다 낮아요: {"\n"}
          이는 조회한 회사의 자기자본이익률이 요구수익률보다 낮아서 현재가치로 환산시 더 낮게 가치가 계산되기 때문입니다. 또한 매도가가 -일 경우도 같이 설명됩니다.
          {"\n"}{"\n"}
          2. 계산 오류라고 떠요: {"\n"}
          이는 주식 데이터를 가져오는 과정에서 대부분은 일관된 구조를 갖추고 있으나, 간혹 몇몇 주식의 경우 다른 구조를 띄고 있어서 예외처리가 필요합니다. 2천개가 넘는 주식을 일일이 검토하기에는 무리가 있어서, 계산 오류가 뜰 시 개발자 전용 챗봇으로 바로 로그가 가도록하여 조치를 취하고 있으니 조금만 기다려 주세요.
        </InfoText>
        <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.barami62.proferPriceApp')}>
          <InfoText>
            유료버전 링크
          </InfoText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://open.kakao.com/o/srKtElZc')}
        >
          <InfoText>
            개발자 오픈카톡 (터치시 카톡 프로필로 이동)
          </InfoText>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};
export default InfoScreen;