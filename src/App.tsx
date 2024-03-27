import { Outlet } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Footer from "components/common/footer/Footer";
import Header from "components/common/header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <GlobalStyle />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
