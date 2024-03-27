import styled from "styled-components";

const CompanyName = () => {
  return (
    <CompanyNameStyle>
      <h3>제이앤케이건설</h3>
    </CompanyNameStyle>
  );
};

const CompanyNameStyle = styled.div`
  font-size: 3rem;
  margin: 50px 0;
  width: 100%;
  text-align: center;
`;
export default CompanyName;
