import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AddBooks from "../pages/AddBooks";
import BookDetails from "../pages/BookDetails";
import EditBooks from "../pages/EditBooks";
import App from "../App";
import PrivetRoute from "./PrivetRoute";
import AllBook from "../pages/AllBook";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/addbooks",
        element: (
          <PrivetRoute>
            <AddBooks />,
          </PrivetRoute>
        ),
      },
      {
        path: "/editbooks/:id",
        element: (
          <PrivetRoute>
            <EditBooks />,
          </PrivetRoute>
        ),
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/allBooks",
        element: <AllBook />,
      },
    ],
  },
]);

export default routes;
