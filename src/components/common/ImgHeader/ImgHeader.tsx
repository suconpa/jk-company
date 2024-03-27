import subIMG from "assets/sub-bg.jpg";
import styled from "styled-components";

interface ImgHeaderProps {
  content: string;
}

const ImgHeader = ({ content }: ImgHeaderProps) => {
  console.log(content);
  return (
    <SubImgStyle content={content}>
      <img src={subIMG} alt="" />
      <AfterContent>{content}</AfterContent>
    </SubImgStyle>
  );
};

const SubImgStyle = styled.div`
  width: 100%;
  height: 300px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.4);
  }
`;

const AfterContent = styled.div`
  content: ${(props) => props.content};
  font-size: 3rem;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;
export default ImgHeader;
