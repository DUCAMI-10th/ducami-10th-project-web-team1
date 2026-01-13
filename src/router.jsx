import { createBrowserRouter } from "react-router-dom";
import Main_page from "./components/user/main/Main_page.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_page />,
  },
]);

export default router;
