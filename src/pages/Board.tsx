import styled from "styled-components";
import img01 from "assets/img/Group 56.png";
import img02 from "assets/img/Group 57.png";
import ImgHeader from "components/common/ImgHeader/ImgHeader";

const Board = () => {
  return (
    <>
      <ImgHeader content="사훈 및 경영지침" />
      <BoardStyle>
        <img src={img02} alt="" />
        <img src={img01} alt="" />
      </BoardStyle>
    </>
  );
};

const BoardStyle = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 100px 50px;
  img {
    width: 100%;
    padding: 50px 0;
  }
`;

export default Board;
