import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
// === RESET ===
${reset}

html {
  font-size: 10px;
}

body {
font-family: 'Pretendard Variable','Noto Sans KR','Apple SD Gothic Neo','맑은 고딕','Malgun Gothic','sans-serif';
  box-sizing: border-box;
  overflow-y: scroll;
  -ms-overflow-style:none;
  scrollbar-width: none;
  color: #1F1F1F;

  ::-webkit-scrollbar {
    display: none;
  }
}

.a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

button {
  padding: 0;
  cursor: pointer;
  border: none;
  color: inherit;
  background-color: transparent;
}

a{
text-decoration: none;
    color: inherit;
}

textarea:focus, input:focus{
    outline: none;
}

input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none;
    border: none;
    border-radius: 0;
    padding: 0;
    box-sizing: border-box;
  }

h1 {
  margin: 0;
}


`;

export default GlobalStyle;
