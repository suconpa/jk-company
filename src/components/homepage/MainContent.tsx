import { Grid } from "@mui/material";
import testIMG from "assets/img/portfolio/thumbnails/1.jpg";
import testIMG2 from "assets/img/portfolio/thumbnails/2.jpg";
import styled from "styled-components";
import mainIMG from "assets/img/bg-masthead.jpg";

const MainContent = () => {
  return (
    <HomePageContainer>
      <MainImg>
        {/* <img src={mainIMG} alt="" /> */}
        <h2>오늘 더 희망찬 미래를 위해</h2>
      </MainImg>
      <TextBox>
        <div>
          <h2>국내 최고의 기술력</h2>
          <p>
            대한민국 광대의 전기사업을 이끌어 가는 유통그룹의 다양한 사업분야를
            소개합니다.
          </p>
        </div>
      </TextBox>
      <Section01>
        <ImgWrapper>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <img src={testIMG} alt="" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <img src={testIMG} alt="" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <img src={testIMG} alt="" />
            </Grid>
          </Grid>
        </ImgWrapper>
      </Section01>
      <Section02>
        <TextBox>
          <div>
            <h2>사업분야</h2>
            <p>
              대한민국 광대의 전기사업을 이끌어 가는 유통그룹의 다양한
              사업분야를 소개합니다.
            </p>
          </div>
        </TextBox>
        <ImgWrapper02>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <img src={testIMG2} alt="" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <img src={testIMG2} alt="" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <img src={testIMG2} alt="" />
            </Grid>
          </Grid>
        </ImgWrapper02>
      </Section02>
      <Section03>
        <TextBox>
          <div>
            <h2>더불어 사는 아름다운 사회를 위해</h2>
            <p>
              대한민국 광대의 전기사업을 이끌어 가는 유통그룹의 다양한
              사업분야를 소개합니다.
            </p>
          </div>
        </TextBox>
        <ImgWrapper02>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={4}>
              <img src={testIMG2} alt="" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <img src={testIMG2} alt="" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <img src={testIMG2} alt="" />
            </Grid>
          </Grid>
        </ImgWrapper02>
      </Section03>
    </HomePageContainer>
  );
};

const HomePageContainer = styled.div`
  text-align: center;
  margin: 0 auto;
`;

const ImgWrapper = styled.article`
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

const Section01 = styled.div`
  padding: 80px 0;
`;

const TextBox = styled.div`
  padding: 20px;
  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    line-height: 5rem;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

const Section02 = styled.div`
  padding: 80px 0;
  width: 80%;
  margin: 0 auto;
`;

const ImgWrapper02 = styled.div`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const Section03 = styled.div`
  padding: 80px 0;

  img {
    height: 400px;
    width: 100%;
  }
`;

const MainImg = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 600px;
  background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.45281862745098034) 0%,
      #21212189 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${mainIMG}) no-repeat center center;
  /* 기타 스타일링 속성들을 추가할 수 있습니다. */

  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    color: #fff;
    font-size: 4.5rem;
  }
`;

export default MainContent;
