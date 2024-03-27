import ImgHeader from "components/common/ImgHeader/ImgHeader";
import styled from "styled-components";
import organizationIMG from "assets/img/Group 1.png";
import CompanyName from "components/common/footer/CompanyName";

const CompanyOrganization = () => {
  return (
    <>
      <ImgHeader content="회사조직도" />
      <CompanyOrganizationStyle>
        <img src={organizationIMG} alt="" />
      </CompanyOrganizationStyle>
      <CompanyName/>
    </>
  );
};

const CompanyOrganizationStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;

  padding: 100px 0;

  img {
    width: 100%;
  }
`;
export default CompanyOrganization;
