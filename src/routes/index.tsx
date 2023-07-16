import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AddBooks from "../pages/AddBooks";
import BookDetails from "../pages/BookDetails";
import EditBooks from "../pages/EditBooks";
const routes = createBrowserRouter([
  {
    path: "/",
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
    element: <AddBooks />,
  },
  {
    path: "/editbooks/:id",
    element: <EditBooks />,
  },
  {
    path: "/book-details/:id",
    element: <BookDetails />,
  },
]);

export default routes;
