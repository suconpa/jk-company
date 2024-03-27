import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import IntroducePage from "../pages/IntroducePage";
import IntroductionCeo from "pages/IntroductionCeo";
import CompanyOrganization from "pages/CompanyOrganization";
import Board from "pages/Board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "introduce", element: <IntroducePage /> },
      { path: "introduction-ceo", element: <IntroductionCeo /> },
      { path: "company-organization", element: <CompanyOrganization /> },
      { path: "board", element: <Board /> },
    ],
  },
]);

export default router;
