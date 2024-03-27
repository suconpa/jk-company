import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <h2>J&K</h2>
        <p>회사명: 유한회사 제이앤케이건설</p>
        <p>대표자 : 김종숙</p>
        <p>사업자 등록번호 : 410-81-6630</p>
        <p>주소: 전북 김제시 공덕면 부용로 5 </p>
        <a href="tel:+0635423635">TEL: 063-542-3635 </a>/
        <a href="fax:+0635423606">FAX: 063-542-3606</a>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  z-index: 1000000;

  h2 {
    font-size: 30px;
    padding-bottom: 10px;
    font-weight: 400;
  }

  div {
    max-width: 1280px;
    margin: 0 auto;
  }

  margin: 0 auto;
  color: ${({ theme }) => theme.color.white};
  line-height: 30px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  background-color: ${({ theme }) => theme.color.primary};
  font-weight: 300;
  padding: 50px;
`;

export default Footer;
