import * as React from "react";
import { Link } from "react-router-dom";
import "animate.css";
import { useState } from "react";

import styled from "styled-components";

function Header() {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <HeaderContainer
      onMouseEnter={() => {
        setMouseOver(true);
      }}
      onMouseLeave={() => {
        setMouseOver(false);
      }}
      color={mouseOver ? "#fff" : ""}
    >
      <HeaderStyle>
        <h1>
          <Link to="/">J&K</Link>
        </h1>
        <NavStyle>
          <ul className="main-ul">
            <li>
              회사소개
              {mouseOver && (
                <div className="box animate__animated animate__fadeInDown animate__faster">
                  <Link to="/introduction-ceo">인사말</Link>
                  <Link to="/company-organization">회사조직도</Link>
                  <Link to="board">사훈 및 경영지침</Link>
                </div>
              )}
            </li>
            <li>
              회사소개
              {mouseOver && (
                <div className="box animate__animated animate__fadeInDown animate__faster">
                  <Link to="/introductionCeo-ceo">인사말</Link>
                  <Link to={""}>회사조직도</Link>
                  <Link to={""}>사훈 및 경영지침</Link>
                </div>
              )}
            </li>
            <li>
              회사소개
              {mouseOver && (
                <div className="box animate__animated animate__fadeInDown animate__faster">
                  <Link to={""}>인사말</Link>
                  <Link to={""}>회사조직도</Link>
                  <Link to={""}>사훈 및 경영지침</Link>
                </div>
              )}
            </li>
            <li>
              회사소개
              {mouseOver && (
                <div className="box animate__animated animate__fadeInDown animate__faster">
                  <Link to={""}>인사말</Link>
                  <Link to={""}>회사조직도</Link>
                  <Link to={""}>사훈 및 경영지침</Link>
                </div>
              )}
            </li>
          </ul>
        </NavStyle>
      </HeaderStyle>

      {/* {mouseOver && (
        <DropMenu className="animate__animated animate__fadeInDown animate__faster">
          <div className="container">
            <div>
              <Link to={""}>인사말</Link>
              <Link to={""}>회사조직도</Link>
              <Link to={""}>사훈 및 경영지침</Link>
            </div>
            <div>
              <Link to={""}>공사실적</Link>
            </div>
            <div>
              <Link to={""}>오시는 길</Link>
            </div>
            <div>
              <Link to={""}>고객지원</Link>
            </div>
          </div>
        </DropMenu>
      )} */}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  width: 100%;
  background-color: ${(props) => props.color};
  z-index: 100000;
`;

const NavStyle = styled.nav`
  display: flex;
  margin: 0 auto;
  padding: 5px;
  /* box-shadow: inset 0px 0px 3px 1px rgb(0, 38, 255); */

  .main-ul {
    display: flex;
    gap: 100px;
    font-size: 2rem;
    padding: 10px;
  }

  .main-ul li {
    display: flex;
    justify-content: center;
  }

  .box {
    width: 155px;
    text-align: center;
    background-color: #fff;
    position: absolute;
    padding: 10px;
    margin-top: 60px;
    font-size: 1.8rem;
  }

  .box a {
    display: block;
    margin: 10px 0;
  }
`;

const HeaderStyle = styled.header`
  height: 100px;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  display: flex;
  background-color: ${(props) => props.color};
  color: ${(props) => props.color};

  transition: background-color 1s ease-in-out; /* 배경색 변경에 대한 1초 동안의 서서히 변하는 애니메이션 */

  h1 {
    font-size: 4rem;
    width: 100px;
    text-align: center;
  }
`;

const DropMenu = styled.div`
  max-width: 1280px;
  height: 150px;
  background-color: #ffffff;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 100px;
  font-size: 1.6rem;
  /* box-shadow: inset 0px 0px 3px 1px rgb(0, 38, 255); */
  justify-content: center;

  .container {
    display: flex;
    gap: 50px;
    /* box-shadow: inset 0px 0px 3px 1px rgb(0, 38, 255); */
  }

  a {
    font-size: 2rem;
    display: flex;
    gap: 10px;
  }
`;

export default Header;
