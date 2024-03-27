import ImgHeader from "components/common/ImgHeader/ImgHeader";
import CompanyName from "components/common/footer/CompanyName";
import styled from "styled-components";

const IntroductionCeo = () => {
  return (
    <>
      <ImgHeader content="인사말" />
      <IntroductionCeoStyle>
        <h2>내일을 향하는 창해 에탄올</h2>

        <p>
          인사 드립니다. <br />
          많은 이익을 추구하며 급속한 성장을 추구하기 보다는 안정적이고 내실
          있는 경영이야말로 <br /> 실패 없는 기업을 만드는 지름길이라 생각
          합니다.
          <br /> 물은 작은 곳에서 출발하지만 흐르다 보면 또 다른 큰 물을 만나
          시내를 이루고 강이 되고 바다가 됩니다. <br />또 물은 높은 곳에서 낮은
          곳으로 흐르는 겸손함을 가지고 있습니다. <br />
          제이앤케이건설은 물처럼 겸손하게 고객의 이익을 최우선으로
          생각하겠습니다. <br /> 흙탕물을 일으키며 빨리 가기 보다는 늘 맑고
          깨끗하게 천천히 목적지를 향해 나아가는 <br />
          저희 제이앤케이건설은 늘 흐르는 물처럼 잠시 머무를 수는 있지만 <br />
          절대 멈추지 않고, 급속한 성장보다는 안정적이고 내실있는 기업으로
          성장해 나갈 것입니다.
        </p>
        <CompanyName />
      </IntroductionCeoStyle>
    </>
  );
};

const IntroductionCeoStyle = styled.div`
  padding: 100px 0;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 3rem;
    margin-bottom: 50px;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 6rem;
  }
`;

export default IntroductionCeo;
