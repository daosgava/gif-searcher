import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/root";
import Home from "./pages/home";
import Bookmarks from "./pages/bookmarks";
import Error from "./pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);

export default router;
